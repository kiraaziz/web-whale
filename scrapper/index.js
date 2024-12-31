const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch-cache')
const crypto = require('crypto')
const puppeteer = require('puppeteer-core')

function generateRandomName(extension){
    return `${crypto.randomBytes(2).toString('hex')}${extension}`
}

async function generateSectionHtmlFiles(processedSections, id, cssFiles, jsFiles, baseDir, isHeadless, browserPath, rootDom) {

    const previewDir = path.join(baseDir, 'preview')
    if (!fs.existsSync(previewDir)) {
        fs.mkdirSync(previewDir, { recursive: true })
    }

    const generatedPaths = []

    for (const section of processedSections) {
        const htmlContent = generateHtmlContent(section.replaceAll(`template/${id}`, ".."), cssFiles, jsFiles, baseDir)
        const pathName = generateRandomName(".html")
        const outputPath = path.join(baseDir, 'preview', pathName)
        fs.writeFileSync(outputPath, htmlContent, 'utf8')
        generatedPaths.push(pathName.replaceAll("html", "png"))
    }

    await captureScreenshots(previewDir, isHeadless, browserPath, rootDom)
    return generatedPaths
}

function generateHtmlContent(section, cssFiles, jsFiles, baseDir) {

    const cssLinks = cssFiles.map(cssFile => {
        const relativePath = path.relative(
            path.join(baseDir, 'preview'),
            path.join(baseDir, 'css', path.basename(cssFile))
        )
        return `<link rel="stylesheet" href="${relativePath}">`
    }).join('\n    ')

    const jsLinks = jsFiles.map(jsFile => {
        const relativePath = path.relative(
            path.join(baseDir, 'preview'),
            path.join(baseDir, 'js', path.basename(jsFile))
        )
        return `<script src="${relativePath}"></script>`
    }).join('\n    ')

    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${cssLinks}</head><body>${section}${jsLinks}</body></html>`
}

async function captureScreenshots(rootPath, isHeadless, browserPath, rootDom) {

    const browser = await puppeteer.launch({
        executablePath: browserPath,
        headless: isHeadless
    })

    try {
        const files = fs.readdirSync(rootPath)
        const htmlFiles = files.filter(file => path.extname(file) === '.html')
        // Process each HTML file
        for (const file of htmlFiles) {
            const htmlFilePath = path.join(rootPath, file)
            const imageFilePath = htmlFilePath.replace('.html', '.png')

            const page = await browser.newPage()
            await page.setViewport({ width: 1920, height: 1080 })

            await page.goto(`file://${htmlFilePath}`)

            await page.waitForSelector(rootDom)

            const lastSection = await page.$(`${rootDom}:last-of-type`)

            // Take a screenshot of the last <section> only
            await lastSection.screenshot({ path: imageFilePath })

            fs.unlinkSync(htmlFilePath)
            await page.close()
        }
    } catch (error) {
        console.error('Error while capturing screenshots')
    } finally {
        await browser.close()
    }
}

function createDirectories(baseDirPath) {
    const id = crypto.randomBytes(4).toString('hex');
    const baseDir = path.join(process.cwd(), baseDirPath, id);
    const cssDir = path.join(baseDir, 'css');
    const jsDir = path.join(baseDir, 'js');
    const imgDir = path.join(baseDir, 'img');
    const fontsDir = path.join(baseDir, 'fonts');

    fs.mkdirSync(baseDir, { recursive: true });
    fs.mkdirSync(cssDir, { recursive: true });
    fs.mkdirSync(jsDir, { recursive: true });
    fs.mkdirSync(imgDir, { recursive: true });
    fs.mkdirSync(fontsDir, { recursive: true });

    return { baseDir, cssDir, jsDir, imgDir, fontsDir };
}

function extractUrlsFromHtml(html, rootDom) {
    const cssLinks = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/g) || [];
    const cssUrls = cssLinks.map(link => {
        const match = link.match(/href="([^"]*)"/);
        return match ? match[1] : null;
    }).filter(url => url);

    const jsLinks = html.match(/<script[^>]*src="([^"]*)"[^>]*>/g) || [];
    const jsUrls = jsLinks.map(script => {
        const match = script.match(/src="([^"]*)"/);
        return match ? match[1] : null;
    }).filter(url => url);

    const imgLinks = html.match(/<img[^>]*src="([^"]*)"[^>]*>/g) || [];
    const imgUrls = imgLinks.map(img => {
        const match = img.match(/src="([^"]*)"/);
        return match ? match[1] : null;
    }).filter(url => url);

    const sections = html.match(new RegExp(`<(${rootDom})[^>]*>[\\s\\S]*?<\\/${rootDom}>`, 'g')) || [];

    return { cssUrls, jsUrls, imgUrls, sections };
}

async function processCssFiles(cssContent, baseUrl) {
    const fontRegex = /@font-face\s*{[^}]*?src\s*:([^}]*?)}/g
    const bgImageRegex = /background(?:-image)?\s*:\s*url\(['"]?([^'")]+)['"]?\)/g
    const urlRegex = /url\(['"]?([^'")]+)['"]?\)/g
    const fontFiles = []
    const imageFiles = []
    let match

    while ((match = fontRegex.exec(cssContent)) !== null) {
        const srcContent = match[1]
        let urlMatch

        while ((urlMatch = urlRegex.exec(srcContent)) !== null) {
            try {
                let fontUrl = urlMatch[1]

                if (!fontUrl.startsWith('http')) {
                    fontUrl = new URL(fontUrl, baseUrl).href
                }


                const response = await fetch(fontUrl)
                if (!response.ok) throw new Error(`Failed to fetch font: ${response.statusText}`)
                const arrayBuffer = await response.arrayBuffer()
                const cleanUrl = fontUrl.split(/[?#]/)[0]
                const extension = path.extname(cleanUrl)
                const fileName = generateRandomName(extension)
                const fontPath = path.join(fontsDir, fileName)

                fs.writeFileSync(fontPath, Buffer.from(arrayBuffer))

                cssContent = cssContent.replace(urlMatch[1], `../fonts/${fileName}`)

            } catch (error) {
                console.error(`Error downloading font from css: ${fontUrl}`, error.message)
            }
        }
    }

    // Process background images
    let bgMatch
    while ((bgMatch = bgImageRegex.exec(cssContent)) !== null) {
        try {
            let imageUrl = bgMatch[1]
            if (!imageUrl.startsWith('http')) {
                imageUrl = new URL(imageUrl, baseUrl).href
            }

            const response = await fetch(imageUrl)
            if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)
            const arrayBuffer = await response.arrayBuffer()
            const cleanUrl = imageUrl.split(/[?#]/)[0]
            const extension = path.extname(cleanUrl) || '.jpg'
            const fileName = generateRandomName(extension)
            const imagePath = path.join(imgDir, fileName)

            fs.writeFileSync(imagePath, Buffer.from(arrayBuffer))

            cssContent = cssContent.replace(bgMatch[1], `../img/${fileName}`)
        } catch (error) {
            console.error(`Error downloading image from css: ${imageUrl}`, error.message)
        }
    }

    return { processedCss: cssContent, imageFiles, fontFiles }
}

async function fetchCssFiles(cssUrls, url, cssDir, addImportant) {
    return Promise.all(cssUrls.map(async (cssUrl) => {
        try {

            const absoluteUrl = new URL(cssUrl, url).href
            const response = await fetch(absoluteUrl)
            if (!response.ok) throw new Error(`Failed to fetch CSS: ${response.statusText}`)
            const cssContent = await response.text()
            const { processedCss, fontFiles, imageFiles } = await processCssFiles(cssContent, absoluteUrl)
            const fileName = generateRandomName('.css')
            fs.writeFileSync(path.join(cssDir, fileName), addImportant ? processedCss : processedCss.replaceAll("!important", ""))
            fs.writeFileSync(path.join(cssDir, fileName))

            return {
                fontFiles,
                imageFiles, fileName
            }
        } catch (error) {
            console.error(`Error downloading CSS: ${cssUrl}`, error.message)
            return null
        }
    }));
}

async function fetchJsFiles(jsUrls, url, jsDir) {
    return Promise.all(jsUrls.map(async (jsUrl) => {
        try {
            const absoluteUrl = new URL(jsUrl, url).href
            const response = await fetch(absoluteUrl)
            if (!response.ok) throw new Error(`Failed to fetch JS: ${response.statusText}`)
            const jsContent = await response.text()
            const fileName = generateRandomName('.js')
            fs.writeFileSync(path.join(jsDir, fileName), jsContent)

            return {
                originalUrl: jsUrl, fileName
            }
        } catch (error) {
            console.error(`Error downloading JS: ${jsUrl}`, error.message)
            return null
        }
    }));
}

// async function fetchImgFiles(imgUrls, url, imgDir) {
//     return Promise.all(imgUrls.map(async (imgUrl) => {
//         try {
//             const absoluteUrl = new URL(imgUrl, url).href
//             const response = await fetch(absoluteUrl)
//             if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)
//             const arrayBuffer = await response.arrayBuffer()
//             const contentType = response.headers.get('content-type')
//             const extension = contentType.split('/')[1] || 'jpg'
//             const fileName = generateRandomName(`.${extension}`)
//             fs.writeFileSync(path.join(imgDir, fileName), Buffer.from(arrayBuffer))

//             return {
//                 originalUrl: imgUrl, fileName
//             }
//         } catch (error) {
//             console.error(`Error downloading image: ${imgUrl}`, error.message)
//             return null
//         }
//     }));
// }

async function processTemplate({
    baseDirPath,
    url,
    isHeadless,
    addImportant,
    browserPath,
    rootDom
}) {

    try {

        const response = await fetch(url)
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`)

        const html = await response.text()

        const { baseDir, cssDir, jsDir, imgDir } = createDirectories(baseDirPath);
        const { cssUrls, jsUrls, imgUrls, sections } = extractUrlsFromHtml(html, rootDom);

        const cssResults = (await fetchCssFiles(cssUrls, url, cssDir, addImportant)).filter(result => result)
        const jsFiles = (await fetchJsFiles(jsUrls, url, jsDir)).filter(file => file)
        // const imgFiles = (await fetchImgFiles(imgUrls, url, imgDir)).filter(file => file)
        const imgFiles = []
        const cssFiles = cssResults.map(result => result.fileName)
        const fontFiles = cssResults.flatMap(result => result.fontFiles)
        const cssImageFiles = cssResults.flatMap(result => result.imageFiles)

        console.log(cssFiles)
        let processedSections = sections.map(section => {
            let processedSection = section
            imgFiles.forEach(img => {
                if (img) {
                    processedSection = processedSection.replace(
                        new RegExp(img.originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                        img.newPath
                    )
                }
            })
            return processedSection
        })

        const previews = await generateSectionHtmlFiles(processedSections, baseDir, cssFiles, imgFiles, baseDir, isHeadless, browserPath, rootDom)
        let pluginCode = `function myFunction(editor){
            'use strict'
    
            const domComponents = editor.DomComponents
            const blockManager = editor.BlockManager
    
            ${processedSections.map((section, index) => `
            domComponents.addType('section${index + 1}', {
                model: {
                    defaults: {
                        tagName: 'div',
                        classes: [],
                        droppable: true,
                        traits: [],
                        components: \`${section.replace(/`/g, '\\`')}\`
                    }
                }
            })
    
            blockManager.add('section${index + 1}', {
                label: 'Section ${index + 1}',
                category: 'Sections',
                content: {
                    type: 'section${index + 1}',
                },
                media: \`<img src="template/${id}/preview/${previews[index]}" />\`,
            })`).join('\n')}
        }`

        const pluginFileName = generateRandomName('.js')
        fs.writeFileSync(path.join(baseDir, pluginFileName), pluginCode)

        return {baseDir, cssFiles, jsFiles, imgFiles, fontFiles}

    } catch (error) {
        console.error("Error processing template:", error.message)
    }
}

(async () => {
    try {
        const result = await processTemplate({
            baseDirPath: './public/templates/',  // Your base directory
            url: 'https://mobirise.com/extensions/servicem5/demoblocks.html',  // Target URL
            isHeadless: !true,  // Set to false for non-headless mode
            addImportant: true,  // Whether to add !important to CSS styles
            browserPath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',  // Path to browser
            rootDom: 'section',  // Default root DOM element to process
        })

        console.log("Files processed:", result)
    } catch (error) {
        console.error("Error processing template:", error)
    }
})()
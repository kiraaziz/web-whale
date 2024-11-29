const fs = require('fs')
const path = require('path')
const axios = require('axios')
const crypto = require('crypto')
// const puppeteer = require('puppeteer');

const generateRandomName = (extension) => {
    return `${crypto.randomBytes(8).toString('hex')}${extension}`
}


// // Create a directory for previews
// const previewDir = path.join('preview');
// fs.mkdirSync(previewDir, { recursive: true });

// async function generatePreviewsForSections(sections, previewDir) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     // Set the viewport to handle potential responsive designs
//     await page.setViewport({ width: 1280, height: 800 });

//     const previews = [];
//     for (let i = 0; i < sections.length; i++) {
//         const section = sections[i];
//         const htmlContent = `
//             <!DOCTYPE html>
//             <html>
//             <head>
//                 <style>
//                     body {
//                         margin: 0;
//                         padding: 0;
//                         display: flex;
//                         justify-content: center;
//                         align-items: center;
//                         min-height: 100vh;
//                         background: #fff;
//                     }
//                 </style>
//             </head>
//             <body>
//                 ${section}
//             </body>
//             </html>
//         `;

//         try {
//             await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
//             const previewPath = path.join(previewDir, `section_${i + 1}.png`);
//             await page.screenshot({ path: previewPath, fullPage: true });

//             previews.push(`template/${id}/preview/section_${i + 1}.png`);
//         } catch (error) {
//             console.error(`Error generating preview for section ${i + 1}:`, error);
//         }
//     }

//     await browser.close();
//     return previews;
// }


async function processUrl(url) {
    const id = crypto.randomBytes(4).toString('hex')
    const baseDir = path.join(process.cwd(), '..', 'public', 'template', id)
    const cssDir = path.join(baseDir, 'css')
    const jsDir = path.join(baseDir, 'js')
    const imgDir = path.join(baseDir, 'img')
    const fontsDir = path.join(baseDir, 'fonts')

    fs.mkdirSync(baseDir, { recursive: true })
    fs.mkdirSync(cssDir, { recursive: true })
    fs.mkdirSync(jsDir, { recursive: true })
    fs.mkdirSync(imgDir, { recursive: true })
    fs.mkdirSync(fontsDir, { recursive: true })

    try {
        const response = await axios.get(url)
        const html = response.data

        const cssLinks = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/g) || []
        const cssUrls = cssLinks.map(link => {
            const match = link.match(/href="([^"]*)"/)
            return match ? match[1] : null
        }).filter(url => url)

        const jsLinks = html.match(/<script[^>]*src="([^"]*)"[^>]*>/g) || []
        const jsUrls = jsLinks.map(script => {
            const match = script.match(/src="([^"]*)"/)
            return match ? match[1] : null
        }).filter(url => url)

        const imgLinks = html.match(/<img[^>]*src="([^"]*)"[^>]*>/g) || []
        const imgUrls = imgLinks.map(img => {
            const match = img.match(/src="([^"]*)"/)
            return match ? match[1] : null
        }).filter(url => url)

        const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/g) || []


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

                        const response = await axios.get(fontUrl, { responseType: 'arraybuffer' })
                        // Remove query params and hash from URL for extension
                        const cleanUrl = fontUrl.split(/[?#]/)[0]
                        const extension = path.extname(cleanUrl)
                        const fileName = generateRandomName(extension)
                        const fontPath = path.join(fontsDir, fileName)

                        fs.writeFileSync(fontPath, response.data)

                        // Replace the old font URL with the new path
                        cssContent = cssContent.replace(
                            urlMatch[1],
                            `../fonts/${fileName}`
                        )

                        fontFiles.push(`../fonts/${fileName}`)
                    } catch (error) {
                        console.error(`Error downloading font: ${urlMatch[1]}`, error)
                    }
                }
            }

            // Process background images
            let bgMatch;
            while ((bgMatch = bgImageRegex.exec(cssContent)) !== null) {
                try {
                    let imageUrl = bgMatch[1];
                    if (!imageUrl.startsWith('http')) {
                        imageUrl = new URL(imageUrl, baseUrl).href;
                    }

                    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
                    const cleanUrl = imageUrl.split(/[?#]/)[0];
                    const extension = path.extname(cleanUrl) || '.jpg';
                    const fileName = generateRandomName(extension);
                    const imagePath = path.join(imgDir, fileName);

                    fs.writeFileSync(imagePath, response.data);

                    cssContent = cssContent.replace(
                        bgMatch[1],
                        `/template/${id}/img/${fileName}`
                    );

                    imageFiles.push(`/template/${id}/img/${fileName}`);
                } catch (error) {
                    console.error(`Error downloading background image: ${bgMatch[1]}`, error);
                }
            }

            return { processedCss: cssContent, fontFiles, imageFiles }
        }

        const cssPromises = cssUrls.map(async (cssUrl) => {
            try {
                const absoluteUrl = new URL(cssUrl, url).href
                const response = await axios.get(absoluteUrl)
                const { processedCss, fontFiles, imageFiles } = await processCssFiles(response.data, absoluteUrl)
                const fileName = generateRandomName('.css')
                fs.writeFileSync(path.join(cssDir, fileName), processedCss.replaceAll("!important", ""))
                return {
                    cssPath: `/template/${id}/css/${fileName}`,
                    fontFiles,
                    imageFiles
                }
            } catch (error) {
                console.error(`Error downloading CSS: ${cssUrl}`, error)
                return null
            }
        })

        const jsPromises = jsUrls.map(async (jsUrl) => {
            try {
                const absoluteUrl = new URL(jsUrl, url).href
                const response = await axios.get(absoluteUrl)
                const fileName = generateRandomName('.js')
                fs.writeFileSync(path.join(jsDir, fileName), response.data)
                return `/template/${id}/js/${fileName}`
            } catch (error) {
                console.error(`Error downloading JS: ${jsUrl}`, error)
                return null
            }
        })

        const imgPromises = imgUrls.map(async (imgUrl) => {
            try {
                const absoluteUrl = new URL(imgUrl, url).href
                const response = await axios.get(absoluteUrl, { responseType: 'arraybuffer' })
                const contentType = response.headers['content-type']
                const extension = contentType.split('/')[1] || 'jpg'
                const fileName = generateRandomName(`.${extension}`)
                fs.writeFileSync(path.join(imgDir, fileName), response.data)

                return {
                    originalUrl: imgUrl,
                    newPath: `template/${id}/img/${fileName}`
                }
            } catch (error) {
                console.error(`Error downloading image: ${imgUrl}`, error)
                return null
            }
        })

        const cssResults = (await Promise.all(cssPromises)).filter(result => result)
        const jsFiles = (await Promise.all(jsPromises)).filter(file => file)
        const imgFiles = (await Promise.all(imgPromises)).filter(file => file)

        const cssFiles = cssResults.map(result => result.cssPath)
        const fontFiles = cssResults.flatMap(result => result.fontFiles)
        const cssImageFiles = cssResults.flatMap(result => result.imageFiles)

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

        // await generatePreviewsForSections(processedSections, "");


        let pluginCode = `
    export const canvasLoader${id} = { 
        styles: [
            ${cssFiles.map(file => `'${file}'`).join(',\n            ')}
        ],
        scripts: [
            ${jsFiles.map(file => `'${file}'`).join(',\n            ')}
        ]
    }

    window.HeadingPlugin = (editor) => {
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
                type: 'section${index + 1}'
            },
            media: \`<svg viewBox="0 0 24 24">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
            </svg>\`
        })`).join('\n')}
    }`

        const pluginFileName = generateRandomName('.js')
        fs.writeFileSync(path.join(baseDir, pluginFileName), pluginCode)

        return {
            id,
            cssFiles,
            jsFiles,
            imgFiles: [...imgFiles.map(img => img.newPath), ...cssImageFiles],
            fontFiles,
            sectionsCount: sections.length,
            pluginPath: `/public/template/${id}/${pluginFileName}`
        }

    } catch (error) {
        console.error('Error processing URL:', error)
        throw error
    }
}


// Example usage:
processUrl('https://mobirise.com/extensions/shopm5/furniture-store/', "essencem5")
    .then(result => console.log(result))
    .catch(error => console.error(error))
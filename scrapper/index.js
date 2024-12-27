const fs = require('fs')
const path = require('path')
// const axios = require('axios')
const fetch = require('node-fetch-cache')
const crypto = require('crypto')
const puppeteer = require('puppeteer-core')

const generateRandomName = (extension) => {
    return `${crypto.randomBytes(8).toString('hex')}${extension}`
}

const previewDir = path.join('preview')
fs.mkdirSync(previewDir, { recursive: true })

async function generateSectionHtmlFiles(processedSections, id, cssFiles, cssImageFiles, jsFiles, baseDir) {
    // Create preview directory if it doesn't exist
    const previewDir = path.join(baseDir, 'preview');
    if (!fs.existsSync(previewDir)) {
        fs.mkdirSync(previewDir, { recursive: true });
    }

    // Initialize an array to store paths
    const generatedPaths = [];

    // Process each section
    for (const section of processedSections) {

        console.log(Date.now() + " start create preview")

        const htmlContent = generateHtmlContent(section.replaceAll(`template/${id}`, ".."), cssFiles, jsFiles, baseDir);

        // Create HTML file for the section
        const pathName = generateRandomName(".html");
        const outputPath = path.join(baseDir, 'preview', pathName);
        fs.writeFileSync(outputPath, htmlContent, 'utf8');

        // Add the output path to the array
        generatedPaths.push(pathName.replaceAll("html", "png"));

        console.log(Date.now() + " end with preview")

    }

    await captureScreenshots(previewDir)

    // Return the array of generated paths
    return generatedPaths;
}

function generateHtmlContent(section, cssFiles, jsFiles, baseDir) {
    // Generate relative paths for CSS and JS files
    const cssLinks = cssFiles.map(cssFile => {
        const relativePath = path.relative(
            path.join(baseDir, 'preview'),
            path.join(baseDir, 'css', path.basename(cssFile))
        );
        return `<link rel="stylesheet" href="${relativePath}">`;
    }).join('\n    ');

    const jsLinks = jsFiles.map(jsFile => {
        const relativePath = path.relative(
            path.join(baseDir, 'preview'),
            path.join(baseDir, 'js', path.basename(jsFile))
        );
        return `<script src="${relativePath}"></script>`;
    }).join('\n    ');

    // Create HTML template
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${cssLinks}
</head>
<body>
    ${section}
    ${jsLinks}
</body>
</html>`;
}

async function processUrl(url, name) {
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


        const response = await fetch(url);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.statusText}`);
        const html = await response.text();

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

        const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/g) || [];

        console.log(Date.now() + " load site")
        async function processCssFiles(cssContent, baseUrl) {
            const fontRegex = /@font-face\s*{[^}]*?src\s*:([^}]*?)}/g;
            const bgImageRegex = /background(?:-image)?\s*:\s*url\(['"]?([^'")]+)['"]?\)/g;
            const urlRegex = /url\(['"]?([^'")]+)['"]?\)/g;
            const fontFiles = [];
            const imageFiles = [];
            let match;

            while ((match = fontRegex.exec(cssContent)) !== null) {
                const srcContent = match[1];
                let urlMatch;

                while ((urlMatch = urlRegex.exec(srcContent)) !== null) {
                    try {
                        let fontUrl = urlMatch[1];
                        if (!fontUrl.startsWith('http')) {
                            fontUrl = new URL(fontUrl, baseUrl).href;
                        }

                        const response = await fetch(fontUrl);
                        if (!response.ok) throw new Error(`Failed to fetch font: ${response.statusText}`);
                        const arrayBuffer = await response.arrayBuffer();
                        const cleanUrl = fontUrl.split(/[?#]/)[0];
                        const extension = path.extname(cleanUrl);
                        const fileName = generateRandomName(extension);
                        const fontPath = path.join(fontsDir, fileName);

                        fs.writeFileSync(fontPath, Buffer.from(arrayBuffer));
                        console.log(Date.now() + " download font file")

                        cssContent = cssContent.replace(urlMatch[1], `../fonts/${fileName}`);
                        fontFiles.push(`../fonts/${fileName}`);
                    } catch (error) {
                        console.error(`Error downloading font: ${urlMatch[1]}`, error);
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

                    const response = await fetch(imageUrl);
                    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
                    const arrayBuffer = await response.arrayBuffer();
                    const cleanUrl = imageUrl.split(/[?#]/)[0];
                    const extension = path.extname(cleanUrl) || '.jpg';
                    const fileName = generateRandomName(extension);
                    const imagePath = path.join(imgDir, fileName);

                    fs.writeFileSync(imagePath, Buffer.from(arrayBuffer));

                    cssContent = cssContent.replace(bgMatch[1], `/template/${id}/img/${fileName}`);
                    imageFiles.push(`/template/${id}/img/${fileName}`);
                } catch (error) {
                    console.error(`Error downloading background image: ${bgMatch[1]}`, error);
                }
            }

            return { processedCss: cssContent, fontFiles, imageFiles };
        }

        const cssPromises = cssUrls.map(async (cssUrl) => {
            try {
                const absoluteUrl = new URL(cssUrl, url).href;
                const response = await fetch(absoluteUrl);
                if (!response.ok) throw new Error(`Failed to fetch CSS: ${response.statusText}`);
                const cssContent = await response.text();
                const { processedCss, fontFiles, imageFiles } = await processCssFiles(cssContent, absoluteUrl);
                const fileName = generateRandomName('.css');
                fs.writeFileSync(path.join(cssDir, fileName), processedCss.replaceAll("!important", ""));

                console.log(Date.now() + " download css file")

                return {
                    cssPath: `/template/${id}/css/${fileName}`,
                    fontFiles,
                    imageFiles,
                };
            } catch (error) {
                console.error(`Error downloading CSS: ${cssUrl}`, error);
                return null;
            }
        });

        const jsPromises = jsUrls.map(async (jsUrl) => {
            try {
                const absoluteUrl = new URL(jsUrl, url).href;
                const response = await fetch(absoluteUrl);
                if (!response.ok) throw new Error(`Failed to fetch JS: ${response.statusText}`);
                const jsContent = await response.text();
                const fileName = generateRandomName('.js');
                fs.writeFileSync(path.join(jsDir, fileName), jsContent);

                console.log(Date.now() + " download js file")

                return `/template/${id}/js/${fileName}`;
            } catch (error) {
                console.error(`Error downloading JS: ${jsUrl}`, error);
                return null;
            }
        });

        const imgPromises = imgUrls.map(async (imgUrl) => {
            try {
                const absoluteUrl = new URL(imgUrl, url).href;
                const response = await fetch(absoluteUrl);
                if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
                const arrayBuffer = await response.arrayBuffer();
                const contentType = response.headers.get('content-type');
                const extension = contentType.split('/')[1] || 'jpg';
                const fileName = generateRandomName(`.${extension}`);
                fs.writeFileSync(path.join(imgDir, fileName), Buffer.from(arrayBuffer));

                console.log(Date.now() + " download img file")

                return {
                    originalUrl: imgUrl,
                    newPath: `template/${id}/img/${fileName}`,
                };
            } catch (error) {
                console.error(`Error downloading image: ${imgUrl}`, error);
                return null;
            }
        });

        console.log(Date.now() + " start download css")
        const cssResults = (await Promise.all(cssPromises)).filter(result => result);
        // const cssResults = [].filter(result => result);

        console.log(Date.now() + " start download js")
        const jsFiles = (await Promise.all(jsPromises)).filter(file => file);
        // const jsFiles = [].filter(file => file);

        console.log(Date.now() + " start download img")
        const imgFiles = (await Promise.all(imgPromises)).filter(file => file);
        // const imgFiles = [].filter(file => file);

        const cssFiles = cssResults.map(result => result.cssPath);
        const fontFiles = cssResults.flatMap(result => result.fontFiles);
        const cssImageFiles = cssResults.flatMap(result => result.imageFiles);

        let processedSections = sections.map(section => {
            let processedSection = section;
            imgFiles.forEach(img => {
                if (img) {
                    processedSection = processedSection.replace(
                        new RegExp(img.originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                        img.newPath
                    );
                }
            });
            return processedSection;
        });


        console.log(Date.now() + " start preview")

        const previews = await generateSectionHtmlFiles(processedSections, id, cssFiles, imgFiles, jsFiles, baseDir);

        let pluginCode = `function myFunction(editor){
            'use strict';
    
            const domComponents = editor.DomComponents;
            const blockManager = editor.BlockManager;
    
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
            });
    
            blockManager.add('section${index + 1}', {
                label: 'Section ${index + 1}',
                category: 'Sections',
                content: {
                    type: 'section${index + 1}',
                },
                media: \`<img src="template/${id}/preview/${previews[index]}" />\`,
            });`).join('\n')}
        }`;

        const pluginFileName = generateRandomName('.js');
        fs.writeFileSync(path.join(baseDir, pluginFileName), pluginCode);

        return {
            name,
            styles: cssFiles,
            scripts: jsFiles,
            previews: previews.map((v)=>{
                return `/template/${id}/preview/${v}`
            }),
            sectionsCount: sections.length,
            pluginPath: `/template/${id}/${pluginFileName}`,
            pluginPathScript: `<script src="/template/${id}/${pluginFileName}"></script>`,
        };

    } catch (error) {
        console.error('Error processing URL:', error)
        throw error
    }
}

async function captureScreenshots(rootPath) {
    // Launch the browser once
    const browserPath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    const browser = await puppeteer.launch({
        executablePath: browserPath,
        headless: !true
    });

    try {
        // Get all files in the root directory
        const files = fs.readdirSync(rootPath);

        // Filter to get only HTML files
        const htmlFiles = files.filter(file => path.extname(file) === '.html');

        // Process each HTML file
        for (const file of htmlFiles) {
            const htmlFilePath = path.join(rootPath, file);
            const imageFilePath = htmlFilePath.replace('.html', '.png');

            // Create a new page for each HTML file
            const page = await browser.newPage();
            await page.setViewport({ width: 1920, height: 1080 });

            // Open the HTML file
            await page.goto(`file://${htmlFilePath}`);

            try {
                // Wait for the section element to load
                await page.waitForSelector('section');

                const lastSection = await page.$('section:last-of-type');

                // Take a screenshot of the last <section> only
                await lastSection.screenshot({ path: imageFilePath });

                // Log the screenshot saved path
                // Close the page
                fs.unlinkSync(htmlFilePath);
            } catch (error) {
                try {
                    // Wait for the section element to load
                    await page.waitForSelector('nav');

                    const lastSection = await page.$('nav:last-of-type');

                    // Take a screenshot of the last <section> only
                    await lastSection.screenshot({ path: imageFilePath });

                    // Log the screenshot saved path
                    // Close the page
                    fs.unlinkSync(htmlFilePath);
                } catch (error) {
                    console.error('Error while capturing screenshots: ');
                }
            }
            await page.close();
        }
    } catch (error) {
        console.error('Error while capturing screenshots:');
    } finally {
        // Close the browser
        await browser.close();
    }
}

async function processAndSaveResults() {

    const urls = [
        { url: 'https://mobirise.com/extensions/stockm5/demoblocks.html', name: 'stockm5' },
        // { url: 'https://mobirise.com/extensions/placem5/demoblocks.html', name: 'placem5' },
        // { url: 'https://mobirise.com/extensions/valuem5/demoblocks.html', name: 'valuem5' },
        // { url: 'https://mobirise.com/extensions/carem5/demoblocks.html', name: 'Carem5' },
        // { url: 'https://mobirise.com/extensions/servicem5/demoblocks.html', name: 'servicem5' },
        // { url: 'https://mobirise.com/extensions/talkm5/livedemoblocks.html', name: 'talkm5' },
        // { url: 'https://mobirise.com/extensions/flexm5/demoblocks.html', name: 'flexm5' },
        // { url: 'https://mobirise.com/extensions/progressm5/demoblocks.html', name: 'progressm5' },
        // { url: 'https://mobirise.com/extensions/flavorm5/demoblocks.html', name: 'flavorm5' },
        // { url: 'https://mobirise.com/extensions/decorm5/demoblocks.html', name: 'decorm5' },
        // { url: 'https://mobirise.com/extensions/ridem5/demoblocks.html', name: 'ridem5' },
        // { url: 'https://mobirise.com/extensions/replym5/demoblocks.html', name: 'replym5' },
        // { url: 'https://mobirise.com/extensions/healthm5/demoblocks.html', name: 'healthm5' },
        // { url: 'https://mobirise.com/extensions/printm5/demoblocks.html', name: 'printm5' },
        // { url: 'https://mobirise.com/extensions/trustm5/demoblocks.html', name: 'trustm5' },
        // { url: 'https://mobirise.com/extensions/energym5/demoblocks.html', name: 'energym5' },
        // { url: 'https://mobirise.com/extensions/tutorm5/livedemoblock.html', name: 'tutorm5' },
        // { url: 'https://mobirise.com/extensions/devicem5/demoblocks.html', name: 'devicem5' },
        // { url: 'https://mobirise.com/extensions/immersem5/demoblocks.html', name: 'immersem5' },
        // { url: 'https://mobirise.com/extensions/strategym5/demoblocks.html', name: 'strategym5' },
        // { url: 'https://mobirise.com/extensions/forwardm5/demoblocks.html', name: 'forwardm5' },
        // { url: 'https://mobirise.com/extensions/essencem5/demoblocks.html', name: 'essencem5' },
        // { url: 'https://mobirise.com/extensions/modelm5/demoblocks.html', name: 'modelm5' },
        // { url: 'https://mobirise.com/extensions/buildm5/livedemoblocks.html', name: 'buildm5' },
    ];

    try {
        // Map over URLs and process each with processUrl
        const results = await Promise.all(
            urls.map(({ url, name }) =>
                processUrl(url, name).catch(error => ({ error: error.message, url }))
            )
        );

        // Save the results to a JSON file
        await fs.writeFileSync('results/'+generateRandomName(".json"), JSON.stringify(results, null, 2), 'utf-8');
        console.log('Results saved to results.json');
    } catch (error) {
        console.error('Error processing URLs:', error);
    }
}


processAndSaveResults()
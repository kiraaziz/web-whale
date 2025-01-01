const fs = require('fs')
const fsx = require('fs').promises;
const path = require('path')
const fetch = require('node-fetch-cache');
const { generateRandomName } = require('./generateRandomName');

function extractUrlsFromHtml(html, rootDom) {
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

    const sections = html.match(new RegExp(`<(${rootDom})[^>]*>[\\s\\S]*?<\\/${rootDom}>`, 'g')) || []

    return { cssUrls, jsUrls, imgUrls, sections }
}

async function processCssFiles(cssContent, sheetUrl, baseUrl) {
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
                    fontUrl = new URL(fontUrl, sheetUrl).href
                }

                const response = await fetch(fontUrl)
                if (!response.ok) throw new Error(`Failed to fetch font: ${response.statusText}`)
                const arrayBuffer = await response.arrayBuffer()
                const cleanUrl = fontUrl.split(/[?#]/)[0]
                const extension = path.extname(cleanUrl)
                const fileName = generateRandomName(extension)
                const fontPath = path.join(baseUrl, "../fonts", fileName)

                fs.writeFileSync(fontPath, Buffer.from(arrayBuffer))
                cssContent = cssContent.replaceAll(urlMatch[1], `../fonts/${fileName}`)
                fontFiles.push(fileName)
            } catch (error) {
                // console.error(`Error downloading font: ${urlMatch[1]}`, error.message)
            }
        }
    }

    // Process background images
    let bgMatch
    while ((bgMatch = bgImageRegex.exec(cssContent)) !== null) {
        try {
            let imageUrl = bgMatch[1]
            if (!imageUrl.startsWith('http')) {
                imageUrl = new URL(imageUrl, sheetUrl).href
            }

            const response = await fetch(imageUrl)
            if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)
            const arrayBuffer = await response.arrayBuffer()
            const cleanUrl = imageUrl.split(/[?#]/)[0]
            const extension = path.extname(cleanUrl) || '.jpg'
            const fileName = generateRandomName(extension)
            const imagePath = path.join(baseUrl, "../img", fileName)

            fs.writeFileSync(imagePath, Buffer.from(arrayBuffer))

            cssContent = cssContent.replaceAll(bgMatch[1], `../img/${fileName}`)
            imageFiles.push(fileName)
        } catch (error) {
            // console.error(`Error downloading background image: ${bgMatch[1]}`, error.message)
        }
    }

    return { processedCss: cssContent, fontFiles, imageFiles }
}

async function fetchCssFiles(cssUrls, url, cssDir, addImportant) {
    return Promise.all(cssUrls.map(async (cssUrl) => {
        try {

            const absoluteUrl = new URL(cssUrl, url).href
            const response = await fetch(absoluteUrl)
            if (!response.ok) throw new Error(`Failed to fetch CSS: ${response.statusText}`)
            const cssContent = await response.text()
            const { processedCss, fontFiles, imageFiles } = await processCssFiles(cssContent, absoluteUrl, cssDir)
            const fileName = generateRandomName('.css')
            fs.writeFileSync(path.join(cssDir, fileName), addImportant ? processedCss : processedCss.replaceAll("!important", ""))

            return {
                fontFiles,
                imageFiles,
                fileName
            }
        } catch (error) {
            console.error(`Error downloading CSS: ${cssUrl}`, error.message)
            return null
        }
    }))
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
            // console.error(`Error downloading JS: ${jsUrl}`, error.message)
            return null
        }
    }))
}

async function fetchImgFiles(imgUrls, url, imgDir) {
    return Promise.all(imgUrls.map(async (imgUrl) => {
        try {
            const absoluteUrl = new URL(imgUrl, url).href
            const response = await fetch(absoluteUrl)
            if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)
            const arrayBuffer = await response.arrayBuffer()
            const contentType = response.headers.get('content-type')
            const extension = contentType.split('/')[1] || 'jpg'
            const fileName = generateRandomName(`.${extension}`)
            fs.writeFileSync(path.join(imgDir, fileName), Buffer.from(arrayBuffer))

            return {
                originalUrl: imgUrl, fileName
            }
        } catch (error) {
            // console.error(`Error downloading image: ${imgUrl}`, error.message)
            return null
        }
    }))
}

module.exports = { extractUrlsFromHtml, processCssFiles, fetchJsFiles, fetchCssFiles, fetchImgFiles }
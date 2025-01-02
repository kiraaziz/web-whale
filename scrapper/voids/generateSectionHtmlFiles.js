const fs = require('fs')
const path = require('path')
const { generateRandomName } = require('./generateRandomName')
const { generateHtmlContent } = require('./generateHtmlContent')
const { captureScreenshots } = require('./captureScreenshots')


async function generateSectionHtmlFiles(processedSections, id, cssFiles, jsFiles, baseDir, isHeadless, browserPath, rootDom) {

    const previewDir = path.join(baseDir, 'preview')
    if (!fs.existsSync(previewDir)) {
        fs.mkdirSync(previewDir, { recursive: true })
    }

    const generatedPaths = []

    for (const section of processedSections) {
        try {
            const htmlContent = generateHtmlContent(section, cssFiles, jsFiles, baseDir)
            const pathName = generateRandomName(".html")
            const outputPath = path.join(baseDir, 'preview', pathName)
            fs.writeFileSync(outputPath, htmlContent, 'utf8')
            generatedPaths.push(pathName.replaceAll("html", "png"))
        } catch (error) {
            console.error(`Failed to generate HTML file for section: ${error}`);
        }
    }

    try {
        await captureScreenshots(previewDir, isHeadless, browserPath, rootDom)
    } catch (error) {
        console.error(`Failed to capture screenshots: ${error}`);
    }

    return generatedPaths
}

async function generateSectionHtmlFilesPreview(processedSections, id, cssFiles, jsFiles, baseDir, isHeadless, browserPath, rootDom) {

    const previewDir = path.join(baseDir, 'meta')
    if (!fs.existsSync(previewDir)) {
        fs.mkdirSync(previewDir, { recursive: true })
    }

    const generatedPaths = []

    for (const section of [processedSections]) {

        const htmlContent = generateHtmlContent(section.replaceAll("templates/" + path.basename(baseDir), ".."), cssFiles, jsFiles, baseDir)
        const pathName = "preview.html"
        const outputPath = path.join(baseDir, 'meta', pathName)
        fs.writeFileSync(outputPath, htmlContent, 'utf8')
        generatedPaths.push(pathName.replaceAll("html", "png"))
    }

    await captureScreenshots(previewDir, isHeadless, browserPath, "body" )
    return generatedPaths
}

module.exports = { generateSectionHtmlFiles, generateSectionHtmlFilesPreview }

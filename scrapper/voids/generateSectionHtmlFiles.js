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

        const htmlContent = generateHtmlContent(section, cssFiles, jsFiles, baseDir)
        const pathName = generateRandomName(".html")
        const outputPath = path.join(baseDir, 'preview', pathName)
        fs.writeFileSync(outputPath, htmlContent, 'utf8')
        generatedPaths.push(pathName.replaceAll("html", "png"))
    }

    await captureScreenshots(previewDir, isHeadless, browserPath, rootDom)
    return generatedPaths
}

module.exports = { generateSectionHtmlFiles }

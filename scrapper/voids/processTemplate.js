const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch-cache')
const { createDirectories } = require('./createDirectories')
const { extractUrlsFromHtml, fetchCssFiles, fetchJsFiles, fetchImgFiles } = require('./extractFromHtml')
const { generateSectionHtmlFiles, generateSectionHtmlFilesPreview } = require('./generateSectionHtmlFiles')
const { generateRandomName } = require('./generateRandomName')
const { getFlatStructure } = require('./getFlatStructure')


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

        const { baseDir, cssDir, jsDir, imgDir } = createDirectories(baseDirPath)
        const { cssUrls, jsUrls, imgUrls, sections } = extractUrlsFromHtml(html, rootDom)

        const cssResults = (await fetchCssFiles(cssUrls, url, cssDir, addImportant))
        const jsFiles = (await fetchJsFiles(jsUrls, url, jsDir)).filter(file => file).flatMap(result => result.fileName)
        const imgFiles = (await fetchImgFiles(imgUrls, url, imgDir)).filter(file => file)
        // const imgFiles = []
        const cssFiles = cssResults.flatMap(result => result.fileName)
        const fontFiles = cssResults.flatMap(result => result.fontFiles)
        const cssImageFiles = cssResults.flatMap(result => result.imageFiles)

        let processedSections = sections.map(section => {
            let processedSection = section
            imgFiles.forEach(img => {
                if (img) {
                    processedSection = processedSection.replace(
                        new RegExp(img.originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                        "../img/" + img.fileName
                    )
                }
            })
            return processedSection
        })

        let processedSectionsSave = sections.map(section => {
            let processedSection = section
            imgFiles.forEach(img => {
                if (img) {
                    processedSection = processedSection.replace(
                        new RegExp(img.originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
                        "templates/" + path.basename(baseDir) + "/img/" + img.fileName
                    )
                }
            })
            return processedSection
        })

        const previewScreenShot = processedSectionsSave.slice(0, 2).join('\n')

        await generateSectionHtmlFilesPreview(previewScreenShot, baseDir, cssFiles, jsFiles, baseDir, isHeadless, browserPath, rootDom)
        return

        const previews = await generateSectionHtmlFiles(processedSections, baseDir, cssFiles, jsFiles, baseDir, isHeadless, browserPath, rootDom)

        let pluginCode = `function myFunction(editor){
            'use strict'

            const domComponents = editor.DomComponents
            const blockManager = editor.BlockManager

            ${processedSectionsSave.map((section, index) => `
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
                media: \`<img src="templates/${path.basename(baseDir)}/preview/${previews[index]}" />\`,
            })`).join('\n')}
        }`

        // First, store the function as a string properly

        const pluginFileName = generateRandomName('.js')
        fs.writeFileSync(path.join(baseDir, pluginFileName), pluginCode)

        const structure = await getFlatStructure(baseDir);
        return {
            base: path.basename(baseDir),
            options: {
                baseDirPath,
                url,
                isHeadless,
                addImportant,
                browserPath,
                rootDom
            },
            structure
        }

    } catch (error) {
        // console.error("Error processing template:", error.message)
    }
}

module.exports = { processTemplate }
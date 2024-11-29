const fs = require('fs')
const path = require('path')
const axios = require('axios')
const crypto = require('crypto')

const generateRandomName = (extension) => {
    return `${crypto.randomBytes(8).toString('hex')}${extension}`
}

async function processUrl(url) {
    // Generate 8 character random ID
    const id = crypto.randomBytes(4).toString('hex')

    // Create directory structure in public folder
    const baseDir = path.join(process.cwd(), '..', 'public', 'template', id)
    const cssDir = path.join(baseDir, 'css')
    const jsDir = path.join(baseDir, 'js')
    const imgDir = path.join(baseDir, 'img')

    fs.mkdirSync(baseDir, { recursive: true })
    fs.mkdirSync(cssDir, { recursive: true })
    fs.mkdirSync(jsDir, { recursive: true })
    fs.mkdirSync(imgDir, { recursive: true })

    try {
        // Fetch the HTML content
        const response = await axios.get(url)
        const html = response.data

        // Extract CSS links
        const cssLinks = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/g) || []
        const cssUrls = cssLinks.map(link => {
            const match = link.match(/href="([^"]*)"/)
            return match ? match[1] : null
        }).filter(url => url)

        // Extract JS links
        const jsLinks = html.match(/<script[^>]*src="([^"]*)"[^>]*>/g) || []
        const jsUrls = jsLinks.map(script => {
            const match = script.match(/src="([^"]*)"/)
            return match ? match[1] : null
        }).filter(url => url)

        // Extract image links
        const imgLinks = html.match(/<img[^>]*src="([^"]*)"[^>]*>/g) || []
        const imgUrls = imgLinks.map(img => {
            const match = img.match(/src="([^"]*)"/)
            return match ? match[1] : null
        }).filter(url => url)

        // Extract sections
        const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/g) || []

        // Download and save CSS files
        const cssPromises = cssUrls.map(async (cssUrl) => {
            try {
                const absoluteUrl = new URL(cssUrl, url).href
                const response = await axios.get(absoluteUrl)
                const fileName = generateRandomName('.css')
                fs.writeFileSync(path.join(cssDir, fileName), response.data)
                return `/template/${id}/css/${fileName}`
            } catch (error) {
                console.error(`Error downloading CSS: ${cssUrl}`, error)
                return null
            }
        })

        // Download and save JS files
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

        // Download and save images
        const imgPromises = imgUrls.map(async (imgUrl) => {
            try {
                const absoluteUrl = new URL(imgUrl, url).href
                const response = await axios.get(absoluteUrl, { responseType: 'arraybuffer' })
                const contentType = response.headers['content-type']
                const extension = contentType.split('/')[1] || 'jpg'
                const fileName = generateRandomName(`.${extension}`)
                fs.writeFileSync(path.join(imgDir, fileName), response.data)

                // Return both the new path and original URL for replacement
                return {
                    originalUrl: imgUrl,
                    newPath: `/template/${id}/img/x`
                    // newPath: `template/public/${id}/img/${fileName}`
                }
            } catch (error) {
                console.error(`Error downloading image: ${imgUrl}`, error)
                return null
            }
        })

        // Wait for all downloads to complete
        const cssFiles = (await Promise.all(cssPromises)).filter(file => file)
        const jsFiles = (await Promise.all(jsPromises)).filter(file => file)
        const imgFiles = (await Promise.all(imgPromises)).filter(file => file)

        // Replace image URLs in sections
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

        // Generate plugin code
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
    // Section ${index + 1} component
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

        // Save the plugin file
        const pluginFileName = generateRandomName('.js')
        fs.writeFileSync(path.join(baseDir, pluginFileName), pluginCode)

        return {
            id,
            cssFiles,
            jsFiles,
            imgFiles: imgFiles.map(img => img.newPath),
            sectionsCount: sections.length,
            pluginPath: `/public/template/${id}/${pluginFileName}`
        }

    } catch (error) {
        console.error('Error processing URL:', error)
        throw error
    }
}
// Example usage:
// processUrl('https://mobirise.com/extensions/stockm5/food-business/', "Stockm5" )
//     .then(result => console.log(result))
//     .catch(error => console.error(error))

processUrl('https://mobirise.com/extensions/essencem5/demoblocks.html', "essencem5" )
    .then(result => console.log(result))
    .catch(error => console.error(error))
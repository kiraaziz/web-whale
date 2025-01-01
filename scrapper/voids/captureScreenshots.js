const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer-core')


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

module.exports = { captureScreenshots }

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

            let lastSection
            if(rootDom === "body"){
                await page.waitForSelector("body")
                lastSection = await page.$(`body:last-of-type`)
            }else{
                await page.waitForSelector("body>*")
                lastSection = await page.$(`body>*:last-of-type`)
            }

            if (lastSection) {
 
                const boundingBox = await lastSection.boundingBox();
                if (boundingBox) {
                    // Take a screenshot of the last <section> only
                    await lastSection.screenshot({ path: imageFilePath });
                } else {
                    console.error(`Skipping screenshot for ${file}: Element has 0 height.`);
                }
            } else {
                console.error(`Skipping screenshot for ${file}: Selector not found.`);
            }

            fs.unlinkSync(htmlFilePath)
            await page.close()
        }
    } catch (error) {
        console.error('Error while capturing screenshots ' + error.message)
    } finally {
        await browser.close()
    }
}

module.exports = { captureScreenshots }

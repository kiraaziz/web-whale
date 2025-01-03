const { processTemplate } = require("./voids/processTemplate")
const { zipFiles } = require("./voids/zipFiles");

const ScrapLite = async (name, after = "demoblocks", isReverse = false) => {
    try {
        const result_ = await processTemplate({
            baseDirPath: './',
            url: `https://mobirise.com/extensions/${name}/${after}.html`,
            isHeadless: true,
            addImportant: true,
            browserPath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            rootDom: 'section',
        })

        const result = {
            ...result_,
            name,
            isReverse
        }

        zipFiles(name, result)

    } catch (error) { }
}



const RunApp = async () => {
    // await ScrapLite("flexm5")
    // await ScrapLite("coolm5")
    await ScrapLite("valuem5")
    // await ScrapLite("nutritionm5")
    // await ScrapLite("servicem5")
    // await ScrapLite("ridem5")
    // await ScrapLite("replym5")
 
}

RunApp()

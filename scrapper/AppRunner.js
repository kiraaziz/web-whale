const { processTemplate } = require("./voids/processTemplate")

const ScrapLite = async (name, isReverse = false) => {
    try {
        const result_ = await processTemplate({
            baseDirPath: '../public/templates/',
            url: `https://mobirise.com/extensions/${name}/liveblock.html`,
            isHeadless: true,
            addImportant: true,
            browserPath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            rootDom: 'section',
        })

        const result = {
            ...result_,
            name, isReverse
        }

    } catch (error) { }
}


const RunApp = async () => {
    await ScrapLite()
    await ScrapLite()
    await ScrapLite()
}

RunApp()

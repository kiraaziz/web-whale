const { after } = require("lodash");
const { processTemplate } = require("./voids/processTemplate")
const { zipFiles } = require("./voids/zipFiles");

const ScrapLite = async (config) => {
    const {
        name = "defaultName",
        url,
        after = "livedemoblocks",
        fullUrl = false,
        isHeadless = true,
        addImportant = false,
        browserPath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        ignore = ["strong-none"],
        rootDom = ["body>section"],
        baseDirPath = './'
    } = config;

    let url_ = fullUrl ? url : `https://mobirise.com/extensions/${name.toLowerCase()}/${after}.html`;

    try {
        const result_ = await processTemplate({
            baseDirPath,
            url: url_,
            isHeadless,
            addImportant,
            browserPath,
            ignore,
            rootDom,
        });

        await zipFiles(name, {
            ...result_,
            name: name.toLowerCase(),
            isReverse: false
        });

        console.log(name + " done");

    } catch (error) {
        console.log(error);
    }
};



const RunApp = async () => {

    await ScrapLite({
        name: "Test V2",
        url: "https://preview.colorlib.com/theme/capitalshop/",
        rootDom: ["body>main>section"],
        fullUrl: true,
        isHeadless: false,
        addImportant: true
    })

    // await ScrapLite("lendex", "https://htmldemo.net/lendex/lendex/index.html", null, true)
    // await ScrapLite("elevatem5", "https://mobirise.com/extensions/elevatem5/demoblocks.html", null, true)
    // await ScrapLite("cinemam5", "https://mobirise.com/extensions/cinemam5/demoblocks.html", null, true)
    // await ScrapLite("parkm5", "https://mobirise.com/extensions/parkm5/demoblocks.html", null, true)
    // await ScrapLite({
    //     name: "dentalm5",
    //     after: "demoblocks",
    //     fullUrl: false,
    //     isHeadless: !true,
    // })
    // await ScrapLite("artistm5", "https://mobirise.com/extensions/artistm5/demoblocks.html", null, true)
    // await ScrapLite("beatm5", "https://mobirise.com/extensions/beatm5/livedemoblocks.html", null, true)
    // await ScrapLite("valuem5")
    // await ScrapLite("nutritionm5")
    // await ScrapLite("servicem5")
    // await ScrapLite("ridem5")
    // await ScrapLite("replym5")
    // await ScrapLite("healthm5")
    // await ScrapLite("resumem5")
    // await ScrapLite("operationm5")

    // await ScrapLite("planm5")
    // await ScrapLite("beautym5")
    // await ScrapLite("speakerm5")

    // await ScrapLite("shopm5", "https://mobirise.com/extensions/shopm5/furniture-store/", false, false, true)
    // await ScrapLite("flowm5", "https://mobirise.com/extensions/flowm5/demo-blocks.html", false, false, true)
    // await ScrapLite("snooze", "https://ovo-snooze.webflow.io/", false, false, true)
    // await ScrapLite("planm5")
    // await ScrapLite("planm5")
    // await ScrapLite("planm5")
    // await ScrapLite("planm5")

}

RunApp()

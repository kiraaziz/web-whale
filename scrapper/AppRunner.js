const { processTemplate } = require("./voids/processTemplate")
const Datastore = require('nedb');
const db = new Datastore({ filename: '../database.db', autoload: true });

const ScrapLite = async (name, after = "demoblocks", isReverse = false) => {
    try {
        const result_ = await processTemplate({
            baseDirPath: '../public/templates/',
            url: `https://mobirise.com/extensions/${name}/${after}.html`,
            isHeadless: true,
            addImportant: true,
            browserPath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            rootDom: 'section',
        })

        const result = {
            ...result_,
            name, isReverse
        }

        db.insert(result, (err, newDoc) => {
            console.log('Added');
        });

    } catch (error) { }
}


const RunApp = async () => {
    // await ScrapLite("coolm5")
    // await ScrapLite("nutritionm5")
    // await ScrapLite("servicem5")
    // await ScrapLite("flexm5")
    // await ScrapLite("ridem5")
    // await ScrapLite("replym5")

    // Read db
    db.find({}, (err, docs) => {
        if (err) {
            console.error('Error reading from database:', err);
            return;
        }
        console.log('Database entries:', docs);
    });
}

RunApp()

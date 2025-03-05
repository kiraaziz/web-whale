import fsPromises from 'fs/promises'

async function readPluginFile(filePath) {
    try {
        const content = await fsPromises.readFile(filePath, 'utf-8')
        const modifiedScriptText = content
        return modifiedScriptText
    } catch (error) {
        throw error
    }
}

async function readPluginFileExact(filePath) {
    try {
        const content = await fsPromises.readFile(filePath)
        return content
    } catch (error) {
        throw error
    }
}

export { readPluginFile, readPluginFileExact }
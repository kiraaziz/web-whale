import fsPromises from 'fs/promises'

//return content of file as string
async function readFile(filePath) {
    try {
        const content = await fsPromises.readFile(filePath, 'utf-8')
        const modifiedScriptText = content
        return modifiedScriptText
    } catch (error) {
        throw error
    }
}

//return same content as readFile, but without encoding
async function readFileExact(filePath) {
    try {
        const content = await fsPromises.readFile(filePath)
        return content
    } catch (error) {
        throw error
    }
}

export { readFile, readFileExact }
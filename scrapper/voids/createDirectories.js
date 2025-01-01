const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

function createDirectories(baseDirPath) {
    const id = crypto.randomBytes(4).toString('hex')
    const baseDir = path.join(process.cwd(), baseDirPath, id)
    const cssDir = path.join(baseDir, 'css')
    const jsDir = path.join(baseDir, 'js')
    const imgDir = path.join(baseDir, 'img')
    const fontsDir = path.join(baseDir, 'fonts')

    fs.mkdirSync(baseDir, { recursive: true })
    fs.mkdirSync(cssDir, { recursive: true })
    fs.mkdirSync(jsDir, { recursive: true })
    fs.mkdirSync(imgDir, { recursive: true })
    fs.mkdirSync(fontsDir, { recursive: true })

    return { baseDir, cssDir, jsDir, imgDir, fontsDir }
}


module.exports = { createDirectories }

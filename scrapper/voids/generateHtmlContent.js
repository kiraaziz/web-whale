
const path = require('path')

function generateHtmlContent(section, cssFiles, jsFiles, baseDir) {

    const cssLinks = cssFiles.map(cssFile => {
        const relativePath = path.relative(
            path.join(baseDir, 'preview'),
            path.join(baseDir, 'css', path.basename(cssFile))
        )
        return `<link rel="stylesheet" href="${relativePath}">`
    }).join('\n    ')

    const jsLinks = jsFiles.map(jsFile => {
        const relativePath = path.relative(
            path.join(baseDir, 'preview'),
            path.join(baseDir, 'js', path.basename(jsFile))
        )
        return `<script src="${relativePath}"></script>`
    }).join('\n    ')

    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${cssLinks}</head><body>${section}${jsLinks}</body></html>`
}


module.exports = { generateHtmlContent }
const crypto = require('crypto')

function generateRandomName(extension) {
    return `${crypto.randomBytes(2).toString('hex')}${extension}`
}

module.exports = { generateRandomName }

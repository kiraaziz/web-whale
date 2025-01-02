const fs = require('fs');
const archiver = require('archiver');
const path = require('path');
const rimraf = require('rimraf');

function zipFiles(name, data) {
    const output = fs.createWriteStream(`${name}.whale`);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', function () {
        console.log(`Archive created: ${archive.pointer()} total bytes`);
        // Delete the data folders after the archive is created
        const baseDir = path.resolve(data.options.baseDirPath, data.base);
        rimraf(baseDir, function (err) {
            if (err) {
                console.error(`Error deleting the directory ${baseDir}: ${err}`);
            } else {
                console.log(`Deleted the directory ${baseDir}`);
            }
        });
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);

    // Add setup.json to the archive with the data
    const setupJson = JSON.stringify(data, null, 2);
    archive.append(setupJson, { name: 'setup.json' });

    const baseDir = path.resolve(data.options.baseDirPath, data.base);

    for (const [key, files] of Object.entries(data.structure)) {
        files.forEach(file => {
            const filePath = key === 'root'
                ? path.join(baseDir, file)
                : path.join(baseDir, key, file);

            const archiveName = key === 'root' ? file : `${key}/${file}`;

            if (fs.existsSync(filePath)) {
                archive.file(filePath, { name: archiveName });
            } else {
                console.warn(`File not found: ${filePath}`);
            }
        });
    }

    archive.finalize();
}

module.exports = {
    zipFiles
}

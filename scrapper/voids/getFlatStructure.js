const fsx = require('fs').promises;
const path = require('path')

async function getFlatStructure(baseDir, structure = {}, currentPath = '') {
    const items = await fsx.readdir(baseDir, { withFileTypes: true });

    for (const dirent of items) {
        const fullPath = path.join(baseDir, dirent.name);
        if (dirent.isDirectory()) {
            // For directories, recurse with updated path
            const newPath = currentPath ? `${currentPath}/${dirent.name}` : dirent.name;
            await getFlatStructure(fullPath, structure, newPath);
        } else {
            // For files, add to structure with current path as key
            const key = currentPath || 'root';
            if (!structure[key]) {
                structure[key] = [];
            }
            const stat = await fsx.stat(fullPath);
            structure[key].push({ name: path.basename(fullPath), createdAt: stat.birthtime });
        }
    }

    // Sort files by creation date for each directory and return only names
    for (const key in structure) {
        structure[key].sort((a, b) => a.createdAt - b.createdAt);
        structure[key] = structure[key].map(file => file.name);
    }

    return structure;
}

module.exports = { getFlatStructure }

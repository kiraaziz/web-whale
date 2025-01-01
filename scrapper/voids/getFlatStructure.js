const fsx = require('fs').promises;
const path = require('path')

async function getFlatStructure(baseDir, structure = {}, currentPath = '') {
    const items = await fsx.readdir(baseDir);

    // Create an array to hold items with their stats
    const itemsWithStats = await Promise.all(
        items.map(async (item) => {
            const fullPath = path.join(baseDir, item);
            const stat = await fsx.stat(fullPath);
            return { item, fullPath, stat };
        })
    );

    for (const { item, fullPath, stat } of itemsWithStats) {
        if (stat.isDirectory()) {
            // For directories, recurse with updated path
            const newPath = currentPath ? `${currentPath}/${item}` : item;
            await getFlatStructure(fullPath, structure, newPath);
        } else {
            // For files, add to structure with current path as key
            const key = currentPath || 'root';
            if (!structure[key]) {
                structure[key] = [];
            }

            structure[key].push(path.basename(fullPath));
        }
    }

    // Sort files by creation date for each directory
    for (const key in structure) {
        structure[key].sort((a, b) => a.createdAt - b.createdAt);
    }

    return structure;
}

module.exports = { getFlatStructure }

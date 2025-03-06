import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

async function useOptimise(folderPath) {
    try {
        // Read the folder contents
        const entries = fs.readdirSync(folderPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(folderPath, entry.name);

            // Process only the 'meta' and 'preview' folders
            if (entry.isDirectory() && (entry.name === 'meta' || entry.name === 'preview')) {
                const subEntries = fs.readdirSync(fullPath, { withFileTypes: true });

                for (const subEntry of subEntries) {
                    const subFullPath = path.join(fullPath, subEntry.name);

                    if (subEntry.isFile() && isImage(subEntry.name)) {
                        // Process image
                        const extension = path.extname(subEntry.name);
                        const baseName = path.basename(subEntry.name, extension);
                        const imageFolder = path.join(fullPath, baseName);

                        // Create a folder for the image if it doesn't exist
                        if (!fs.existsSync(imageFolder)) {
                            fs.mkdirSync(imageFolder);
                        }

                        // Move the original image into the new folder
                        const originalImagePath = path.join(imageFolder, `original${extension}`);
                        fs.renameSync(subFullPath, originalImagePath);

                        // Generate images at different qualities
                        for (let quality = 5; quality < 100; quality += 20) {
                            const outputImagePath = path.join(imageFolder, `${quality}${extension}`);
                            await sharp(originalImagePath)
                                .webp({ quality }) // Adjust the format and quality
                                .toFile(outputImagePath);
                        }
                    }
                }
            }
        }
    } catch (err) {
        console.error('Error processing folder:', err);
    }
}

function isImage(fileName) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.gif'];
    return imageExtensions.includes(path.extname(fileName).toLowerCase());
}


export { useOptimise }
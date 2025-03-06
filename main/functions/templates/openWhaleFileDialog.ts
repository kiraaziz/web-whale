import { dialog } from 'electron'

async function openWhaleFileDialog() {
    try {
        return await dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [{ name: 'Whale Files', extensions: ['whale'] }]
        });
    } catch (error) {
        throw error;
    }
}

export { openWhaleFileDialog }
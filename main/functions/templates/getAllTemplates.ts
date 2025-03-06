import { templatesDb } from '../../utils/databaseSetup'

async function getAllTemplates() {
    try {
        return await (await templatesDb()).find({})
    } catch (error) {
        throw error
    }
}

export { getAllTemplates }
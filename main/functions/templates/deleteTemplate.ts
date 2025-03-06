import path from 'path'
import fsPure from 'fs'
import { app } from 'electron'
import { templatesDb } from '../../utils/databaseSetup'
 
async function deleteTemplate(templateBaseId) {
    try { 
        await (await templatesDb()).remove({ base: templateBaseId }, {})
        const templateDir = path.join(app.getPath('userData'), 'templates', path.basename(templateBaseId))
        await fsPure.promises.rmdir(templateDir, { recursive: true })
        return { success: true }
    } catch (error) {
        throw error
    }
}

export {   deleteTemplate }
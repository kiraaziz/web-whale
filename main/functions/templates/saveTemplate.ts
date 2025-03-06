import path from 'path'
import fs from 'fs/promises'
import AdmZip from 'adm-zip'
import { app } from 'electron'
import { SetupSchema } from '../../utils/SetupSchema'
import { templatesDb } from '../../utils/databaseSetup'
import { useOptimise } from './useOptimise'

async function saveTemplate(sourcePath: string) {
    try {
        const zip = new AdmZip(sourcePath)
        const setupJsonEntry = zip.getEntry('setup.json')

        if (!setupJsonEntry) {
            throw new Error('Setup file is corrupted or missing')
        }

        const setupJson = setupJsonEntry.getData().toString('utf-8')
        const setup = JSON.parse(setupJson)

        const isValid = SetupSchema.safeParse(setup).success
        if (!isValid) {
            throw new Error('Invalid setup configuration.')
        }

        const baseId = setup.base

        const templatesDir = path.join(app.getPath('userData'), 'templates', baseId)
        await fs.mkdir(templatesDir, { recursive: true })

        zip.extractAllTo(templatesDir, true)

        const setupJsonPath = path.join(templatesDir, 'setup.json')
        await fs.writeFile(setupJsonPath, setupJson)

        const zipFilePath = path.join(templatesDir, `template.whale`)
        await fs.writeFile(zipFilePath, Buffer.from(zip.toBuffer()))

        await useOptimise(templatesDir)
        const finalData = {
            ...setup,
            ID: baseId,
            directory: templatesDir,
        }

        const nedb = await templatesDb()
        const existingDoc = await nedb.findOne({ base: baseId })

        if (!existingDoc) {
            await nedb.insert(finalData)
        } else {
            throw new Error('Template already exists')
        }
        return { success: true }
    } catch (error) {
        throw error
    }
}


export { saveTemplate }
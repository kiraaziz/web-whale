import path from 'path'
import fs from 'fs'
import { projectsDb } from '../../utils/databaseSetup'

async function deleteProject(projectData) {
    try {
        await (await projectsDb()).remove({ _id: projectData._id }, {})

        const projectDir = path.join(projectData.projectDirectory)
        await fs.promises.rmdir(projectDir, { recursive: true })
        return { success: true }
    } catch (error) {
        throw error
    }
}

export { deleteProject }
import path from 'path'
import { app } from 'electron'
import fs from 'fs'
import { projectsDb } from '../../utils/databaseSetup'

//for meta data
async function updateProject(projectId, newData) {
    try {
        const projectStatePath = path.join(app.getPath('userData'), 'projects', 'projectState.json')
        await fs.promises.writeFile(projectStatePath, JSON.stringify(newData))
        return await (await projectsDb()).update({ _id: projectId }, { $set: newData }, {})
    } catch (error) {
        throw error
    }
}

//for  website content
async function updateProjectContent(projectDir, newData) {
    try {
        const projectStatePath = path.join(projectDir, 'projectState.json')
        await fs.promises.writeFile(projectStatePath, JSON.stringify(newData))
        return {
            sucess: true
        }
    } catch (error) {
        throw error
    }
}


export { updateProject, updateProjectContent }
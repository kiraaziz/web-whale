import path from 'path'
import { app } from 'electron'
import { v4 } from 'uuid'
import fsPromises from 'fs/promises'
import { projectsDb } from '../../utils/databaseSetup'
 
async function createProject(template) {
    try {
        const ID = v4()
        const projectDir = path.join(app.getPath('userData'), 'projects', ID)
        await fsPromises.mkdir(projectDir, { recursive: true })

        const projectStatePath = path.join(projectDir, 'projectState.json')
        await fsPromises.writeFile(projectStatePath, '{}')

        const templateDir = template.directory
        await fsPromises.cp(templateDir, projectDir, { recursive: true })
 
        const { _id, ...templateWithoutId } = template 
        const projectData = {
            ...templateWithoutId,
            name: template.typedName ? template.typedName : `untitled-${v4().slice(0, 7)}`,
            templateName: template.name,
            projectDirectory: projectDir
        }

        const setUpPath = path.join(projectDir, 'setup.json')
        await fsPromises.writeFile(setUpPath, JSON.stringify(projectData))

        const newProject = await (await projectsDb()).insert(projectData)
        return newProject
    } catch (error) {
        throw error
    }
}
 

export { createProject }
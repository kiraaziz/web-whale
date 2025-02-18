import path from 'path'
import { app } from 'electron'
import { v4 } from 'uuid'
import fs from 'fs'
import fsPromises from 'fs/promises'
import { projectsDb } from '../utils/databaseSetup'

async function getAllProjects() {
    try {
        return await (await projectsDb()).find({}).sort({name: "asc"})
    } catch (error) {
        throw error
    }
}

async function getProjectById(projectId) {
    try {
        const project = await (await projectsDb()).findOne({ _id: projectId })
        return project
    } catch (error) {
        throw error
    }
}

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

async function updateProject(projectId, newData) {
    try {
        const projectStatePath = path.join(app.getPath('userData'), 'projects', 'projectState.json')
        await fs.promises.writeFile(projectStatePath, JSON.stringify(newData))
        return await (await projectsDb()).update({ _id: projectId }, { $set: newData }, {})
    } catch (error) {
        throw error
    }
}

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

async function getProjectContent(projectDir) {
    try {
        const projectStatePath = path.join(projectDir, 'projectState.json')
        const data = await fs.promises.readFile(projectStatePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        throw error;
    }
}

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

export { getAllProjects, getProjectById, createProject, updateProject, deleteProject, updateProjectContent,getProjectContent }
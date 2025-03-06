import path from 'path'
import fs from 'fs'
import { projectsDb } from '../../utils/databaseSetup'

//get all project meta
async function getAllProjects() {
    try {
        return await (await projectsDb()).find({}).sort({ name: "asc" })
    } catch (error) {
        throw error
    }
}


//for meta data
async function getProjectById(projectId) {
    try {
        const project = await (await projectsDb()).findOne({ _id: projectId })
        return project
    } catch (error) {
        throw error
    }
}

//for website content
async function getProjectContent(projectDir) {
    try {
        const projectStatePath = path.join(projectDir, 'projectState.json')
        const data = await fs.promises.readFile(projectStatePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        throw error;
    }
}

export {
    getAllProjects,
    getProjectById,
    getProjectContent
}
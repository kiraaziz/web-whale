import Datastore from 'nedb-promises'
import path from 'path'
import { app, shell } from 'electron'
import { v4 } from 'uuid'
import fs from 'fs'
import fsPromises from 'fs/promises'

const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });

async function readPluginFile(filePath) {
    try {
        const content = await fsPromises.readFile(filePath, 'utf-8');
        const modifiedScriptText = content;
        return modifiedScriptText;
    } catch (error) {
        throw error;
    }
}

async function getAllProjects() {
    try {
        const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });
        return await projectsDb.find({});
    } catch (error) {
        console.error('Failed to retrieve all projects:', error)
        throw error
    }
}

async function getProjectById(projectId) {
    try {
        const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });
        const project = await projectsDb.findOne({ _id: projectId })
        return project
    } catch (error) {
        console.error('Failed to retrieve project:', error)
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
            name: `untitled-${v4().slice(0, 7)}`,
            projectDirectory: projectDir
        }

        const setUpPath = path.join(projectDir, 'setup.json')
        await fsPromises.writeFile(setUpPath, JSON.stringify(projectData))

        const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });
        await projectsDb.insert(projectData)
        return projectData
    } catch (error) {
        console.error('Failed to create project:', error)
        throw error
    }
}

async function updateProject(projectId, newData) {
    try {
        const projectStatePath = path.join(app.getPath('userData'), 'projects', projectId, 'projectState.json')
        await fs.promises.writeFile(projectStatePath, JSON.stringify(newData))
        return await projectsDb.update({ _id: projectId }, { $set: newData }, {})
    } catch (error) {
        console.error('Failed to update project:', error)
        throw error
    }
}

async function deleteProject(projectData) {
    try { 

        const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });
        await projectsDb.remove({ _id: projectData.projectId }, {})

        const projectDir = path.join(app.getPath('userData'), 'projects', path.basename(projectData.pathId))
        await fs.promises.rmdir(projectDir, { recursive: true })
        return { success: true }
    } catch (error) {
        console.error('Failed to delete project:', error)
        throw error
    }
}

export { readPluginFile, getAllProjects, getProjectById, createProject, updateProject, deleteProject }
import path from 'path'
import { app, ipcMain, dialog, protocol, shell } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'
import fs from 'fs/promises'
import AdmZip from 'adm-zip'
import { z } from "zod"
import Datastore from 'nedb-promises'
import { v4 } from 'uuid'

const SetupSchema = z.object({
  base: z.string(),
  options: z.object({
    baseDirPath: z.string(),
    url: z.string().url(),
    isHeadless: z.boolean(),
    addImportant: z.boolean(),
    browserPath: z.string(),
    rootDom: z.string(),
  }),
  structure: z.object({
    css: z.array(z.string()),
    root: z.array(z.string()),
    fonts: z.array(z.string()),
    img: z.array(z.string()),
    js: z.array(z.string()),
    preview: z.array(z.string()),
  }),
  name: z.string(),
  isReverse: z.boolean(),
})

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

(async () => {
  await app.whenReady()

  protocol.registerFileProtocol('asset', (request, callback) => {
    const filePath = request.url.replace('asset://', '')
    callback({ path: filePath })
  })

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}`)
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.handle('select-file', async () => {
  return dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Whale Files', extensions: ['whale'] }]
  })
})

ipcMain.handle('process-whale-file', async (event, sourcePath) => {
  try {
    const zip = new AdmZip(sourcePath)
    const setupJsonEntry = zip.getEntry('setup.json')
    if (!setupJsonEntry) {
      throw new Error('Setup file not found in the whale file')
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

    const finalData = {
      ...setup,
      ID: baseId,
      directory: templatesDir,
    }

    const nedb = Datastore.create({ filename: path.join(templatesDir, "..", 'templates.db'), autoload: true })
    const existingDoc = await nedb.findOne({ base: baseId })
    if (!existingDoc) {
      await nedb.insert(finalData)
    } else {
      throw new Error('Record with base ID already exists.')
    }
    return { success: true }
  } catch (error) {
    throw error
  }
})

ipcMain.handle('get-templates', async () => {
  const nedb = Datastore.create({ filename: path.join(app.getPath('userData'), 'templates', 'templates.db'), autoload: true })
  const docs = await nedb.find({})
  return docs
})

ipcMain.handle('delete-template', async (event, templateId) => {
  const templatesDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'templates', 'templates.db'), autoload: true });
  await templatesDb.remove({ _id: templateId }, {});
  return { success: true };
});

ipcMain.handle('send-template-data', async (event, template) => {
  const ID = v4()
  const projectDir = path.join(app.getPath('userData'), 'projects', ID)
  await fs.mkdir(projectDir, { recursive: true })

  // Create an empty projectState.json file in the new project directory
  const projectStatePath = path.join(projectDir, 'projectState.json')
  await fs.writeFile(projectStatePath, '{}')

  // Copy the entire template directory to the new project directory
  const templateDir = template.directory
  await fs.cp(templateDir, projectDir, { recursive: true });

  const projectData = {
    ...template,
    projectDirectory: projectDir
  }

  // Create a setup.json file in the new project directory with the project data
  const setUpPath = path.join(projectDir, 'setup.json')
  await fs.writeFile(setUpPath, JSON.stringify(projectData))

  const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true })
  await projectsDb.insert(projectData)
})

ipcMain.handle('get-all-projects', async (event) => {
  const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });
  const allProjects = await projectsDb.find({});
  return allProjects;
});

ipcMain.handle('get-project-by-id', async (event, projectId) => {
  const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });
  const project = await projectsDb.findOne({ _id: projectId });
  return project;
});

ipcMain.handle('delete-project', async (event, projectId) => {
  const projectsDb = Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true });
  await projectsDb.remove({ _id: projectId }, {});
  return { success: true };
});

ipcMain.handle('update-project-state', async (event, projectId, newState) => {
  const projectDir = path.join(app.getPath('userData'), 'projects', projectId);
  const projectStatePath = path.join(projectDir, 'projectState.json');
  await fs.writeFile(projectStatePath, JSON.stringify(newState));
  return { success: true };
});

ipcMain.handle('read-plugin-file', async (event, filePath) => {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const modifiedScriptText = content
    return modifiedScriptText;
  } catch (error) {
    throw error;
  }
});
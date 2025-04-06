import path from 'path'
import serve from 'electron-serve'
import { app, ipcMain, protocol } from 'electron'
import { readFile, readFileExact } from './utils/readFile'
import { useRedirectToBrowser } from './utils/useRedirectToBrowser'
import { createWindow } from './utils/createWindow'
import {
  openWhaleFileDialog,
  saveTemplate,
  getAllTemplates,
  deleteTemplate,
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  updateProjectContent,
  getProjectContent
} from './functions/index'

let mainWindow;
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

  mainWindow = createWindow('main', {
    width: 1400,
    height: 800,
    frame: false,
    // alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  // mainWindow.webContents.openDevTools();

  if (isProd) {
    await mainWindow.loadURL('app://.')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}`)
  }


})()

app.on('window-all-closed', () => app.quit())

// Read files
ipcMain.handle('read-file', async (event, filePath) => await readFile(filePath))
ipcMain.handle('read-file-exact', async (event, filePath) => await readFileExact(filePath))

// Utils and file operations
ipcMain.handle('upload-template', async (event) => await openWhaleFileDialog())
ipcMain.handle('save-template', async (event, sourcePath) => await saveTemplate(sourcePath))
ipcMain.handle('open-external-url', async (event, url) => await useRedirectToBrowser(url))

// Templates
ipcMain.handle('get-all-templates', async (event) => await getAllTemplates())
ipcMain.handle('delete-template', async (event, templateBaseId) => await deleteTemplate(templateBaseId))

// Projects
ipcMain.handle('get-all-projects', async () => await getAllProjects())
ipcMain.handle('get-project-by-id', async (event, projectId) => await getProjectById(projectId))
ipcMain.handle('create-project', async (event, template) => await createProject(template))
ipcMain.handle('update-project', async (event, data) => await updateProject(data.projectId, data.newData))
ipcMain.handle('update-project-content', async (event, data) => await updateProjectContent(data.projectDir, data.newData))
ipcMain.handle('get-project-content', async (event, data) => await getProjectContent(data))
ipcMain.handle('delete-project', async (event, data) => await deleteProject(data))

// Then modify your handlers to use this reference:
ipcMain.handle('window-minimize', () => {
  if (mainWindow) mainWindow.minimize()
  return true
})

ipcMain.handle('window-maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  }
  return true
})

ipcMain.handle('window-close', () => {
  if (mainWindow) mainWindow.close()
  return true
})

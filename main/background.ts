import path from 'path'
import serve from 'electron-serve'
import { app, ipcMain, protocol, shell } from 'electron'
import { createWindow } from './helpers'
import { readPluginFile } from './utils/readPluginFile'
import { deleteTemplate, getAllTemplates, openWhaleFileDialog, savePlugin } from './functions/usePlugins'
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from './functions/useProject'
import { useRedirectToBrowser } from './utils/useRedirectToBrowser'

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
    width: 1400,
    height: 800,
    frame: false, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  if (isProd) {
    await mainWindow.loadURL('app://.')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}`)
  }


})()

app.on('window-all-closed', () => app.quit())

// Utils and file operations
ipcMain.handle('upload-plugin', async (event) => await openWhaleFileDialog())
ipcMain.handle('save-plugin', async (event, sourcePath) => await savePlugin(sourcePath))
ipcMain.handle('open-external-url', async (event, url) => await useRedirectToBrowser(url))


// Read file for css and js files
ipcMain.handle('read-plugin-file', async (event, filePath) => await readPluginFile(filePath))

// Templates
ipcMain.handle('get-all-templates', async (event) => await getAllTemplates())
ipcMain.handle('delete-template', async (event, templateBaseId) => await deleteTemplate(templateBaseId))

// Projects
ipcMain.handle('get-all-projects', async () => await getAllProjects())
ipcMain.handle('get-project-by-id', async (event, projectId) => await getProjectById(projectId))
ipcMain.handle('create-project', async (event, template) => await createProject(template))
ipcMain.handle('update-project', async (event, data) => await updateProject(data.projectId, data.newData))
ipcMain.handle('delete-project', async (event, data) => await deleteProject(data))





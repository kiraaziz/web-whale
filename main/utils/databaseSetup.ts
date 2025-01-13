import Datastore from 'nedb-promises'
import path from 'path'
import { app } from 'electron'

const templatesDb =async()=> await Datastore.create({ filename: path.join(app.getPath('userData'), 'templates', 'templates.db'), autoload: true })
const projectsDb =async()=> await Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true })

export { projectsDb, templatesDb }

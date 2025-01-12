import Datastore from 'nedb-promises'
import path from 'path'
import { app } from 'electron'

const projectsDb =async()=> await Datastore.create({ filename: path.join(app.getPath('userData'), 'projects', 'projects.db'), autoload: true })

export { projectsDb }

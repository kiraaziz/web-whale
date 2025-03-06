import { openWhaleFileDialog } from './templates/openWhaleFileDialog';
import { saveTemplate } from './templates/saveTemplate';
import { getAllTemplates } from './templates/getAllTemplates';
import { deleteTemplate } from './templates/deleteTemplate';
import { createProject } from './projects/createProject';
import { deleteProject } from './projects/deleteProject';
import {
    getAllProjects,
    getProjectById,
    getProjectContent
} from './projects/getProject';
import {
    updateProject,
    updateProjectContent
} from './projects/updateProject';


export {
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
};
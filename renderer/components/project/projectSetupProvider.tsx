import React, { useState } from 'react'
import usePlugins from '../../hooks/usePlugins'
import AlertBox from './AlertBox'
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useProjects } from '@/hooks/useProjects';
import { useRouter } from 'next/navigation';

export default function projectSetupProvider() {

    const router = useRouter()

    const [projectData, setProjectData] = useState({ projectName: '', selectedTemplate: '' });
    const { templates, isLoadingTemplates } = usePlugins();
    const { createProject, createProjectLoading } = useProjects();

    const handleCreate = async () => {
        const project: any = await createProject({
            ...templates[projectData.selectedTemplate],
            typedName: projectData.projectName.trim()
        })

        if (project && project._id) {
            router.push(`/project?id=${project._id}`)
        }
    }

    if (isLoadingTemplates) return null

    return (
        <AlertBox className='overflow-auto min-w-[20rem] max-h-[35rem] ease-in-out duration-300' title='Create Project'>
            {createProjectLoading && <Loader2 size={20} className='animate-spin' />}
            <div>
                <label>
                    Project Name:
                    <input type="text" name="projectName" value={projectData.projectName} onChange={(e) => setProjectData(prevData => ({ ...prevData, projectName: e.target.value }))} />
                </label>
                <label>
                    Select Template:
                    <select name="selectedTemplate" value={projectData.selectedTemplate} onChange={(e) => {
                        setProjectData(prevData => ({ ...prevData, selectedTemplate: e.target.value }));
                    }}>
                        {templates.map((template, index) => (
                            <option key={index} value={index}>
                                {template.name}
                            </option>
                        ))}
                    </select>
                </label>
                <Button onClick={handleCreate}>Create Project</Button>
            </div>
        </AlertBox>
    )
}

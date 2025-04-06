import React, { useState } from 'react'
import useTemplates from '../../../hooks/useTemplates'
import AlertBox from './AlertBox'
import { Loader2, Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import { useProjects } from '@/hooks/useProjects';
import { useRouter } from 'next/navigation';
import { Input } from '../../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from 'sonner';

// Changed to PascalCase for React component naming convention
export default function ProjectSetupProvider() {
    const router = useRouter()
    const [projectData, setProjectData] = useState({ projectName: '', selectedTemplate: '' });
    const { templates, isLoadingTemplates } = useTemplates();
    const { createProject, createProjectLoading } = useProjects();
    const [open, setOpen] = useState(false)

    const handleCreate = async () => {
        if (!projectData.projectName) {
            toast.error("please select a name")
            return
        }

        if (!projectData.selectedTemplate) {
            toast.error("please select a template")
            return
        }
        const project: any = await createProject({
            ...templates[projectData.selectedTemplate],
            typedName: projectData.projectName.trim()
        })

        setOpen(false)

        if (project?._id) {
            router.push(`/project?id=${project._id}`)
        }
    }

    if (isLoadingTemplates) return null

    return (
        <AlertBox className='overflow-auto min-w-[20rem] max-h-[35rem] ease-in-out duration-300' title='Create Project' open={open} setOpen={setOpen}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Input
                        autoFocus
                        placeholder='Project name'
                        type="text"
                        value={projectData.projectName}
                        onChange={(e) => setProjectData(prev => ({
                            ...prev,
                            projectName: e.target.value
                        }))}
                    />

                    <Select
                        value={projectData.selectedTemplate}
                        onValueChange={(value) => {
                            setProjectData(prev => ({
                                ...prev,
                                selectedTemplate: value
                            }));
                        }} >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a template" />
                        </SelectTrigger>
                        <SelectContent>
                            {templates.map((template, index) => (
                                <SelectItem
                                    className='hover:cursor-pointer hover:bg-muted'
                                    key={index}
                                    value={index.toString()} >
                                    {template.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button
                    onClick={handleCreate}
                    className="w-full"
                    disabled={createProjectLoading || !projectData.projectName || !projectData.selectedTemplate}>
                    {createProjectLoading ?
                        <div className='h-5 w-5'>
                            <Loader2 size={20} className='animate-spin' />
                        </div>
                        : <>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Project
                        </>
                    }
                </Button>
            </div>
        </AlertBox>
    )
}
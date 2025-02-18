import { useHelfText } from '@/hooks/useState'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Loader, Loader2, MoreHorizontal, Pen, SaveAll, TextCursorInputIcon, Trash2, X } from 'lucide-react'
import ImageLoader from '../plugins/ImageLoader'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { useProjects } from '@/hooks/useProjects'
import { Input } from '../ui/input'
import { toast } from 'sonner'

export default function ProjectCard({ project, index }) {

    const router = useRouter()
    const { updateProject, deleteProject } = useProjects()
    const [projectName, setProjectName] = useState(project.name || "")
    const [openRename, setOpenRename] = useState(false)
    const [updateProjectLoading, setUpdateProjectLoading] = useState(false)
    const [deleteProjectLoading, setDeleteProjectLoading] = useState(false)

    const handleGoToPage = () => {
        if (!openRename) {
            router.push(`/project?id=${project._id}`)
        }
    }

    const handleEdit = () => { handleGoToPage() }
    const handleRename = async () => {
        setUpdateProjectLoading(true)
        if (openRename) {
            if (!projectName) {
                toast.error("Project name is required")
                await updateProject(project._id, { name: projectName })
                setUpdateProjectLoading(false)
                setOpenRename(true)
                return
            }
            await updateProject(project._id, { name: projectName })
            setOpenRename(false)
        } else {
            setOpenRename(true)
        }
        setUpdateProjectLoading(false)
    }

    const handleDelete = async () => {
        setDeleteProjectLoading(true)
        await deleteProject(project)
        setDeleteProjectLoading(false)
    }

    return (
        <div className='project-card group' style={{ animationDelay: `${index * 0.2}s` }} >
            <div className='w-full h-44 object-left-top rounded-lg border bg-muted relative overflow-hidden hover:cursor-pointer ' onClick={handleGoToPage}>
                <ImageLoader className='object-cover w-full h-44 object-left-top rounded-lg  absolute group-hover:scale-125  ease-in-out duration-500' url={`asset://${project.projectDirectory}/meta/preview.png`.replace(".", "/5.")} />
            </div>
            {openRename ? <div className='w-full flex mt-2 gap-2 ' >
                <Button size='icon' onClick={() => setOpenRename(false)} variant='outline' className='bg-transparent border-none text-foreground/50'>
                    <X size={15} />
                </Button>
                <form className='flex-1 flex  items-center justify-center gap-2' onSubmit={(e) => { e.preventDefault(); handleRename() }}>
                    <Input autoFocus={true} className='flex-1 bg-muted/20' placeholder='project name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                    {updateProjectLoading ? <Button size='icon' disabled={true} variant='secondary'>
                        <Loader2 size={15} className='animate-spin' />
                    </Button>
                        : <Button size='icon' onClick={handleRename} variant='secondary'>
                            <SaveAll size={15} />
                        </Button>}
                </form>
            </div>
                : <div className='w-full flex mt-1'>
                    <div className='flex-1 hover:cursor-pointer' onClick={handleGoToPage}>
                        <h1 className='text-base px-3'>{useHelfText(project.name, 35)}</h1>
                        <p className='text-xs text-muted-foreground mb-5 px-3'>
                            {project.templateName ? useHelfText(`${project.templateName.charAt(0).toUpperCase() + project.templateName.slice(1)}`, 10) : "Blank"}
                        </p>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size='icon' variant='outline' disabled={deleteProjectLoading} className='border-none bg-transparent '>
                                {deleteProjectLoading ? <Loader2 size={20} className='animate-spin' /> : <MoreHorizontal size={20} />}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-muted/80 backdrop-blur-xl p-0'>
                            <DropdownMenuItem onClick={handleEdit} className='p-0.5 hover:!bg-transparent'>
                                <div className='flex items-center justify-start gap-2 w-full text-foreground/60 hover:gap-4 ease-in-out duration-200 border-transparent hover:cursor-pointer hover:border-input hover:bg-muted/40 px-2 py-1 border rounded-md hover:text-foreground/80 '>
                                    <Pen size={15} />
                                    Edit project
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleRename} className='p-0.5 hover:!bg-transparent'>
                                <div className='flex items-center justify-start gap-2 w-full text-foreground/60 hover:gap-4 ease-in-out duration-200 border-transparent hover:cursor-pointer hover:border-input hover:bg-muted/40 px-2 py-1 border rounded-md hover:text-foreground/80 '>
                                    <TextCursorInputIcon size={15} />
                                    Rename
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDelete} className='p-0.5 hover:!bg-transparent'>
                                <div className='flex items-center justify-start gap-2 w-full text-foreground/60 hover:gap-4 ease-in-out duration-200 border-transparent hover:cursor-pointer hover:border-input hover:bg-muted/40 px-2 py-1 border rounded-md hover:text-foreground/80 '>
                                    <Trash2 size={15} />
                                    Delete
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>}
        </div>
    )
}

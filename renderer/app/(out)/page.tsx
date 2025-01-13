"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import { Grid2x2, Plus, Search } from 'lucide-react';
import { useHelfText } from '@/hooks/useState';
import { Input } from '@/components/ui/input';

const FileUpload: React.FC = () => {

    const [projects, setProjects] = useState<any[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                if ((window as any).electron?.invoke) {
                    const projects = await (window as any).electron.invoke('get-all-projects')
                    setProjects(projects);
                    setFilteredProjects(projects);
                }
            } catch (error) {
                setError('Error fetching projects: ' + error.message)
            } finally {
                setLoading(false)
            }
        }

        if (typeof window !== 'undefined') {
            fetchProjects()
        }
    }, [])

    useEffect(() => {
        setFilteredProjects([]);

        const results = projects.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(results);
    }, [searchTerm, projects]);

    if (loading) return <div className='p-5 max-w-7xl mx-auto h-2/3'><div className='flex justify-center items-center h-full w-full'>
        <span className="loader"></span>
    </div></div>

    if (error) return (
        <div className='p-5 max-w-7xl mx-auto h-2/3'>
            <div className='flex justify-center items-center h-full w-full'>
                <p>Error: {error}</p>
                <Button onClick={() => window.location.reload()} className='ml-4'>
                    Refresh
                </Button>
            </div>
        </div>
    );

    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <div className='grid grid-cols-3 gap-3'>

                <div className='col-span-full flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <Button className='rounded-full '>
                            <Plus className='w-4 h-4' />
                            Create Project
                        </Button>
                        <Link href="/up">
                            <Button variant='outline' className='rounded-full'>
                                <Grid2x2 className='w-4 h-4' />
                                Templates
                            </Button>
                        </Link>
                    </div>
                    <div
                        className='max-w-sm rounded-full w-full flex items-center justify-center relative'>
                        <Input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='rounded-full w-full pr-14'
                        />
                        <Search className='absolute right-5' size={16} />
                    </div>
                </div>
                {filteredProjects.map((project, index) => (
                    <div
                        key={project._id}
                        className='project-card'
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <Link href={`/project?id=${project._id}`}>
                            <img
                                className='object-cover w-full h-44 object-left-top rounded-lg border p-1 bg-muted'
                                src={`asset://${project.projectDirectory}/meta/preview.png`}
                                alt="Preview"
                            />
                            <h1 className='text-base px-3'>{useHelfText(project.name, 35)}</h1>
                            <p className='text-xs text-muted-foreground mb-5 px-3'>
                                {project.templateName ? useHelfText(`${project.templateName.charAt(0).toUpperCase() + project.templateName.slice(1)}`, 10) : "Blank"}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileUpload
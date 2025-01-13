"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'

const FileUpload: React.FC = () => {

    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                if ((window as any).electron?.invoke) {
                    const projects = await (window as any).electron.invoke('get-all-projects')
                    setProjects(projects)
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

    const handleDelete = async (projectId: string, pathId: string) => {
        try {
            await (window as any).electron.invoke('delete-project', { projectId, pathId });
            setProjects(projects.filter(project => project._id !== projectId));
        } catch (error) {
            alert('Error deleting project: ' + error.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div><Link href="/up">Error: {error}</Link></div>;

    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <div className='grid grid-cols-3 gap-3'>
                {projects.map((project) => (
                    <Link key={project._id} href={`/project?id=${project._id}`}>
                        <img className='object-cover w-full h-44 object-left-top rounded-lg border p-1 bg-muted' src={`asset://${project.projectDirectory}/meta/preview.png`} alt="Preview" />
                        <h1 className='text-base px-3'>{project.name}</h1>
                        <p className='text-xs text-muted-foreground mb-5 px-3'>{project.templateName ? (project.templateName.charAt(0).toUpperCase() + project.templateName.slice(1)) : "Blank"}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FileUpload
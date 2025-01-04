"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import Button component

const FileUpload: React.FC = () => {

    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Only run if window.electron exists
                if (typeof window !== 'undefined' && (window as any).electron?.invoke) {
                    const projects = await (window as any).electron.invoke('get-all-projects')
                    setProjects(projects)
                }
            } catch (error) {
                setError('Error fetching projects: ' + error.message)
            } finally {
                setLoading(false)
            }
        }
        
        fetchProjects()
    }, []) // Remove window from dependencies

    const handleDelete = async (projectId: string, pathId: string) => {
        try {
            await (window as any).electron.invoke('delete-project', {projectId, pathId});
            setProjects(projects.filter(project => project._id !== projectId));
        } catch (error) {
            alert('Error deleting project: ' + error.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div><Link href="/up">Error: {error}</Link></div>;

    return (
        <div className='p-5'>
            <h1 className='mt-5 font-bold text-2xl'>Projects</h1>
            <div className='grid grid-cols-2 gap-5'>
                {projects.map((project) => (
                    <div key={project._id} className='h-96 overflow-hidden relative p-5 bg-muted rounded-xl border'>
                        <Link href={`/project?id=${project._id}`}>
                            <img src={`asset://${project.projectDirectory}/meta/preview.png`} alt="Preview" className='opacity-50 blur-3xl absolute inset-0 h-full w-full object-cover' />
                            <div className='absolute inset-0 h-full w-full p-3'>
                                <img src={`asset://${project.projectDirectory}/meta/preview.png`} alt="Preview" className='h-full w-full object-cover object-left-top rounded' />
                            </div>
                            <h1 className='text-2xl font-bold absolute bottom-0 left-0 w-full p-3 text-background'>{project.name}</h1>
                        </Link> 
                        <Button onClick={() => handleDelete(project._id, project.projectDirectory)} className='absolute top-3 right-3'>Delete {project._id}</Button> {/* Delete button added */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileUpload
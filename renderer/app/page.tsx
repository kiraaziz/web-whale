"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';


const FileUpload: React.FC = () => {
    const [project, setProjects] = useState<any[]>([]);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const projects = await (window as any).electron.invoke('get-all-projects');
                setProjects(projects)
            } catch (error) {
                alert('Error fetching templates:' + error.message);
            }
        };
        fetchTemplates();
    }, []);

    return (
        <div className='p-5'>

            <div className='grid grid-cols-2 my-5 gap-2'>
                {project.map((project) => (
                    <Link href={`/project/id`} key={project.ID} className='border bg-muted rounded-md space-y-1 p-2'>
                        <h1>{project._id}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FileUpload
"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react';
import { useHelfText } from '@/hooks/useState';
import { Input } from '@/components/ui/input';
import PluginProvider from '@/components/plugins/PluginProvider';
import Error from '@/components/ui/Error';
import useProjects from '@/hooks/useProjects';
import ProjectSetupProvider from '@/components/project/projectSetupProvider';

const FileUpload: React.FC = () => {

    const { filteredProjects, loading, error, searchTerm, setSearchTerm } = useProjects()


    if (loading) return <div className='p-5 max-w-7xl mx-auto w-full mt-[20svh]'><div className='flex justify-center items-center h-full w-full'>
        <span className="loader"></span>
    </div></div>

    if (error) return (
        <div className='p-5 max-w-7xl mx-auto  w-full mt-[3svh]'>
            <Error message='Error fetching projects' />
        </div>
    );

    return (
        <div className='p-5 max-w-7xl w-full mx-auto'>
            <div className='grid grid-cols-3 gap-3'>
                <div className='col-span-full flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <ProjectSetupProvider />
                        <PluginProvider />
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
                {filteredProjects.length === 0 && <div className='p-5 max-w-7xl mx-auto h-2/3 pt-[14svh] col-span-full'>
                    <Error message='Error fetching projects' />
                </div>}
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
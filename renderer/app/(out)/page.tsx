"use client"

import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import PluginProvider from '@/components/plugins/PluginProvider';
import Error from '@/components/ui/Error';
import { useProjects } from '@/hooks/useProjects';
import ProjectSetupProvider from '@/components/project/projectSetupProvider';
import ProjectCard from '@/components/project/ProjectCard';

const FileUpload: React.FC = () => {

    const [filteredProjects, setFilteredProjects] = useState([])
    const { fetchProjects, loading, error, searchTerm, setSearchTerm, projects } = useProjects()

    useEffect(() => {
        fetchProjects()
    }, [])

    useEffect(() => {
        setFilteredProjects([]);
        const results = projects.filter(project =>
            project.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(results);
    }, [searchTerm, projects]);


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
                    <Error message='No projects created' />
                </div>}
                {filteredProjects.map((project, index) => (
                    <ProjectCard project={project} index={index} key={index} />
                ))}
            </div>
        </div>
    );
}

export default FileUpload
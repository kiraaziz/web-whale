"use client"
import { useState, useEffect } from 'react'

const useProjects = () => {

    const [projects, setProjects] = useState<any[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchProjects = async () => {

        await new Promise(resolve => setTimeout(resolve, 1000));
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

    useEffect(() => {
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

    return {
        projects,
        filteredProjects,
        loading,
        error,
        searchTerm,
        setSearchTerm
    }
}

export default useProjects
"use client"

import { create } from 'zustand'
import { toast } from 'sonner'

interface Project {
    // Add your project type definition here
    id: string
    name: string
    // ... other project properties
}

interface ProjectState {
    projects: Project[]
    filteredProjects: Project[]
    loading: boolean
    error: string | null
    searchTerm: string
    createProjectLoading: boolean
    updateProjectLoading: boolean
    deleteProjectLoading: boolean

    // Actions
    setSearchTerm: (term: string) => void
    fetchProjects: () => Promise<void>
    createProject: (projectData: Partial<Project>) => Promise<void>
    updateProject: (projectId: string, newData: Partial<Project>) => Promise<void>
    deleteProject: (projectId: string) => Promise<void>
}

export const useProjects = create<ProjectState>((set, get) => ({
    projects: [],
    filteredProjects: [],
    loading: true,
    error: null,
    searchTerm: '',
    createProjectLoading: false,
    updateProjectLoading: false,
    deleteProjectLoading: false,

    setSearchTerm: (term) => {
        set({ searchTerm: term })
        const { projects } = get()
        const filtered = projects.filter(project =>
            project.name.toLowerCase().includes(term.toLowerCase())
        )
        set({ filteredProjects: filtered })
    },

    fetchProjects: async () => {
        try {
            const projectsFetched = await (window as any).electron.invoke('get-all-projects')
            set({ projects: projectsFetched, loading: false })
        } catch (error: any) {
            set({ error: 'Error fetching projects: ' + error.message, loading: false })
        }
    },

    createProject: async (projectData) => {
        try {
            set({ createProjectLoading: true })
            const res = await (window as any).electron.invoke('create-project', projectData)
            await get().fetchProjects()
            set({ createProjectLoading: false })
            return res
        } catch (error: any) {
            toast.error('Error creating project: ' + error.message)
            set({ createProjectLoading: false })
        }
    },

    updateProject: async (projectId, newData) => {
        try {
            set({ updateProjectLoading: true })
            await (window as any).electron.invoke('update-project', { projectId, newData })
            await get().fetchProjects()
            set({ updateProjectLoading: false })
            toast.success("Project updated successfully")
        } catch (error: any) {
            toast.error('Error updating project: ' + error.message)
            set({ updateProjectLoading: false })
        }
    },

    deleteProject: async (projectId) => {
        try {
            set({ deleteProjectLoading: true })
            await (window as any).electron.invoke('delete-project', projectId)
            await get().fetchProjects()
            set({ deleteProjectLoading: false })
            toast.success("Project deleted successfully")
        } catch (error: any) {
            toast.error('Error deleting project: ' + error.message)
            set({ deleteProjectLoading: false })
        }
    }
}))
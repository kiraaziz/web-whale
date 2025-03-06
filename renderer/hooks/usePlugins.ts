"use client"

import { create } from 'zustand'
import { toast } from 'sonner'

interface FileResult {
    canceled: boolean
    filePaths: string[]
}

interface ProcessResult {
    success: boolean
    message?: string
}

interface Template {
    base: string
    name: string
    directory: string
}

interface PluginStore {
    isUploading: boolean
    templates: Template[]
    fetchError: string | null
    uploadError: string | null
    isLoadingTemplates: boolean
    setIsUploading: (value: boolean) => void
    setTemplates: (templates: Template[]) => void
    setFetchError: (error: string | null) => void
    setUploadError: (error: string | null) => void
    setIsLoadingTemplates: (value: boolean) => void
    fetchTemplates: () => Promise<void>
    handleFileUpload: () => Promise<ProcessResult | undefined>
}

const usePlugins = create<PluginStore>((set, get) => ({
    isUploading: false,
    templates: [],
    fetchError: null,
    uploadError: null,
    isLoadingTemplates: true,
    
    setIsUploading: (value) => set({ isUploading: value }),
    setTemplates: (templates) => set({ templates }),
    setFetchError: (error) => set({ fetchError: error }),
    setUploadError: (error) => set({ uploadError: error }),
    setIsLoadingTemplates: (value) => set({ isLoadingTemplates: value }),
    
    fetchTemplates: async () => {
        set({ isLoadingTemplates: true })
        try {
            const fetchedTemplates = await (window as any).electron.invoke('get-all-templates')
            set({ templates: fetchedTemplates })
        } catch (error) {
            set({ fetchError: `Error fetching templates: ${(error as Error).message}` })
        } finally {
            set({ isLoadingTemplates: false })
        }
    },
    
    handleFileUpload: async () => {
        try {
            set({ isUploading: true, uploadError: null })
            
            const result: FileResult = await (window as any).electron.invoke('upload-template', {
                filters: [{ name: 'Whale Files', extensions: ['whale'] }]
            })
            
            if (!result.canceled) {
                const filePath = result.filePaths[0]
                const res: ProcessResult = await (window as any).electron.invoke('save-template', filePath)
                await get().fetchTemplates()
                return res
            }
            
        } catch (error) {
            const errorMessage = `Upload failed: ${(error as Error).message}`
            set({ uploadError: errorMessage })
            toast.error(errorMessage)
        } finally {
            set({ isUploading: false })
        }
    }
}))

export default usePlugins
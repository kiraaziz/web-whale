"use client"
import { useState, useEffect } from 'react'
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

const usePlugins = () => {

    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [templates, setTemplates] = useState<Template[]>([])
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [uploadError, setUploadError] = useState<string | null>(null)
    const [isLoadingTemplates, setIsLoadingTemplates] = useState<boolean>(true)

    const fetchTemplates = async () => {
        setIsLoadingTemplates(true)
        await new Promise(resolve => setTimeout(resolve, 1000))
        try {
            const fetchedTemplates = await (window as any).electron.invoke('get-all-templates')
            setTemplates(fetchedTemplates)
        } catch (error) {
            setFetchError(`Error fetching templates: ${(error as Error).message}`)
        } finally {
            setIsLoadingTemplates(false)
        }
    }

    useEffect(() => {
        fetchTemplates()
    }, [])

    const handleFileUpload = async () => {
        try {
            setIsUploading(true)
            setUploadError(null)

            const result: FileResult = await (window as any).electron.invoke('upload-plugin', {
                filters: [{ name: 'Whale Files', extensions: ['whale'] }]
            })

            if (!result.canceled) {
                const filePath = result.filePaths[0]
                const res: ProcessResult = await (window as any).electron.invoke('save-plugin', filePath)
                await fetchTemplates()
                return res
            }

        } catch (error) {
            const errorMessage = `Upload failed: ${(error as Error).message}`
            setUploadError(errorMessage)
            toast.error(errorMessage)
        } finally {
            setIsUploading(false)
        }
    }

    return {
        isUploading,
        templates,
        isLoadingTemplates,
        fetchError,
        uploadError,
        handleFileUpload,
        reavlidate: fetchTemplates
    }
}

export default usePlugins
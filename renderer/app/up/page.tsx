"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

interface FileResult {
    canceled: boolean;
    filePaths: string[];
}

interface ProcessResult {
    success: boolean;
    message?: string;
}

const FileUpload: React.FC = () => {
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [templates, setTemplates] = useState<any[]>([]);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const templates = await (window as any).electron.invoke('get-templates');
                setTemplates(templates)
            } catch (error) {
                alert('Error fetching templates:' + error.message);
            }
        };
        fetchTemplates();
    }, []);

    const handleFileUpload = async () => {
        try {
            setIsUploading(true);

            const result: FileResult = await (window as any).electron.invoke('select-file', {
                filters: [{ name: 'Whale Files', extensions: ['whale'] }]
            });

            if (!result.canceled) {
                const filePath = result.filePaths[0];
                const res: ProcessResult = await (window as any).electron.invoke('process-whale-file', filePath);
                console.log(res);
            }
        } catch (error: any) {
            alert('Upload failed:' + error.message);
        } finally {
            setIsUploading(false);
        }
    }

    const handleTemplateClick = async (template) => {
        try {
            await (window as any).electron.invoke('send-template-data', template);
        } catch (error) {
            console.error('Error sending template data:', error);
        }
    }

    return (
        <div className='p-5'>
            <Button
                onClick={handleFileUpload}
                disabled={isUploading}
                className="w-40"
            >
                {isUploading ? 'Uploading...' : 'Upload .whale file'}
            </Button>
            <div className='grid grid-cols-3 gap-2'>
                {templates.map(template => (
                    <div key={template.ID} onClick={() => handleTemplateClick(template)}>
                        <h1>{template.name.charAt(0).toUpperCase() + template.name.slice(1)}</h1>
                        {template.structure.preview.slice(0, 3).map((previewFile, index) => (
                            <img key={index} src={`asset://${template.directory}/preview/${previewFile}`} alt="Preview" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FileUpload
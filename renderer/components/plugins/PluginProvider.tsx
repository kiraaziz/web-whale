import React from 'react'
import { Button } from '../ui/button'
import { Grid2x2 } from 'lucide-react'
import AlertBox from './AlertBox'
import usePlugins from '../../hooks/usePlugins'
import PluginCart from './PluginCart'

export default function PluginProvider() {
    const { templates, isLoadingTemplates, fetchError, handleFileUpload, isUploading, uploadError, reavlidate } = usePlugins();

    return (
        <AlertBox className='max-w-5xl w-full' title='Upload and Manage Plugins'>
            <Button onClick={handleFileUpload} disabled={isUploading} className='mb-4'>
                {isUploading ? 'Uploading...' : 'Upload Plugin'}
                <Grid2x2 className='ml-2' />
            </Button> 
            {uploadError && <p className='text-red-500'>{uploadError}</p>}
            {isLoadingTemplates ? (
                <p>Loading...</p>
            ) : fetchError ? (
                <p className='text-red-500'>Error: {fetchError}</p>
            ) : (
                <div className='w-full grid grid-cols-3 gap-3'>
                    {templates.map(template => <PluginCart key={template.ID} template={template} reavlidate={reavlidate} />)}
                </div>
            )}
        </AlertBox>
    )
}

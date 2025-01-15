import React from 'react'
import { Button } from '../ui/button'
import { Grid2x2, Loader2, Plus } from 'lucide-react'
import AlertBox from './AlertBox'
import usePlugins from '../../hooks/usePlugins'
import PluginCart from './PluginCart'
import Error from '../ui/Error'

export default function PluginProvider() {
    const { templates, isLoadingTemplates, fetchError, handleFileUpload, isUploading,  reavlidate } = usePlugins();

    return (
        <AlertBox className='max-w-5xl w-full overflow-auto min-w-[20rem] max-h-[35rem] ease-in-out duration-300' title='Upload and Manage Plugins' actionButton={<Button onClick={handleFileUpload} disabled={isUploading} className=' rounded-full '>
                {isUploading ? 'Uploading...' : 'Upload Plugin'}
                {isUploading ? <Loader2 size={16} className='animate-spin' /> : <Plus size={16} />}
            </Button>}>
            {isLoadingTemplates && templates.length === 0 ? (
                <div className='p-10 max-w-7xl mx-auto '><div className='flex justify-center items-center h-full w-full'>
                    <span className="loader"></span>
                </div></div>
            ) : fetchError ? (
                <div className='p-10 max-w-7xl mx-auto '>
                    <Error message={"Error fetching plugins"} />
                </div>
            ) :
                templates.length === 0 ? (
                    <div className='p-10 max-w-7xl mx-auto '>
                        <Error message='No plugins found' />
                    </div>
                ) : (
                    <div className='w-full grid grid-cols-3 gap-3'>
                        {templates.map((template, index) => <PluginCart key={template.base} index={index} template={template} reavlidate={reavlidate} />)}
                    </div>
                )}
        </AlertBox>
    )
}

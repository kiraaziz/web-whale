import useSoloPlugins from '@/hooks/useSoloPlugins'
import React from 'react'

export default function PluginCart({ template, reavlidate }) {

    const { deletePlugin, isLoading, error } = useSoloPlugins(template.base, reavlidate)

    return (
        <div onClick={deletePlugin}>
            <div key={template.base} className='col-span-1 border bg-muted rounded-md p-2'>
                {JSON.stringify(isLoading)} - 
                {JSON.stringify(error)}
                <h1 className='text-xl font-bold'>{template.name}</h1>
                <img src={`asset://${template.directory}/meta/preview.png`} alt="Preview" className='rounded-md' />
            </div>
        </div>
    )
}

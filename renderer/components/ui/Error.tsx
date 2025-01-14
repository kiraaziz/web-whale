import { AlertTriangle } from 'lucide-react'
import React from 'react'

export default function Error({ message }: { message: string }) {
    return (
        <div className='flex justify-center items-center h-full w-full flex-col gap-2 '>
            <img src="/svg/error.svg" alt="error" className='h-64' />
            <p className='bg-muted/50 border border-border rounded-full p-2 px-6 flex items-center gap-2'>
                <AlertTriangle size={16} />
                {message}
            </p>
        </div>
    )
}

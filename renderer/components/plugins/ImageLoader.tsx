"use client"
import { cn } from '@/lib/utils'
import { Ban } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageLoader = ({ url, className }) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const handleLoad = () => {
        setLoading(false)
        setError(false)
    }

    const handleError = () => {
        setLoading(false)
        setError(true)
    }

    return (
        <div className='w-full'>
            {loading && <div className={cn('overflow-hidden w-full ', className)}>
                <div className='animate-pulse bg-background h-full w-fulll' />
            </div>}
            {error ? (
                <div className={cn('overflow-hidden text-destructive w-full h-60 bg-destructive/20 flex items-center justify-center gap-2')}>
                    <Ban size={20} className='text-destructive' />
                    Error loading image
                </div>
            ) : (
                <img 
                    alt='image'
                    src={url}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={cn('w-full object-cover', loading ? "h-0 " : "h-44", className)}
                />
            )}
        </div>
    )
}

export default ImageLoader

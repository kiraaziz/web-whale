"use client"
import React from 'react';
import Logo from '@/components/providers/Logo';
import { auther, linkesWithIcons, visitePages, websiteLink } from '@/utils/constant';
import { useRedirectToBrowser } from '@/hooks/useState';


export default function Layout({ children }) {

    return (
        <div className="flex h-screen w-screen bg-muted/20 flex-col items-center justify-center">
            <div className='w-full h-full overflow-auto flex-1'>
                <div className='flex-1 w-full h-[calc(100vh-3rem)] flex flex-col '>
                    <div className='w-2/3 blur-3xl -translate-x-1/4 right-0 -z-10 h-4 top-0  bg-primary absolute '></div>
                    <div className='w-full pt-20 mb-10 flex items-center justify-center px-16'>
                        <div className='flex items-center justify-center gap-3  '>
                            <div className='flex justify-center items-center h-20 w-20 relative -translate-y-4'>
                                <Logo className='scale-[1.7] absolute' />
                                <Logo className='scale-[1.7] absolute blur-lg opacity-50' />
                            </div>
                            <div className='flex flex-col -space-y-1'>
                                <h1 className='text-4xl font-bold fancy-font bg-clip-text text-transparent bg-gradient-to-r from-primary to-muted'>web whale</h1>
                                <p className='text-base text-muted-foreground'>Make your own website in seconds</p>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <div className='h-[3rem] w-full bg-muted/40 backdrop-blur-sm border-t flex justify-end px-10 items-center gap-3 text-xs text-muted-foreground relative'>
                <div className='w-2/3 blur-3xl -translate-x-1/4 right-0 -z-10 h-4 top-0 -translate-y-1/2 bg-primary absolute opacity-50'></div>
                {linkesWithIcons.map((link, index) => (
                    <a href="#"
                        onClick={() => useRedirectToBrowser(`${link.link}`)}
                        key={index}>
                        <link.icon size={18} />
                    </a>
                ))}
                <div className='h-1 w-1 mx-2 bg-foreground/50 rounded-full' />
                {visitePages.map((page, index) => (
                    <>
                        <a
                            href="#"
                            onClick={() => useRedirectToBrowser(`${websiteLink}/${page}`)}
                            key={index}>
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </a>
                        {index < visitePages.length - 1 && <span>|</span>}
                    </>
                ))}
                <div className='h-1 w-1 mx-2 bg-foreground/50 rounded-full' />
                <a href="#"
                    onClick={() => useRedirectToBrowser(auther.link)} className='flex items-center gap-2 bg-background/20 px-4 py-1 rounded-full border'>
                    By {auther.name}
                </a>
            </div>
            <div className='bg !-z-10'></div>
        </div>
    )
}

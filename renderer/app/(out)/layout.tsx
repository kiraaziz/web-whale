"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { File, Home, Settings, Sparkles } from 'lucide-react';
import Logo from '@/components/providers/Logo';

export default function Layout({ children }) {

    const pathName = usePathname()

    const menuItems = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Templates', icon: File, path: '/up' },
    ];

    return (
        <div className="flex h-screen w-screen bg-muted/20">
            <div className=" w-80 relative h-full">
                <div className='absolute top-1/2 -translate-y-1/2 left-0 -z-10  w-8 rounded-full flex items-center justify-center h-full bg-background blur-2xl element-animation'>
                    <div className='w-1/2 h-4/5 rounded-full bg-muted'></div>
                </div>
                <div className='absolute bottom-0 left-0 -z-10  w-full  rounded-full flex items-center justify-center h-10 bg-primary blur-2xl element-animation'>
                </div>
                <div className='flex flex-col gap-2 p-7 h-full  w-full space-y-2  backdrop-blur-xl'>
                    <div className='w-full flex items-center gap-1'>
                        <div className='h-16 w-16 flex items-center justify-center overflow-hidden'>
                            <Logo />
                        </div>
                        <h1 className='text-2xl font-bold'>
                            Web Whale
                        </h1>
                    </div>
                    {menuItems.map(item => (
                        <Link key={item.path} href={item.path} passHref>
                            <div className={`${(pathName !== "/" ? pathName.slice(0, -1) : "/") === item.path ? 'bg-primary/5 font-semibold text-primary  border-l-4 border-primary' : 'text-foreground/70'} py-2 px-4 rounded-r-full flex gap-2`}>
                                <item.icon size={20} />
                                {item.name}   
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex-1 h-full pt-10">

                <div className='w-full h-full overflow-auto p-5 bg-background rounded-tl-2xl border-t border-l '>
                    <div className='h-72 w-full rounded-xl shadow overflow-hidden relative'>
                        <video autoPlay loop muted playsInline className='w-full h-full object-cover opacity-50 absolute order-2 '>
                            <source src="https://l4wlsi8vxy8hre4v.public.blob.vercel-storage.com/video/glass-animation-5-f0gPcjmKFIV3ot5MGOdNy2r4QHBoXt.mp4" type="video/mp4" />
                        </video>
                        <div className='absolute  order-1 h-full w-full flex flex-col items-center justify-end'>

                            <div className='flex-1'>

                            </div>
                            <div className='w-full p-4 items-center justify-end flex'>
                                <button className="gap-3 inline-flex h-12 animate-shimmer items-center justify-center rounded-full border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium   transition-colors hover:scale-105">
                                    <Sparkles size={20} />
                                    Create a website
                                </button>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

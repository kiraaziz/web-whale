import Logo from '@/components/providers/Logo'
import { Button } from '@/components/ui/button'
import { useHelfText } from '@/hooks/useState'
import { useEditor } from '@grapesjs/react'
import { FlameKindling, Redo, Undo } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface TimersProps {
    projectName: string;
}

export default function Timers({ projectName }: TimersProps) {
    const editor: any = useEditor()

    const handleUndo = () => {
        if (editor.Commands.isActive('core:undo')) {
            editor.Commands.stop('core:undo')
        } else {
            editor.Commands.run('core:undo')
        }
    }

    const handleRedo = () => {
        if (editor.Commands.isActive('core:redo')) {
            editor.Commands.stop('core:redo')
        } else {
            editor.Commands.run('core:redo')
        }
    }

    return (
        <>
            <div className='flex items-center justify-center border-r h-full w-14'>
                <Link href='/' className='flex items-center justify-center relative'>
                    <div className='h-10 absolute flex items-center justify-center overflow-hidden' >
                        <Logo />
                    </div>
                    <div className='blur opacity-70 h-10 absolute flex items-center justify-center overflow-hidden' >
                        <Logo />
                    </div>
                </Link>
            </div>
            <div className='flex items-center justify-start px-4 gap-4 border-r h-full w-[20em]'>
                <div className='flex-1 text-foreground/60'>
                    {useHelfText(projectName, 25)} 
                    {/* / <span className='text-foreground font-semibold'>
                        {useHelfText(editor.selected?.getName?.() || editor.selected?.getLabel() || 'Untitled page', 15)}
                    </span> */}
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <Button
                        onClick={handleUndo}
                        // disabled={!editor.UndoManager.hasUndo()}
                        size="icon"
                        className='bg-transparent'
                    >
                        <Undo size={18} className='text-foreground/70' />
                    </Button>
                    <Button
                        onClick={handleRedo}
                        // disabled={!editor.UndoManager.hasRedo()}
                        size="icon"
                        className='bg-transparent'
                    >
                        <Redo size={18} className='text-foreground/70' />
                    </Button>
                </div>
            </div>
        </>
    )
}
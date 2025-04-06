import { X, Minus, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { metaData } from '@/lib/variables/constant'
import Logo from './Logo'

const TitleBar = () => {

    const handleMinimize = async () => {
        await await (window as any).electron.invoke('window-minimize')
    }

    const handleMaximize = async () => {
        await await (window as any).electron.invoke('window-maximize')
    }

    const handleClose = async () => {
        await await (window as any).electron.invoke('window-close')
    }

    return (
        <div
            className="h-8 px-1 bg-muted  border-b flex items-center justify-between select-none !z-[99999999]"
            style={{ WebkitAppRegion: 'drag' } as any}>
            <div className="px-4">
                <div className='flex items-center justify-center'>
                    <div className='flex justify-center -translate-y-0.5 items-center relative '>
                        <Logo className='scale-[0.5] absolute' />
                        <Logo className='scale-[0.5] absolute blur-lg opacity-50' />
                    </div>
                    <h1 className='text-sm translate-x-6 opacity-80'>{metaData.name}
                        <span className='mx-2 text-xs text-foreground/50'>({metaData.version})</span>
                    </h1>
                </div>
            </div>
            <div
                className="flex items-center h-full"
                style={{ WebkitAppRegion: 'no-drag' } as any} >
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 rounded-none hover:bg-muted"
                    onClick={handleMinimize}>
                    <Minus className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 rounded-none hover:bg-muted"
                    onClick={handleMaximize}>
                    <Square className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 rounded-none hover:bg-destructive/10 hover:text-destructive"
                    onClick={handleClose}>
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default TitleBar
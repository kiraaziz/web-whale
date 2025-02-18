// TitleBar.jsx (React component)
import React from 'react'
import { X, Minus, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TitleBar = () => {
    const handleMinimize = () => {
        window.electron.minimize()
    }

    const handleMaximize = () => {
        window.electron.maximize()
    }

    const handleClose = () => {
        window.electron.close()
    }

    return (
        <div
            className="h-8 px-1 bg-muted  border-b flex items-center justify-between select-none"
            style={{ WebkitAppRegion: 'drag' }} // Enable window dragging
        >
            {/* App title/icon area */}
            <div className="px-4">
                <span className="text-foreground/60 text-sm font-medium"></span>
            </div> 

            {/* Window controls */}
            <div
                className="flex items-center h-full"
                style={{ WebkitAppRegion: 'no-drag' }} // Disable dragging for buttons
            >
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 rounded-none hover:bg-muted"
                    onClick={handleMinimize}
                >
                    <Minus className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 rounded-none hover:bg-muted"
                    onClick={handleMaximize}
                >
                    <Square className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 rounded-none hover:bg-destructive/10 hover:text-destructive"
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default TitleBar
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DevicesProvider, useEditor } from '@grapesjs/react'
import { Eye, Layout, Laptop, Monitor, Smartphone, Tablet, Download, PanelRightClose, PanelRightOpen } from 'lucide-react'
import React, { useState } from 'react'

export default function Screens({ isPreview, setIsPreview, showEditors, setShowEditors, saveAll }: any) {
    const editor = useEditor()
    const [isOutlineActive, setIsOutlineActive] = useState(false)

    const icons: any = {
        desktop: <Monitor size={20} />,
        tablet: <Laptop size={20} />,
        mobileLandscape: <Tablet size={20} />,
        mobilePortrait: <Smartphone size={20} />
    }

    const handlePreview = () => {
        if (isPreview) {
            editor.stopCommand('core:preview')
        } else {
            editor.runCommand('core:preview')
        }
        setIsPreview(!isPreview)
    }

    const handleOutline = () => {
        if (isOutlineActive) {
            editor.stopCommand('core:component-outline')
        } else {
            editor.runCommand('core:component-outline')
        }
        setIsOutlineActive(!isOutlineActive)
    }


    return (
        <div className='flex items-center justify-center gap-2 flex-1'>
            <div className="flex items-center gap-1  px-5">
                <Button
                    size="icon"
                    variant={!showEditors ? "default" : "outline"}
                    className={cn(
                        showEditors && "text-foreground/60",
                        "transition-all duration-200"
                    )}
                    onClick={() => setShowEditors(!showEditors)}
                >
                    {showEditors ?
                        <PanelRightClose size={20} />
                        : <PanelRightOpen size={20} />}
                </Button>
            </div>
            <DevicesProvider>
                {({ selected, select, devices }) => (
                    <div className='flex items-center justify-center gap-1 flex-1'>
                        {devices.map(device => (
                            <Button
                                key={device.id}
                                className={cn(
                                    !(selected === device.id) && "text-foreground/60",
                                    "transition-all duration-200"
                                )}
                                size="icon"
                                onClick={() => select(`${device.id}`)}
                                variant={(selected === device.id) ? "default" : "outline"}
                            >
                                {icons[device.id]}
                            </Button>
                        ))}
                    </div>
                )}
            </DevicesProvider>
            <div className="flex items-center gap-1 px-5">
                <Button
                    size="icon"
                    variant={isOutlineActive ? "default" : "outline"}
                    className={cn(
                        !isOutlineActive && "text-foreground/60",
                        "transition-all duration-200"
                    )}
                    onClick={handleOutline}
                    title="Toggle component outline"
                >
                    <Layout size={20} />
                </Button>
                <Button
                    size="icon"
                    variant={isPreview ? "default" : "outline"}
                    className={cn(
                        !isPreview && "text-foreground/60",
                        "transition-all duration-200"
                    )}
                    onClick={handlePreview}>
                    <Eye size={20} />
                </Button>
                <Button
                    size="icon"
                    variant={"outline"}
                    onClick={saveAll}>
                    <Download size={20} />
                </Button>
            </div>
        </div>
    )
}
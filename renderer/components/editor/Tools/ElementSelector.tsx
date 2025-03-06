import { Button } from '@/components/ui/button'
import { Brush, File, Layers3, LayoutPanelLeft, Settings } from 'lucide-react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function ElementSelector({ selectedElement, setSelectedElement, setShowEditors }: { selectedElement: any, setSelectedElement: any, setShowEditors: any }) {

    const elements = [
        {
            name: "components",
            icon: LayoutPanelLeft
        },
        {
            name: "style",
            icon: Brush
        },
        {
            name: "settings",
            icon: Settings
        },
        {
            name: "layers",
            icon: Layers3
        },
        {
            name: "pages",
            icon: File
        },
    ]

    return (
        <div className='items-center pt-3 h-full border-r bg-muted/60 flex flex-col gap-2 w-14'>
            {elements.map((element) => (
                <HoverCard openDelay={400}>
                    <HoverCardTrigger asChild>
                        <Button onClick={() => {
                            setShowEditors(true)
                            setSelectedElement(element.name)
                        }} size="icon" className={`${selectedElement === element.name ? "text-foreground/70" : " bg-transparent border-transparent text-foreground/50"}`} variant={selectedElement === element.name ? "default" : "outline"}>
                            <element.icon size={18} />
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='p-0 w-max px-2 text-sm text-foreground/70 bg-muted/50 backdrop-blur-lg' side='right'>
                        <p className='capitalize'>{element.name}</p>
                    </HoverCardContent>
                </HoverCard>
            ))}
        </div>
    )
}

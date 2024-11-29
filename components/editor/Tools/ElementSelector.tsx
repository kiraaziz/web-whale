import { Button } from '@/components/ui/button'
import { Brush, File, Layers3, LayoutPanelLeft, Settings } from 'lucide-react'

export default function ElementSelector({ selectedElement, setSelectedElement }: { selectedElement: any, setSelectedElement: any }) {

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
                <Button onClick={() => {
                    if (true) {
                        setSelectedElement(element.name)
                    }
                }} size="icon" className={`${selectedElement === element.name ? " " : " bg-transparent border-transparent text-foreground/60  "}`} variant={selectedElement === element.name ? "default" : "outline"}>
                    <element.icon size={18} />
                </Button>
            ))}
        </div>
    )
}

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../../ui/button"
import {  Plus, Sparkles } from "lucide-react"

export default function AlertBox({ children, title, className, open, setOpen }: { children: React.ReactNode, title: string, className?: string, open: boolean, setOpen: (open: boolean) => void }) {
    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger>
                <Button className='rounded-full '>
                    <Plus className='w-4 h-4' />
                    Create Project
                </Button>
            </DialogTrigger>
            <DialogContent className={className}>
                <DialogHeader>
                    <DialogTitle className='flex items-start  justify-between mb-5' >
                        <div className='flex items-center gap-2'>
                            <Sparkles size={25} />
                            {title}
                        </div>
 
                    </DialogTitle>
                    <DialogDescription >
                        {children}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

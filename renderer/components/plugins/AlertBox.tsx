import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Grid2x2 } from "lucide-react"

export default function AlertBox({ children, title, className }: { children: React.ReactNode, title: string, className?: string }) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant='outline' className='rounded-full'>
                    <Grid2x2 className='w-4 h-4' />
                    Upload Plugin
                </Button>
            </DialogTrigger>
            <DialogContent className={className}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {children}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

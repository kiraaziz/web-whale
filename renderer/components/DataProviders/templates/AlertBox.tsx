import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../../ui/button"
import { ArrowUpRight, Grid2x2 } from "lucide-react"
import { pluginExploreLink, websiteLink } from "@/lib/variables/constant"
import { useRedirectToBrowser } from "@/hooks/useState"

export default function AlertBox({ children, title, className, actionButton }: { children: React.ReactNode, title: string, className?: string, actionButton?: React.ReactNode }) {
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
                    <DialogTitle className='flex items-start pt-2 justify-between mb-5' >
                        <div className='flex items-center gap-2'>
                            <Grid2x2 size={25} />
                            {title}
                        </div>
                        <div className='flex items-center gap-2'>
                            {actionButton}
                            <Button onClick={() => useRedirectToBrowser(`${websiteLink}${pluginExploreLink}`)} variant='outline' className='rounded-full'>
                                Explore
                                <ArrowUpRight size={16} />
                            </Button>
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

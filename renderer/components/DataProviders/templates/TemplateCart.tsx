import useSoloTemplate from '@/hooks/useSoloTemplate'
import React from 'react'
import ImageLoader from './ImageLoader'
import { useHelfText } from '@/hooks/useState'
import { Button } from '../../ui/button'
import { Loader2, MoreVertical, Trash2 } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TemplateCart({ template, reavlidate }) {

    const { deleteTemplate, isLoading } = useSoloTemplate(template.base, reavlidate)


    return (
        <div>
            <ImageLoader className='object-cover w-full h-44 object-left-top rounded-lg border p-1 bg-muted' url={`asset://${template.directory}/meta/preview/5.png`} />
            <div className='flex items-center justify-between mt-1'>
                <h1 className='text-base px-3'>{useHelfText(template.name, 35)}</h1>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant='ghost' size='icon' disabled={isLoading}>
                            {isLoading ? <Loader2 size={16} className='animate-spin' /> : <MoreVertical size={16} />}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='min-w-40'>
                        <DropdownMenuLabel className='capitalize text-sm text-foreground/60'>{template.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={deleteTemplate} className='flex items-center gap-2 text-destructive hover:bg-destructive/20 hover:cursor-pointer'>
                            <Trash2 size={16} className='text-destructive' />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )

}

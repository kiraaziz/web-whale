"use client"
import { PagesResultProps } from '@grapesjs/react'
import { cn } from '@/lib/utils'
import { Check, Pen, PenBox, Plus, Trash, Trash2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'

export function PageManager({ pages, selected, add, select, remove, setSelectedElement }: PagesResultProps & {
    setSelectedElement: (element: any) => void
}) {

    const addNewPage = () => {
        const nextIndex = pages.length + 1
        add({
            name: `New page ${nextIndex}`,
            component: `<h1>Page content ${nextIndex}</h1>`,
        })
    }

    return (
        <div className="gjs-custom-page-manager p-4">
            <div className=" flex items-center justify-between text-foreground/60">
                <h1>Pages</h1>
                <Button variant={"outline"} onClick={addNewPage}>
                    <Plus size={20} />
                    New page
                </Button>
            </div> 
            {pages.map((page, index) => (
                <CustomInput setSelectedElement={setSelectedElement} page={page} selected={selected} select={select} remove={remove} />
            ))}
        </div>
    )
}

const CustomInput = ({ page, selected, select, remove, setSelectedElement }: any) => {

    const [isEdit, setEdit] = useState(false)
    const [text, setText] = useState(page.getName() || 'Untitled page')

    const handleUpdateName = () => {
        if (text) {
            page.setName(text)
        }

        setEdit(!isEdit)
    }

    useEffect(() => {
        setText(page.getName() || 'Untitled page')
    }, [page, isEdit])

    return (
        <div
            key={page.getId()}
            className={cn(!(selected !== page) ? "bg-muted border-input text-foreground/90 " : "bg-muted/40 border-transparent text-foreground/60 ", 'border flex items-center my-2 rounded hover:bg-muted pr-3')}
        >
            <form onSubmit={(e) => e.preventDefault()} className='w-full flex items-center justify-between'>
                {isEdit ?
                    <Input onBlur={() => handleUpdateName()} autoFocus value={text} onChange={(e) => setText(e.target.value)} />
                    :
                    <button
                        type="button"
                        className="flex-grow text-left text-sm  p-3"
                        onClick={() => select(page)}
                    >
                        {page.getName() || 'Untitled page'}
                    </button>}
                <button type="submit" className='ease-in-out duration-200 hover:text-primary hover:bg-primary/10 ml-2' onClick={() => handleUpdateName()}>
                    {isEdit ?
                        <Check size={18} />
                        :
                        <PenBox size={18} />
                    }
                </button>
            </form>
            {
                selected !== page
                &&
                <button className='ease-in-out duration-200 hover:text-destructive hover:bg-destructive/10 ml-2' type="button" onClick={() => {
                    remove(page)
                    setSelectedElement("pages")
                }}>
                    <Trash2 size={18} />
                </button>
            }
        </div>
    )
}
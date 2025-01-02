import { SelectorsResultProps } from '@grapesjs/react'
import { cn } from '@/lib/utils'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AlertTriangle, Plus, X } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function SelectorManager({
    selectors,
    selectedState,
    states,
    targets,
    setState,
    addSelector,
    removeSelector,
}: Omit<SelectorsResultProps, 'Container'>) {

    const [text, setText] = useState("")

    const addNewSelector = () => {
        if (text) {
            addSelector({ name: text, label: text })
            setText("")
        }
    }

    const targetStr = targets.join(', ')

    if (!targetStr) return (
        <div className="gjs-custom-style-manager text-left p-4">
            <div className='flex gap-2 text-foreground/60'>
                <AlertTriangle size={18} />
                No style available</div>

        </div>
    )

    return (
        <div className="gjs-custom-selector-manager bg-transparent">
            <div className=' p-4 border-b flex flex-col gap-2 text-left w-full'>
                <div className="flex items-center">
                    <div className="flex-grow text-foreground/60">
                        Class names
                    </div>
                </div>
                <div className={cn('flex items-center gap-2 flex-wrap ')}>
                    {
                        targetStr ?
                            <form onSubmit={(e) => e.preventDefault()} className='w-full flex items-center justify-between gap-2'>
                                <Input className='flex-1' value={text} onChange={(e) => setText(e.target.value)} placeholder='add class name' />
                                <Button
                                    size={"icon"}
                                    type="submit"
                                    onClick={addNewSelector}
                                >
                                    <Plus size={17} />
                                </Button>
                            </form>
                            :
                            <div className="opacity-70">Select a component</div>
                    }

                    {selectors.map(selector => (
                        <div key={selector.toString()} className="pr-2 pl-5 py-1 text-foreground/60 flex items-center gap-2 bg-muted border rounded-full whitespace-nowrap text-xs ">
                            <div className='overflow-hidden'>{selector.getLabel().length > 15 ? selector.getLabel().slice(0, 15) + "..." : selector.getLabel()}</div>
                            <button type="button" className='hover:text-destructive ease-in-out duration-200 bg-transparent hover:bg-destructive/10' onClick={() => removeSelector(selector)}>
                                <X size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' p-4 border-b flex flex-col gap-2 text-left w-full'>
                <div className="flex items-center">
                    <div className="flex-grow text-foreground/60">
                        Selector
                    </div>
                    <div className=''>
                        <Select value={selectedState ? selectedState : "none"} onValueChange={(ev: any) => setState(ev !== "none" ? ev : "")} >
                            <SelectTrigger className='w-28 text-foreground/60'>
                                <SelectValue placeholder="-state-" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={"none"} key={"none"}>
                                    default
                                </SelectItem>
                                {states.map((state: any) => (
                                    <SelectItem value={state.id} key={state.id}>
                                        {state.getName()}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}




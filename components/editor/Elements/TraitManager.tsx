import { useEditor, TraitsResultProps } from '@grapesjs/react'
import { cn } from '@/lib/utils'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

export function TraitManager({ traits }: Omit<TraitsResultProps, 'Container'>) {
    return (
        <div className="gjs-custom-style-manager text-left p-4">
            {
                !traits.length ?
                    <div className='flex gap-2 text-foreground/60'>
                        <AlertTriangle size={18} />
                        No properties available</div>
                    :
                    traits.map(trait => (
                        <TraitPropertyField key={trait.getId()} trait={trait} />
                    ))}
        </div>
    )
}


function TraitPropertyField({ trait, ...rest }: any) {
    const editor = useEditor()
    const handleChange = (value: string) => {
        trait.setValue(value)
    }

    const onChange = (ev: any) => {
        handleChange(ev.target ? ev.target.value : ev)
    }

    const handleButtonClick = () => {
        const command = trait.get('command')
        if (command) {
            typeof command === 'string' ? editor.runCommand(command) : command(editor, trait)
        }
    }

    const type = trait.getType()
    const defValue = trait.getDefault() || trait.attributes.placeholder
    const value = trait.getValue()
    const valueWithDef = typeof value !== 'undefined' ? value : defValue

    let inputToRender = (
        <Input placeholder={defValue} value={value} onChange={onChange} />
    )

    switch (type) {
        case 'select': {
            inputToRender = (
                <div >
                    <Select value={value} onValueChange={onChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="select option" />
                        </SelectTrigger>
                        <SelectContent>
                            {trait.getOptions().map((option: any) => (
                                <SelectItem key={trait.getOptionId(option)} value={trait.getOptionId(option)}>
                                    {trait.getOptionLabel(option)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            )
        } break
        case 'color': {
            inputToRender = (
                <Input
                    placeholder={defValue} value={value} onChange={onChange}
                />
            )
        } break
        case 'checkbox': {
            inputToRender = (
                <Checkbox checked={value} onCheckedChange={(ev) => trait.setValue(ev)} />
            )
        } break
        case 'button': {
            inputToRender = (
                <Button onClick={handleButtonClick}>
                    {trait.getLabel()}
                </Button>
            )
        } break
    }

    return (
        <div {...rest} className={cn('mb-4 px-1 w-full')} >
            <div className={cn((type === "checkbox" )? "w-max gap-3 items-center justify-center  flex-row-reverse" :" flex-col  w-full gap-1" , 'flex')}>
                <div className={cn('flex mb-1 items-center')}>
                    <div className="flex-grow capitalize text-foreground/60">{trait.getLabel()}</div>
                </div>
                {inputToRender}
            </div>
        </div>
    )
}



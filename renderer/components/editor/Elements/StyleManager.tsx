"use client"
import { useEditor, StylesResultProps, SelectorsResultProps } from '@grapesjs/react'
import type { Property, PropertyComposite, PropertyNumber, PropertyRadio, PropertySelect, PropertySlider, PropertyStack } from "grapesjs"
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, ArrowDown, ArrowUp, Ban, Plus, Trash, X } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function StyleManager({ sectors }: Omit<StylesResultProps, 'Container'>) {

    const editor = useEditor()
    const [open, setOpen] = useState<any>()

    useEffect(() => {
        setOpen([...sectors.map((v) => { return v.getId() })])
    }, [sectors])

    if (editor.SelectorManager.getSelectedTargets().length === 0) return null

    return (
        <div className="gjs-custom-style-manager text-left">
            {
                sectors.map(sector => (
                    <div key={sector.getId()}  className=' overflow-visible border-b last:border-b-0 pb-3 pt-1'>
                        <h1 className="text-foreground/70 mb-3 px-3 mt-3" >
                            {sector.getName()}
                        </h1>
                        <div className={`grid grid-cols-2 gap-2 overflow-visible px-4`}>
                            {sector.getProperties().map(prop => (
                                <StylePropertyField key={prop.getId()} prop={prop} />
                            ))}
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export function SelectorManager({
    selectors,
    selectedState,
    states,
    targets,
    setState,
    addSelector,
    removeSelector,
}: Omit<SelectorsResultProps, 'Container'>) {
    const addNewSelector = () => {
        const next = selectors.length + 1
        addSelector({ name: `new-${next}`, label: `New ${next}` })
    }

    const targetStr = targets.join(', ')

    return (
        <div className="gjs-custom-selector-manager p-2 flex flex-col gap-2 text-left bg-white">
            <div className="flex items-center">
                <div className="flex-grow">
                    Selectors
                </div>
                <div >
                    <select value={selectedState} onChange={(ev: any) => setState(ev.target.value)} >
                        <option value="">- State -</option>
                        {states.map(state => (
                            <option value={state.id} key={state.id}>
                                {state.getName()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={cn('flex items-center gap-2 flex-wrap p-2 bg-black/30 border rounded min-h-[45px]', MAIN_BORDER_COLOR)}>
                {
                    targetStr ?
                        <button
                            type="button"
                            onClick={addNewSelector}
                            className={cn('border rounded px-2 py-1')}
                        >
                            +
                        </button>
                        :
                        <div className="opacity-70">Select a component</div>
                }
                {selectors.map(selector => (
                    <div key={selector.toString()} className="px-2 py-1 flex items-center gap-1 whitespace-nowrap bg-sky-500 rounded">
                        <div>{selector.getLabel()}</div>
                        <button type="button" onClick={() => removeSelector(selector)}>
                            close
                        </button>
                    </div>
                ))}
            </div>
            <div>
                Selected: <span className="opacity-70">{targetStr || 'None'}</span>
            </div>
        </div>
    )
}

function StylePropertyField({ prop, ...rest }: StylePropertyFieldProps) {

    const editor = useEditor()
    const handleChange = (value: string) => {
        prop.upValue(value)
    }

    const onChange = (ev: any) => {
        handleChange(ev.target.value)
    }

    const openAssets = () => {
        const { Assets } = editor
        Assets.open({
            select: (asset, complete) => {
                console.log({ complete })
                prop.upValue(asset.getSrc(), { partial: !complete })
                complete && Assets.close()
            },
            types: ['image'],
            accept: 'image/*',
        })
    }

    const type = prop.getType()
    const defValue = prop.getDefaultValue()
    const canClear = prop.canClear()
    const hasValue = prop.hasValue()
    const value = prop.getValue()
    const valueString = hasValue ? value : ''

    const icons: any = {
        "none": Ban,
        "left": AlignLeft,
        "right": AlignRight,
        "static": null,
        "relative": null,
        "absolute": null,
        "fixed": null,
        "center": AlignCenter,
        "justify": AlignJustify,
    }

    const inputProp = prop as PropertyNumber

    let unit = null
    try {
        unit = inputProp.getUnit()
    } catch (e) {

    }

    let inputToRender = (
        <div className="flex items-center space-x-2 relative">
            <Input
                className={`bg-muted/40 ${unit && "pr-9"}`}
                placeholder="auto"
                type='number'
                value={value !== "auto" ? value : ""}
                onChange={onChange}
            />
            {unit && <Select onValueChange={(e) => inputProp.upUnit(e)} value={unit}>
                <SelectTrigger hideArrow={true} className="absolute w-max right-0 bg-transparent  border-none text-sm text-foreground/40" >
                    <SelectValue placeholder="-" />
                </SelectTrigger>
                <SelectContent>
                    {["px", "%", "em", "rem", "vh", "vw", "svh", "svw"].map(option => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>}
        </div>
    )

    switch (type) {
        case 'radio': {
            const radioProp = prop as PropertyRadio
            inputToRender = (
                radioProp.getName() === "position" ? <Select value={value} onValueChange={handleChange}>
                    <SelectTrigger className="w-full bg-muted/40" >
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {radioProp.getOptions().map(option => (
                            <SelectItem key={radioProp.getOptionId(option)} value={radioProp.getOptionId(option)}>
                                {radioProp.getOptionLabel(option)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                    : <div className='w-full flex items-center justify-evenly gap-2 bg-muted/40 border p-2 rounded-md'>
                        {radioProp.getOptions().map(option => {
                            const optionId = radioProp.getOptionId(option)
                            const IconComponent = icons[optionId]

                            if (IconComponent) return (
                                <button
                                    className={`${value === optionId ? "text-primary" : "text-foreground/50"}`}
                                    onClick={() => handleChange(optionId)}
                                    key={optionId}
                                >
                                    <IconComponent size={20} />
                                </button>
                            )
                        })}

                    </div>
            )
        } break
        case 'select': {
            const selectProp = prop as PropertySelect
            inputToRender = (
                // <p>{value ? value : JSON.stringify(selectProp.getOptions())}</p>
                <Select value={value ? value : "delete"} onValueChange={(e) => (e === "delete") ? handleChange("") : handleChange(e)}>
                    <SelectTrigger className="w-full bg-muted/40" >
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {selectProp.getOptions().map(option => (
                            <SelectItem key={selectProp.getOptionId(option)} value={selectProp.getOptionId(option) ? selectProp.getOptionId(option) : "delete"}>
                                {selectProp.getOptionLabel(option)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )
        } break
        case 'color': {
            inputToRender = (
                <>
                    <label htmlFor={prop.getId()} className='w-full flex items-center text-foreground/60 gap-2 bg-muted/40 border p-2 rounded-md'>
                        {value !== "none" ? <div style={{ background: value }} className='w-14 h-8  rounded-md border' />
                            : <div className='flex items-center justify-center w-14 h-8  rounded-md border'>
                                <Ban size={17} />
                            </div>}
                        {value}
                        <input className='opacity-0 h-0 w-0 overflow-hidden' id={prop.getId()} type='color' placeholder={defValue} value={valueString} onChange={onChange} />
                    </label>
                </>

            )
        } break
        case 'slider': {
            const sliderProp = prop as PropertySlider
            inputToRender = (
                <Slider max={sliderProp.getMax()} step={sliderProp.getStep()} min={sliderProp.getMin()} onValueChange={(e: any) => handleChange(e[0])} value={[parseFloat(value)]} />
            )
        } break
        case 'file': {
            inputToRender = (
                <div className="flex flex-col items-center gap-3">
                    {
                        (value && value !== defValue) ?
                            <>
                                <div
                                    className="w-full h-40 rounded inline-block bg-cover bg-center cursor-pointer "
                                    style={{ backgroundImage: `url("${value}")` }}
                                    onClick={openAssets}
                                />
                                <Button onClick={() => handleChange("")} className='w-full bg-destructive/20 text-destructive  hover:text-foreground' variant={"destructive"}>
                                    <Trash size={20} />
                                    Delete
                                </Button>
                            </>
                            : <button type="button" onClick={openAssets} className={BTN_CLS}>
                                Select Image
                            </button>
                    }

                </div>
            )
        } break
        case 'composite': {
            const compositeProp = prop as PropertyComposite
            inputToRender = (
                <div className={cn('p-3 bg-muted/40 border rounded-md grid grid-cols-2 gap-2')}>
                    {compositeProp.getProperties().map(prop => (
                        <StylePropertyField key={prop.getId()} prop={prop} />
                    ))}
                </div>
            )
        } break
        case 'stack': {
            const stackProp = prop as PropertyStack
            const layers = stackProp.getLayers()

            inputToRender = (
                <div className={cn(' grid  gap-1')}>
                    {layers.map(layer => (
                        <div key={layer.getId()} className={""}>
                            <div className="flex gap-1  px-2 py-1 items-center bg-muted border rounded-md">
                                <button onClick={() => layer.move(layer.getIndex() - 1)}>
                                    <ArrowUp size={16} className='text-foreground/50' />
                                </button>
                                <button onClick={() => layer.move(layer.getIndex() + 1)}>
                                    <ArrowDown size={16} className='text-foreground/50' />
                                </button>
                                <button className="flex-grow text-sm text-foreground/60 text-start px-2 hover:cursor-pointer" onClick={() => !layer.isSelected() ? layer.select() : alert("Close")}>
                                    {layer.getLabel().trim() ? layer.getLabel().slice(0, 20) : "layer"}{layer.getLabel().length > 20 && "..."}
                                </button>
                                <button onClick={() => layer.remove()}>
                                    <X className='text-destructive bg-destructive/20 rounded-sm p-0.5' size={18} />
                                </button>
                            </div>
                            {
                                layer.isSelected() &&
                                <div className=" grid p-3 bg-background border rounded mt-2 grid-cols-2 gap-2">
                                    {stackProp.getProperties().map(prop => (
                                        <StylePropertyField key={prop.getId()} prop={prop} />
                                    ))}
                                </div>
                            }
                        </div>
                    ))}
                </div>
            )
        } break
    }

    return (
        <div {...rest} className={cn('mb-3 ', ["Image"].includes(prop.getLabel()) ? "order-3" : ["Display", "Position"].includes(prop.getLabel()) ? "order-1" : "order-2", (prop.isFull() && !["Display", "Position"].includes(prop.getLabel())) ? 'col-span-full' : '')} >
            <div className={cn('flex mb-2 items-center')}>
                <div className="flex-grow capitalize text-sm text-foreground/50">{prop.getLabel()}</div>
                {
                    canClear &&
                    <button onClick={() => prop.clear()} className='text-destructive/70 bg-destructive/10 px-2 rounded text-xs flex items-center justify-center gap-0.5  h-4'>
                        <X size={10} />
                        {prop.getLabel().length < 10 && "Clean"}
                    </button>
                }
                {
                    type === 'stack' &&
                    <button
                        className="!ml-2"
                        onClick={() => (prop as PropertyStack).addLayer({}, { at: 0 })}
                    >
                        <Plus size={20} />
                    </button>
                }
            </div>
            {inputToRender}
        </div>
    )
}


interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
    prop: Property
}

const BTN_CLS = 'border rounded px-2 py-1 w-full'
const MAIN_BORDER_COLOR = 'border-slate-500'



"use client"
import { Editor } from 'grapesjs'
import { useEditor } from '@grapesjs/react'
import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { LayersResultProps } from '@grapesjs/react'
import { MouseEvent, useMemo } from 'react'
import type { Component } from 'grapesjs'
import { ChevronDown, Eye, EyeOff } from 'lucide-react'

export default function LayerManager({ root }: Omit<LayersResultProps, 'Container'>) {
    const editor = useEditor()
    const [pointerDown, setPointerDown] = useState(false)
    const [canMoveRes, setCanMoveRes] = useState<CanMove>({})
    const [cmpPointerOver, setCmpPointerOver] = useState<Component>()
    const [dragging, setDragging] = useState<Component>()
    const [dragParent, setDragParent] = useState<Component>()
    const [dragRect, setDragRect] = useState<DragRect>()
    const indicatorRef = useRef<HTMLDivElement>(null)
    const { Components } = editor

    const onDragStart = () => {
        setPointerDown(true)
    }

    const onDragMove = (ev: React.PointerEvent) => {
        if (!pointerDown) return
        const { cmp, el: elLayer } = getDragTarget(ev)
        if (!elLayer || !cmp) return
        const layerRect = elLayer.getBoundingClientRect()
        const layerH = elLayer.offsetHeight
        const layerY = elLayer.offsetTop
        const pointerY = ev.clientY
        const isBefore = pointerY < (layerRect.y + layerH / 2)
        const cmpSource = !dragging ? cmp : dragging
        const cmpTarget = cmp.parent()
        const cmpIndex = cmp.index() + (isBefore ? 0 : 1)
        !dragging && setDragging(cmp)
        setCmpPointerOver(cmp)
        const canMove = Components.canMove(cmpTarget!, cmpSource, cmpIndex)
        const canMoveInside = Components.canMove(cmp, cmpSource)
        const canMoveRes: CanMove = {
            ...canMove,
            canMoveInside,
            index: cmpIndex,
        }
        let pointerInside = false
        if (
            canMoveInside.result &&
            (
                pointerY > (layerRect.y + LAYER_PAD)
                && pointerY < (layerRect.y + layerH - LAYER_PAD))
        ) {
            pointerInside = true
            canMoveRes.target = cmp
            delete canMoveRes.index
        }
        setDragParent(pointerInside ? cmp : undefined)
        setCanMoveRes(canMoveRes)
        setDragRect({
            pointerInside,
            y: layerY + (isBefore ? 0 : layerH),
            h: layerH,
        })
    }
    const onDragEnd = () => {
        canMoveRes?.result && canMoveRes.source?.move(canMoveRes.target!, { at: canMoveRes.index })
        setCanMoveRes({})
        setPointerDown(false)
        setDragging(undefined)
        setCmpPointerOver(undefined)
        setDragParent(undefined)
        setDragRect(undefined)
    }

    const dragLevel = (cmpPointerOver ? cmpPointerOver.parents() : []).length
    const showIndicator = !!(dragging && dragRect && canMoveRes?.result && !dragRect.pointerInside)
    const indicatorStyle = showIndicator ? { top: dragRect.y, left: 0, marginLeft: dragLevel * 10 + 20 } : {}

    return (
        <div
            className="gjs-custom-layer-manager text-sm text-left select-none relative p-4"
            style={wrapGridStyle}
            onPointerDown={onDragStart}
            onPointerMove={onDragMove}
            onPointerUp={onDragEnd}
        >
            {
                !!root &&
                <LayerItem component={root} level={-1} draggingCmp={dragging} dragParent={dragParent} />
            }
            {
                showIndicator &&
                <div ref={indicatorRef} className={cn('absolute w-full h-0.5 bg-yellow-400')} style={indicatorStyle}></div>
            }
        </div>
    )
}


function LayerItem({ component, draggingCmp, dragParent, ...props }: LayerItemProps) {
    const editor = useEditor()
    const { Layers } = editor
    const layerRef = useRef<HTMLDivElement>(null)
    const [layerData, setLayerData] = useState(Layers.getLayerData(component))
    const { open, selected, hovered, components, visible, name } = layerData
    const componentsIds = components.map((cmp) => cmp.getId())
    const isDragging = draggingCmp === component
    const cmpHash = componentsIds.join('-')
    const level = props.level + 1
    const isHovered = hovered || dragParent === component

    useEffect(() => {
        level === 0 && setLayerData(Layers.getLayerData(component))
        if (layerRef.current) {
            (layerRef.current as any).__cmp = component
        }
    }, [component])

    useEffect(() => {
        const up = (cmp: Component) => {
            cmp === component && setLayerData(Layers.getLayerData(cmp))
        }
        const ev = Layers.events.component
        editor.on(ev, up)

        return () => {
            editor.off(ev, up)
        }
    }, [editor, Layers, component])

    const cmpToRender = useMemo(() => {
        return components.map((cmp) => (
            <LayerItem
                key={cmp.getId()}
                component={cmp}
                level={level}
                draggingCmp={draggingCmp}
                dragParent={dragParent}
            />
        ))
    }, [cmpHash, draggingCmp, dragParent])

    const toggleOpen = (ev: MouseEvent) => {
        ev.stopPropagation()
        Layers.setLayerData(component, { open: !open })
    }

    const toggleVisibility = (ev: MouseEvent) => {
        ev.stopPropagation()
        Layers.setLayerData(component, { visible: !visible })
    }

    const select = (event: MouseEvent) => {
        event.stopPropagation()
        Layers.setLayerData(component, { selected: true }, { event })
    }

    const hover = (hovered: boolean) => {
        if (!hovered || !draggingCmp) {
            Layers.setLayerData(component, { hovered })
        }
    }

    const wrapperCls = cn(
        'layer-item flex flex-col',
    )


    return (
        <div className={wrapperCls}>
            <div
                onClick={select}
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
                className="group max-w-full"
                data-layer-item
                ref={layerRef}
            >  
                <div
                    className={cn(
                        'flex items-center p-2 pr-2  gap-2 ease-in-out duration-200  text-foreground/60 rounded-md border border-transparent',
                        isHovered && 'bg-muted/60 hover:cursor-pointer',
                        selected && 'bg-muted border-input hover:cursor-move',
                        isDragging && "hover:cursor-move"
                    )}
                >
                    <div
                        style={{ marginLeft: `${level * 10}px` }}
                        className={cn('cursor-pointer', !components.length && 'pointer-events-none opacity-0')}
                        onClick={toggleOpen}
                    >
                        <ChevronDown size={18} className={`${!open && "-rotate-90"} ease-in-out duration-200`} />
                    </div>
                    <div className="truncate flex-grow"  >
                        {name}
                    </div>
                    <div
                        className={cn('group-hover:opacity-100 cursor-pointer', visible ? 'opacity-0' : 'opacity-100')}
                        onClick={toggleVisibility}
                    >
                        {visible ?
                            <Eye size={18} />
                            : <EyeOff size={18} />
                        }
                    </div>
                </div>
            </div>
            {
                !!(open && components.length) &&
                <div className={cn('max-w-full', !open && 'hidden')}>
                    {cmpToRender}
                </div>
            }
        </div>
    )
}


type CanMoveResult = ReturnType<Editor['Components']['canMove']>
type DragRect = {
    y: number,
    h: number,
    pointerInside: boolean,
}

interface LayerItemProps extends React.HTMLProps<HTMLDivElement> {
    component: Component,
    level: number,
    draggingCmp?: Component,
    dragParent?: Component,
}
interface CanMove extends Partial<Omit<CanMoveResult, 'source'>> {
    canMoveInside?: CanMoveResult
    source?: Component | null
    index?: number
}

const LAYER_PAD = 5
const wrapGridStyle = {
    touchAction: 'none',
}
const getDragTarget = (ev: React.PointerEvent) => {
    const el = document.elementFromPoint(ev.clientX, ev.clientY) as HTMLElement
    const elLayer = el?.closest('[data-layer-item]') as HTMLElement
    return {
        el: elLayer,
        cmp: (elLayer as any)?.__cmp as Component,
    }
}
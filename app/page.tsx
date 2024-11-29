"use client"
import grapesjs, { Editor } from 'grapesjs'
import GjsEditor, { Canvas, DevicesProvider, WithEditor, useEditor, StylesResultProps, EditorProps, PagesResultProps, BlocksResultProps, TraitsResultProps, PagesProvider, SelectorsResultProps, LayersProvider, TraitsProvider, ModalProvider, SelectorsProvider, StylesProvider, BlocksProvider, AssetsProvider } from '@grapesjs/react'
import { useEffect, useState } from 'react'

import type { Property, PropertyComposite, PropertyRadio, PropertySelect, PropertySlider, PropertyStack, EditorConfig } from "grapesjs"
export type CustomBlockManagerProps = Pick<BlocksResultProps, 'mapCategoryBlocks' | 'dragStart' | 'dragStop'>

export default function DefaultEditor() {

  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor })
  }

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={onEditor}
      options={{
        height: '100vh',
        storageManager: false,
      }}
      {...defaultEditorProps}

    >
      <div className={`flex h-full border-t ${MAIN_BORDER_COLOR}`}>
        <div className="gjs-column-m flex flex-col flex-grow">
          <Topbar className="min-h-[48px]" />
          <Canvas className="flex-grow gjs-custom-editor-canvas" />
        </div>
        <RightSidebar className={`gjs-column-r w-[300px] border-l ${MAIN_BORDER_COLOR}`} />
      </div>
      <ModalProvider>
        {({ open, title, content, close }) => (
          <CustomModal open={open} title={title} children={content} close={close} />
        )}
      </ModalProvider>
      <AssetsProvider>
        {({ assets, select, close, Container }) => (
          <Container>
            <CustomAssetManager assets={assets} select={select} close={close} />
          </Container>
        )}
      </AssetsProvider>
    </GjsEditor>
  )
}

function RightSidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className={cx('gjs-right-sidebar flex flex-col', className)}>
      <div className='w-full flex items-center justify-start gap-2'>
        {[0, 1, 2, 3, 4].map((v) => (<button onClick={() => setSelectedTab(v)}>{v}</button>))}
      </div>
      <h1>This Is Tab</h1>
      <div className={cx('overflow-y-auto flex-grow border-t', MAIN_BORDER_COLOR)}>
        {
          selectedTab === 0 &&
          <>
            <SelectorsProvider>
              {props => <CustomSelectorManager {...props} />}
            </SelectorsProvider>
            <StylesProvider>
              {props => <CustomStyleManager {...props} />}
            </StylesProvider>
          </>
        }
        {
          selectedTab === 1 &&
          <TraitsProvider>
            {props => <CustomTraitManager {...props} />}
          </TraitsProvider>
        }
        {selectedTab === 2 && <BlocksProvider>
          {props => <CustomBlockManager {...props} />}
        </BlocksProvider>}
        {selectedTab === 3 && <PagesProvider>
          {props => <CustomPageManager {...props} />}
        </PagesProvider>}
        {selectedTab === 4 && <LayersProvider>
          {props => <CustomLayerManager {...props} />}
        </LayersProvider>}
      </div>
    </div>
  )
}

import { AssetsResultProps  } from '@grapesjs/react';
import type { Asset } from 'grapesjs';


export type CustomAssetManagerProps = Pick<AssetsResultProps, 'assets' | 'close' | 'select'>

 function CustomAssetManager({ assets, select }: CustomAssetManagerProps) {
    const editor = useEditor();

    const remove = (asset: Asset) => {
        editor.Assets.remove(asset);
    };

    return (
      <div className="grid grid-cols-3 gap-2 pr-2">
        {assets.map(asset => (
            <div
                key={asset.getSrc()}
                className="relative group rounded overflow-hidden"
            >
                <img className="display-block" src={asset.getSrc()} />
                <div className="flex flex-col items-center justify-end absolute top-0 left-0 w-full h-full p-5 bg-zinc-700/75 group-hover:opacity-100 opacity-0 transition-opacity">
                    <button
                        type="button"
                        className={BTN_CLS}
                        onClick={() => select(asset, true)}
                    >
                        Select
                    </button>
                    <button
                        type="button"
                        className="absolute top-2 right-2"
                        onClick={() => remove(asset)}
                    >x
                    </button>
                </div>
            </div>
        ))}
      </div>
    );
  }
import { LayersResultProps } from '@grapesjs/react';
import type { Component } from 'grapesjs';
import { useRef } from 'react';


import { MouseEvent, useMemo } from 'react';
export declare interface LayerItemProps extends React.HTMLProps<HTMLDivElement> {
  component: Component,
  level: number,
  draggingCmp?: Component,
  dragParent?: Component,
}

const itemStyle = { maxWidth: `100%` };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90vh',
  p: 2,
};

function CustomModal({ children, title, close, ...props }: any) {

  return null
  return (
    <div onClose={close} {...props} className='fixed top-0 right-0 z-100 !bg-muted h-full w-full'>
      <div className={cx(MAIN_BG_COLOR, 'rounded')}>
        <div className="flex pb-3">
          <div className="flex-grow text-lg">{title}</div>
          <div onClick={close} className="cursor-pointer">
            x
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

function LayerItem({ component, draggingCmp, dragParent, ...props }: LayerItemProps) {
  const editor = useEditor();
  const { Layers } = editor;
  const layerRef = useRef<HTMLDivElement>(null);
  const [layerData, setLayerData] = useState(Layers.getLayerData(component));
  const { open, selected, hovered, components, visible, name } = layerData;
  const componentsIds = components.map((cmp) => cmp.getId());
  const isDragging = draggingCmp === component;
  const cmpHash = componentsIds.join('-');
  const level = props.level + 1;
  const isHovered = hovered || dragParent === component;

  useEffect(() => {
    level === 0 && setLayerData(Layers.getLayerData(component));
    if (layerRef.current) {
      (layerRef.current as any).__cmp = component;
    }
  }, [component]);

  useEffect(() => {
    const up = (cmp: Component) => {
      cmp === component && setLayerData(Layers.getLayerData(cmp));
    };
    const ev = Layers.events.component;
    editor.on(ev, up);

    return () => {
      editor.off(ev, up)
    };
  }, [editor, Layers, component]);

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
  }, [cmpHash, draggingCmp, dragParent]);

  const toggleOpen = (ev: MouseEvent) => {
    ev.stopPropagation();
    Layers.setLayerData(component, { open: !open })
  };

  const toggleVisibility = (ev: MouseEvent) => {
    ev.stopPropagation();
    Layers.setLayerData(component, { visible: !visible })
  };

  const select = (event: MouseEvent) => {
    event.stopPropagation();
    Layers.setLayerData(component, { selected: true }, { event })
  };

  const hover = (hovered: boolean) => {
    if (!hovered || !draggingCmp) {
      Layers.setLayerData(component, { hovered })
    }
  };

  const wrapperCls = cx(
    'layer-item flex flex-col',
    selected && 'bg-sky-900',
    (!visible || isDragging) && 'opacity-50'
  );


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
          className={cx(
            'flex items-center p-1 pr-2 border-b gap-1',
            level === 0 && 'border-t',
            MAIN_BORDER_COLOR,
            isHovered && 'bg-sky-700',
            selected && 'bg-sky-500',
          )}
        >
          <div
            style={{ marginLeft: `${level * 10}px` }}
            className={cx('cursor-pointer', !components.length && 'pointer-events-none opacity-0')}
            onClick={toggleOpen}
          >
            Arrow
          </div>
          <div className="truncate flex-grow" style={itemStyle}>
            {name}
          </div>
          <div
            className={cx('group-hover:opacity-100 cursor-pointer', visible ? 'opacity-0' : 'opacity-100')}
            onClick={toggleVisibility}
          >
            eye
          </div>
        </div>
      </div>
      {
        !!(open && components.length) &&
        <div className={cx('max-w-full', !open && 'hidden')}>
          {cmpToRender}
        </div>
      }
    </div>
  )
}

type DragRect = {
  y: number,
  h: number,
  pointerInside: boolean,
}

const wrapGridStyle = {
  touchAction: 'none',
}

const LAYER_PAD = 5;

const getDragTarget = (ev: React.PointerEvent) => {
  const el = document.elementFromPoint(ev.clientX, ev.clientY) as HTMLElement;
  const elLayer = el?.closest('[data-layer-item]') as HTMLElement;
  return {
    el: elLayer,
    cmp: (elLayer as any)?.__cmp as Component,
  }
}



function CustomLayerManager({ root }: Omit<LayersResultProps, 'Container'>) {
  const editor = useEditor();
  const [pointerDown, setPointerDown] = useState(false);
  const [canMoveRes, setCanMoveRes] = useState<CanMove>({});
  const [cmpPointerOver, setCmpPointerOver] = useState<Component>();
  const [dragging, setDragging] = useState<Component>();
  const [dragParent, setDragParent] = useState<Component>();
  const [dragRect, setDragRect] = useState<DragRect>();
  const indicatorRef = useRef<HTMLDivElement>(null);
  const { Components } = editor;

  const onDragStart = () => {
    setPointerDown(true);
  };

  const onDragMove = (ev: React.PointerEvent) => {
    if (!pointerDown) return;
    const { cmp, el: elLayer } = getDragTarget(ev);
    if (!elLayer || !cmp) return;
    const layerRect = elLayer.getBoundingClientRect();
    const layerH = elLayer.offsetHeight;
    const layerY = elLayer.offsetTop;
    const pointerY = ev.clientY;
    const isBefore = pointerY < (layerRect.y + layerH / 2);
    const cmpSource = !dragging ? cmp : dragging;
    const cmpTarget = cmp.parent();
    const cmpIndex = cmp.index() + (isBefore ? 0 : 1);
    !dragging && setDragging(cmp);
    setCmpPointerOver(cmp);
    const canMove = Components.canMove(cmpTarget!, cmpSource, cmpIndex);
    const canMoveInside = Components.canMove(cmp, cmpSource);
    const canMoveRes: CanMove = {
      ...canMove,
      canMoveInside,
      index: cmpIndex,
    };
    let pointerInside = false;
    if (
      canMoveInside.result &&
      (
        pointerY > (layerRect.y + LAYER_PAD)
        && pointerY < (layerRect.y + layerH - LAYER_PAD))
    ) {
      pointerInside = true;
      canMoveRes.target = cmp;
      delete canMoveRes.index;
    }
    setDragParent(pointerInside ? cmp : undefined);
    setCanMoveRes(canMoveRes);
    setDragRect({
      pointerInside,
      y: layerY + (isBefore ? 0 : layerH),
      h: layerH,
    });
  };
  const onDragEnd = () => {
    canMoveRes?.result && canMoveRes.source?.move(canMoveRes.target!, { at: canMoveRes.index });
    setCanMoveRes({});
    setPointerDown(false);
    setDragging(undefined);
    setCmpPointerOver(undefined);
    setDragParent(undefined);
    setDragRect(undefined);
  };

  const dragLevel = (cmpPointerOver ? cmpPointerOver.parents() : []).length;
  const showIndicator = !!(dragging && dragRect && canMoveRes?.result && !dragRect.pointerInside);
  const indicatorStyle = showIndicator ? { top: dragRect.y, left: 0, marginLeft: dragLevel * 10 + 20 } : {};

  return (
    <div
      className="gjs-custom-layer-manager h-full overflow-y-auto overflow-x-hidden text-sm text-left select-none relative"
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
        <div ref={indicatorRef} className={cx('absolute w-full h-0.5 bg-yellow-400')} style={indicatorStyle}></div>
      }
    </div>
  );
}

function CustomPageManager({ pages, selected, add, select, remove }: PagesResultProps) {
  const addNewPage = () => {
    const nextIndex = pages.length + 1
    add({
      name: `New page ${nextIndex}`,
      component: `<h1>Page content ${nextIndex}</h1>`,
    })
  }

  return (
    <div className="gjs-custom-page-manager">
      <div className="p-2">
        <button type="button" className={BTN_CLS} onClick={addNewPage}>
          Add new page
        </button>
      </div>
      {pages.map((page, index) => (
        <div
          key={page.getId()}
          className={cx('flex items-center py-2 px-4 border-b', index === 0 && 'border-t', MAIN_BORDER_COLOR)}
        >
          <button
            type="button"
            className="flex-grow text-left"
            onClick={() => select(page)}
          >
            {page.getName() || 'Untitled page'}
          </button>
          {
            selected !== page
            &&
            <button type="button" onClick={() => remove(page)}>
              x
            </button>
          }
        </div>
      ))}
    </div>
  )
}

function CustomBlockManager({ mapCategoryBlocks, dragStart, dragStop }: CustomBlockManagerProps) {
  return (
    <div className="gjs-custom-block-manager text-left">
      {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
        <div key={category}>
          <div className={cx('py-2 px-4 border-y', MAIN_BORDER_COLOR)}>
            {category}
          </div>
          <div className="grid grid-cols-2 gap-2 p-2">
            {blocks.map((block) => (
              <div key={block.getId()}
                draggable
                className={cx('flex flex-col items-center border rounded cursor-pointer py-2 px-5 transition-colors', MAIN_BORDER_COLOR)}
                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                onDragEnd={() => dragStop(false)}
              >
                <div
                  className="h-10 w-10"
                  dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                />
                <div className="text-sm text-center w-full" title={block.getLabel()}>
                  {block.getLabel()}
                </div>
              </div>
            ))}
          </div>
        </div>
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
    handleChange(ev.target.value)
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
    <input placeholder={defValue} value={value} onChange={onChange} />
  )

  switch (type) {
    case 'select': {
      inputToRender = (
        <div >
          <select value={value} onChange={onChange}>
            {trait.getOptions().map((option: any) => (
              <option key={trait.getOptionId(option)} value={trait.getOptionId(option)}>
                {trait.getOptionLabel(option)}
              </option>
            ))}
          </select>
        </div>
      )
    } break
    case 'color': {
      inputToRender = (
        <input
          placeholder={defValue} value={value} onChange={onChange}
        />
      )
    } break
    case 'checkbox': {
      inputToRender = (
        <input type='checkbox' checked={value} onChange={(ev) => trait.setValue(ev.target.checked)} />
      )
    } break
    case 'button': {
      inputToRender = (
        <button onClick={handleButtonClick}>
          {trait.getLabel()}
        </button>
      )
    } break
  }

  return (
    <div {...rest} className={cx('mb-3 px-1 w-full')} >
      <div className={cx('flex mb-2 items-center')}>
        <div className="flex-grow capitalize">{trait.getLabel()}</div>
      </div>
      {inputToRender}
    </div>
  )
}

function CustomTraitManager({ traits }: Omit<TraitsResultProps, 'Container'>) {
  return (
    <div className="gjs-custom-style-manager text-left mt-3 p-1">
      {
        !traits.length ?
          <div>No properties available</div>
          :
          traits.map(trait => (
            <TraitPropertyField key={trait.getId()} trait={trait} />
          ))}
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
  const valueWithDef = hasValue ? value : defValue

  let inputToRender = (
    <input placeholder={defValue} value={valueString} onChange={onChange} />
  )

  switch (type) {
    case 'radio': {
      const radioProp = prop as PropertyRadio
      inputToRender = (
        <div >
          {radioProp.getOptions().map(option => (
            // <FormControlLabel
            //   key={radioProp.getOptionId(option)}
            //   value={radioProp.getOptionId(option)}
            //   label={radioProp.getOptionLabel(option)}
            //   control={<Radio size="small" />}
            // />
            <label>{radioProp.getOptionLabel(option)}</label>
          ))}
        </div>
      )
    } break
    case 'select': {
      const selectProp = prop as PropertySelect
      inputToRender = (
        <div >
          <select value={value} onChange={onChange}>
            {selectProp.getOptions().map(option => (
              <option key={selectProp.getOptionId(option)} value={selectProp.getOptionId(option)}>
                {selectProp.getOptionLabel(option)}
              </option>
            ))}
          </select>
        </div>
      )
    } break
    case 'color': {
      inputToRender = (
        <input
          placeholder={defValue} value={valueString} onChange={onChange}

        />
      )
    } break
    case 'slider': {
      const sliderProp = prop as PropertySlider

    } break
    case 'file': {
      inputToRender = (
        <div className="flex flex-col items-center gap-3">
          {
            value && value !== defValue &&
            <div
              className="w-[50px] h-[50px] rounded inline-block bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url("${value}")` }}
              onClick={() => handleChange('')}
            />
          }
          <button type="button" onClick={openAssets} className={BTN_CLS}>
            Select Image
          </button>
        </div>
      )
    } break
    case 'composite': {
      const compositeProp = prop as PropertyComposite
      inputToRender = (
        <div className={cx('flex flex-wrap p-2 bg-black/20', ROUND_BORDER_COLOR)}>
          {compositeProp.getProperties().map(prop => (
            <StylePropertyField key={prop.getId()} prop={prop} />
          ))}
        </div>
      )
    } break
    case 'stack': {
      const stackProp = prop as PropertyStack
      const layers = stackProp.getLayers()
      const isTextShadow = stackProp.getName() === 'text-shadow'
      inputToRender = (
        <div className={cx('flex flex-col p-2 gap-2 bg-black/20 min-h-[54px]', ROUND_BORDER_COLOR)}>
          {layers.map(layer => (
            <div key={layer.getId()} className={ROUND_BORDER_COLOR}>
              <div className="flex gap-1 bg-slate-800 px-2 py-1 items-center">
                <button onClick={() => layer.move(layer.getIndex() - 1)}>
                  1
                </button>
                <button onClick={() => layer.move(layer.getIndex() + 1)}>
                  2
                </button>
                <button className="flex-grow" onClick={() => layer.select()}>
                  {layer.getLabel()}
                </button>
                <div
                  className={cx('bg-white min-w-[17px] min-h-[17px] text-black text-sm flex justify-center', ROUND_BORDER_COLOR)}
                  style={layer.getStylePreview({ number: { min: -3, max: 3 }, camelCase: true })}
                >
                  {isTextShadow && 'T'}
                </div>
                <button onClick={() => layer.remove()}>
                  3
                </button>
              </div>
              {
                layer.isSelected() &&
                <div className="p-2 flex flex-wrap">
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
    <div {...rest} className={cx('mb-3 px-1', prop.isFull() ? 'w-full' : 'w-1/2')} >
      <div className={cx('flex mb-2 items-center', canClear && 'text-sky-300')}>
        <div className="flex-grow capitalize">{prop.getLabel()}</div>
        {
          canClear &&
          <button onClick={() => prop.clear()}>
            close
          </button>
        }
        {
          type === 'stack' &&
          <button
            className="!ml-2"
            onClick={() => (prop as PropertyStack).addLayer({}, { at: 0 })}
          >
            +
          </button>
        }
      </div>
      {inputToRender}
    </div>
  )
}

function CustomStyleManager({ sectors }: Omit<StylesResultProps, 'Container'>) {

  return (
    <div className="gjs-custom-style-manager text-left">
      {sectors.map(sector => (
        <div key={sector.getId()}>
          <h1 className="!bg-slate-800" >
            {sector.getName()}
          </h1>
          <div className={`${MAIN_BG_COLOR} flex flex-wrap`}>
            {sector.getProperties().map(prop => (
              <StylePropertyField key={prop.getId()} prop={prop} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function CustomSelectorManager({
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
    <div className="gjs-custom-selector-manager p-2 flex flex-col gap-2 text-left">
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
      <div className={cx('flex items-center gap-2 flex-wrap p-2 bg-black/30 border rounded min-h-[45px]', MAIN_BORDER_COLOR)}>
        {
          targetStr ?
            <button
              type="button"
              onClick={addNewSelector}
              className={cx('border rounded px-2 py-1')}
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

function TopbarButtons({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const editor = useEditor()
  const [, setUpdateCounter] = useState(0)
  const { UndoManager, Commands } = editor
  const cmdButtons: any[] = [
    {
      id: 'core:component-outline',
      iconPath: null,
    },
    {
      id: 'core:fullscreen',
      iconPath: null,
      options: { target: '#root' },
    },
    {
      id: 'core:open-code',
      iconPath: null,
    },
    {
      id: 'core:undo',
      iconPath: null,
      disabled: () => !UndoManager.hasUndo(),
    },
    {
      id: 'core:redo',
      iconPath: null,
      disabled: () => !UndoManager.hasRedo(),
    },
  ]

  useEffect(() => {
    const cmdEvent = 'run stop'
    const updateEvent = 'update'
    const updateCounter = () => setUpdateCounter((value) => value + 1)
    const onCommand = (id: string) => {
      cmdButtons.find((btn) => btn.id === id) && updateCounter()
    }
    editor.on(cmdEvent, onCommand)
    editor.on(updateEvent, updateCounter)

    return () => {
      editor.off(cmdEvent, onCommand)
      editor.off(updateEvent, updateCounter)
    }
  }, [])

  return (
    <div className={cx('flex gap-3', className)}>
      {cmdButtons.map(({ id, iconPath, disabled, options = {} }) => (
        <button
          key={id}
          type="button"
          className={cx(
            BTN_CLS, MAIN_BORDER_COLOR,
            Commands.isActive(id) && 'text-sky-300',
            disabled?.() && 'opacity-50',
          )}
          onClick={() => Commands.isActive(id) ? Commands.stop(id) : Commands.run(id, options)}
          disabled={disabled?.()}
        >
          {id}
        </button>
      ))}
    </div>
  )
}

function Topbar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('gjs-top-sidebar flex items-center p-1', className)}>
      <DevicesProvider>
        {({ selected, select, devices }) => (
          <div >
            <select value={selected} onChange={(ev: any) => select(ev.target.value)}>
              {devices.map(device => (
                <option value={device.id} key={device.id}>
                  {device.getName()}
                </option>
              ))}
            </select>
          </div>
        )}
      </DevicesProvider>
      <WithEditor>
        <TopbarButtons className="ml-auto px-2" />
      </WithEditor>
    </div>
  )
}

function cx(...inputs: any[]): string {
  const inp = Array.isArray(inputs[0]) ? inputs[0] : [...inputs]
  return inp.filter(Boolean).join(' ')
}

type CanMoveResult = ReturnType<Editor['Components']['canMove']>;

interface CanMove extends Partial<Omit<CanMoveResult, 'source'>> {
  canMoveInside?: CanMoveResult;
  source?: Component | null;
  index?: number;
}

declare global {
  interface Window {
    grapesjs: typeof grapesjs
  }
}

interface StylePropertyFieldProps extends React.HTMLProps<HTMLDivElement> {
  prop: Property
}

const MAIN_BG_COLOR = 'bg-slate-900'
const BTN_CLS = 'border rounded px-2 py-1 w-full'
const MAIN_BORDER_COLOR = 'border-slate-500'
const ROUND_BORDER_COLOR = `rounded border ${MAIN_BORDER_COLOR}`

const plugins: EditorProps['plugins'] = [
  {
    id: 'gjs-blocks-basic',
    src: 'https://unpkg.com/grapesjs-blocks-basic',
  },
  'grapesjs-plugin-forms',
  'grapesjs-component-countdown',
]

const defaultOptions: EditorConfig = {
  storageManager: false,
  assetManager: {
    assets: [
      'https://via.placeholder.com/350x250/78c5d6/fff',
      'https://via.placeholder.com/350x250/459ba8/fff',
      'https://via.placeholder.com/350x250/79c267/fff',
      'https://via.placeholder.com/350x250/c5d647/fff',
      'https://via.placeholder.com/350x250/f28c33/fff',
      'https://via.placeholder.com/350x250/e868a2/fff',
      'https://via.placeholder.com/350x250/cc4360/fff',
      'https://via.placeholder.com/350x250/78c5d6/eee',
      'https://via.placeholder.com/350x250/459ba8/eee',
      'https://via.placeholder.com/350x250/79c267/eee',
      'https://via.placeholder.com/350x250/c5d647/eee',
      'https://via.placeholder.com/350x250/f28c33/eee',
      'https://via.placeholder.com/350x250/e868a2/eee',
      'https://via.placeholder.com/350x250/cc4360/eee',
    ],
  },
  undoManager: {
    trackSelection: false,
  },
  selectorManager: {
    componentFirst: true,
  },
  components: `
        <div style="padding: 25px">Element A</div>
        <div class="example example-a">Element B</div>
        <div style="padding: 20px">
            <div class="example-b1">Element B1</div>
            <div class="example-b2">Element B2</div>
            <div>Element B3</div>
        </div>
        <div>Element C</div>
    `,
}

const defaultEditorProps: any = {
  plugins: plugins,
  options: defaultOptions,
}

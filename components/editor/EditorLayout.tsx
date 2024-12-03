"use client"
import grapesjs, { Editor } from 'grapesjs'
import GjsEditor, { BlocksProvider, Canvas, LayersProvider, PagesProvider, SelectorsProvider, StylesProvider, TraitsProvider } from '@grapesjs/react'
import type { EditorConfig } from "grapesjs"
import LayerManager from './Elements/LayerManager'
import { useEffect, useState } from 'react'
import ElementSelector from './Tools/ElementSelector'
import { StyleManager } from './Elements/StyleManager'
import { BlockManager } from './Elements/BlockManager'
import { SelectorManager } from './Elements/SelectorManger'
import { TraitManager } from './Elements/TraitManager'
import { PageManager } from './Elements/PagesManger'
import Timers from './Tools/Timers'
import Screens from './Tools/Screens'
import { cn } from '@/lib/utils'
export default function EditorLayout({ values, template }: any) {

  const [selectedElement, setSelectedElement] = useState("components")
  const [editor, setEditor] = useState<Editor>()
  const [init, setInit] = useState(true)
  const [isPreview, setIsPreview] = useState(false)

  const onEditor = (editor_: Editor) => {
    if (editor_) {
      setEditor(editor_)
    }
  }

  editor && editor.on('component:remove', (component) => {
    setSelectedElement("components")
    const wrapper = editor.getWrapper()
    editor.select(wrapper)
  })

  editor && editor.on('component:selected', (component) => {
    if (component && !init) {
      setSelectedElement(!["style", "layers", "settings"].includes(selectedElement) ? "style" : selectedElement)
    }
  })

  useEffect(() => {
    if (editor) {
      const wrapper = editor.getWrapper()
      editor.select(wrapper)
      setInit(false)
    }
  }, [editor])

  editor && editor.on('panel:switch', (activePanel) => {
    // activePanel will contain information about the currently active panel
    console.log('Active panel:', activePanel);

    // Get the active panel's name
    const activePanelName = activePanel.get('id');
    console.log('Active panel name:', activePanelName);
  });

  const [showEditors, setShowEditors] = useState(true)

  return (
    <GjsEditor
      grapesjs={grapesjs}
      onEditor={onEditor}
      plugins={[(editor: Editor) => template(editor)]}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
        canvas: {
          scripts: values.scripts,
          styles: values.styles
        },
      }}>
      <div className={`flex w-full flex-col h-[100svh]`}>
        <div className='w-full h-[4rem] border-b bg-muted/20  flex items-center'>
          {editor && <Timers projectName={"website"} />}
          {editor && <Screens showEditors={showEditors} setShowEditors={setShowEditors} isPreview={isPreview} setIsPreview={setIsPreview} />}

        </div>
        <div className='w-full flex !h-[calc(100svh_-_4rem)] '>
          {showEditors && <ElementSelector selectedElement={selectedElement} setSelectedElement={setSelectedElement} />}
          <div className={`h-full border-r bg-muted/20 w-[20em] magicScroll ${!showEditors && "hidden"}`}>
            {(selectedElement === "layers") && <LayersProvider>
              {props => <LayerManager {...props} />}
            </LayersProvider>}
            {(selectedElement === "settings") && <TraitsProvider>
              {props => <TraitManager {...props} />}
            </TraitsProvider>}
            {(selectedElement === "components") && <BlocksProvider>
              {props => <BlockManager {...props} setSelectedElement={setSelectedElement} />}
            </BlocksProvider>}
            {(selectedElement === "pages") && <PagesProvider>
              {props => <PageManager {...props} setSelectedElement={setSelectedElement} />}
            </PagesProvider>}
            <div className={`${(selectedElement === "style") ? "block" : "hidden"}`}>
              <SelectorsProvider>
                {props => <SelectorManager {...props} />}
              </SelectorsProvider>
              <StylesProvider>
                {props => <StyleManager {...props} />}
              </StylesProvider>
            </div>
          </div>
          <div className={cn(showEditors ? "p-10" : "p-5" , ' w-full overflow-hidden bg-card flex-1')}>
            <div className={cn(showEditors ? "p-5" : "p-0", 'h-full w-full bg-background gjs-column-m rounded-2xl shadow-xl border overflow-')}>
              <Canvas className={cn(isPreview ? "fixed z-50 h-screen w-screen top-0 left-0" : "w-full !h-full", " gjs-custom-editor-canvas ")} />
            </div>
          </div>
        </div>
      </div>
    </GjsEditor>
  )
}

declare global {
  interface Window {
    HeadingPlugin: (editor: Editor) => void
  }
}

const plugins = [

  // 'grapesjs-plugin-export'
  // {
  //   id: 'gjs-blocks-basic',
  //   src: 'https://unpkg.com/grapesjs-blocks-basic',
  // },
  ,
]


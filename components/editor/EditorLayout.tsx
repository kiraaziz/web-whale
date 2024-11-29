"use client"
import grapesjs, { Editor } from 'grapesjs'
import GjsEditor, { BlocksProvider, Canvas, LayersProvider, PagesProvider, SelectorsProvider, StylesProvider, TraitsProvider } from '@grapesjs/react'
import type { EditorConfig } from "grapesjs"
import LayerManager from './Elements/LayerManager'
import { Button } from '../ui/button'
import { FlameKindling, Laptop, Redo, Smartphone, Tablet, Undo } from 'lucide-react'
import { useEffect, useState } from 'react'
import ElementSelector from './Tools/ElementSelector'
import { StyleManager } from './Elements/StyleManager'
import { BlockManager } from './Elements/BlockManager'
import { SelectorManager } from './Elements/SelectorManger'
import { TraitManager } from './Elements/TraitManager'
import { PageManager } from './Elements/PagesManger'
import Timers from './Tools/Timers'
import Screens from './Tools/Screens'

export default function EditorLayout() {

  const [selectedElement, setSelectedElement] = useState("components")
  const [editor, setEditor] = useState<Editor>()
  const [init, setInit] = useState(true)

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

  return (
    <GjsEditor
      grapesjs={grapesjs}
      onEditor={onEditor}
      plugins={plugins}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
        ...defaultOptions
      }}>
      <div className={`flex w-full flex-col h-[100svh]`}>
        <div className='w-full h-[4rem] border-b bg-muted/20  flex items-center'>
          {editor && <Timers projectName={"website"} />}
          {editor && <Screens />}
        </div>
        <div className='w-full flex !h-[calc(100svh_-_4rem)] '>
          <ElementSelector selectedElement={selectedElement} setSelectedElement={setSelectedElement} />
          <div className='h-full border-r bg-muted/20 w-[20em] magicScroll'>
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
          <div className=' w-full overflow-hidden bg-card p-10 flex-1'>
            <div className='h-full w-full bg-background gjs-column-m rounded-2xl shadow-xl border overflow- p-5'>
              <Canvas className="w-full gjs-custom-editor-canvas !h-full " />
            </div>
          </div>
        </div>
        <script src="https://unpkg.com/grapesjs-tailwind"></script>
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
  (editor: Editor) => {
    if (typeof window !== 'undefined' && window.HeadingPlugin) {
      window.HeadingPlugin(editor)
    }
  },
  {
    id: 'gjs-blocks-basic',
    src: 'https://unpkg.com/grapesjs-blocks-basic',
  },
  // 'grapesjs-tailwind',
  'grapesjs-blocks-bootstrap4'
]


const defaultOptions: EditorConfig = {
  storageManager: false,
  fromElement: true,
  assetManager: {
    assets: [
    ],
  },
  undoManager: {
    trackSelection: false,
  },
  selectorManager: {
    componentFirst: true,
  },
  components: ``,
  canvas: {
  }
}
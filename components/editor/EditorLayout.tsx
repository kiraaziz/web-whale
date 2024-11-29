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
import { cn } from '@/lib/utils'

export default function EditorLayout() {

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
          {editor && <Screens isPreview={isPreview} setIsPreview={setIsPreview} />}
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
              <Canvas className={cn(isPreview ? "fixed z-50 h-screen w-screen top-0 left-0" : "w-full !h-full", " gjs-custom-editor-canvas ")} />
            </div>
          </div>
        </div>
        <script src="https://unpkg.com/grapesjs-tailwind"></script>
        <script src="https://unpkg.com/grapesjs-plugin-export"></script>
        {/* <script src="/template/db20537c/2e592a88863ff694.js"></script> */}
        {/* <script src="/template/dd4dda19/c06103852aede2ea.js"></script> */}
        <script src="/template/a9836b16/d283cc161e4b60a6.js"></script>
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
  'grapesjs-plugin-export'
  // {
  //   id: 'gjs-blocks-basic',
  //   src: 'https://unpkg.com/grapesjs-blocks-basic',
  // },
  // 'grapesjs-tailwind',
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
    styles: [
      '/template/a9836b16/css/2ba0305fc69f2a00.css',
      '/template/a9836b16/css/620d68a67b08ca76.css',
      '/template/a9836b16/css/180bc46ad9d3cf8e.css',
      '/template/a9836b16/css/5c831284c6b90b40.css',
      '/template/a9836b16/css/c982e65a377bd67c.css',
      '/template/a9836b16/css/f6930bfda4846c1a.css',
      '/template/a9836b16/css/ba35c77093fc43a6.css',
      '/template/a9836b16/css/29ca983d2c704415.css',
      '/template/a9836b16/css/602718598f6c7ce8.css',
      '/template/a9836b16/css/af8e39217d719926.css'
    ],
    scripts: [
      '/template/a9836b16/js/db9ff8b8973ab15d.js',
      '/template/a9836b16/js/244c61d80edb82cd.js',
      '/template/a9836b16/js/66134fd833962f19.js',
      '/template/a9836b16/js/0cedd8b91d6d5bde.js',
      '/template/a9836b16/js/3af59ec19d39e7ac.js',
      '/template/a9836b16/js/9d9c857b63bad023.js',
      '/template/a9836b16/js/bb59638af394abf8.js'
    ]
    //   styles: [
    //     '/template/db20537c/css/016137d235feb291.css',
    //     '/template/db20537c/css/6c21f62bb1bc0bac.css',
    //     '/template/db20537c/css/5a605394e5361596.css',
    //     '/template/db20537c/css/5ed0f1e7a6f9e2f7.css',
    //     '/template/db20537c/css/b1d411a9acc235e7.css',
    //     '/template/db20537c/css/7d41e7dda6c90b09.css',
    //     '/template/db20537c/css/811d356ce332d3ef.css',
    //     '/template/db20537c/css/452cda55ba51d2a0.css',
    //     '/template/db20537c/css/ba4f3344a2605aed.css',
    //     '/template/db20537c/css/9d6a3b165ed4ddc2.css'
    // ],
    // scripts: [
    //     '/template/db20537c/js/215eb1e2356afbaf.js',
    //     '/template/db20537c/js/c8ed20f760b6e85f.js',
    //     '/template/db20537c/js/afe04c3211bbff39.js',
    //     '/template/db20537c/js/419cc89b6c4aad14.js',
    //     '/template/db20537c/js/4009457fdadd17d3.js',
    //     '/template/db20537c/js/6d421a6984b03ada.js'
    // ]
    // styles: [
    //   '/template/dd4dda19/css/8b1ee6de225297d6.css',
    //   '/template/dd4dda19/css/ca55ec407b6c3a80.css',
    //   '/template/dd4dda19/css/0b737c951af40225.css',
    //   '/template/dd4dda19/css/13e26a2b2d6bb211.css',
    //   '/template/dd4dda19/css/c9d1c88a6f9c5e25.css',
    //   '/template/dd4dda19/css/1e59ae4d0abea156.css',
    //   '/template/dd4dda19/css/3229e6676fd84ec1.css',
    //   '/template/dd4dda19/css/b3fc3e70e01aa0b6.css',
    //   '/template/dd4dda19/css/523e6c99fa53a535.css',
    //   '/template/dd4dda19/css/f33bfdf382ab18ea.css',
    //   '/template/dd4dda19/css/7ba1af8d77202edb.css',
    //   '/template/dd4dda19/css/2612421c92366155.css'
    // ],
    // scripts: [
    //   '/template/dd4dda19/js/1b851689b7b449ae.js',
    //   '/template/dd4dda19/js/36db8f3e9325f604.js',
    //   '/template/dd4dda19/js/dd226d7a60646c9b.js',
    //   '/template/dd4dda19/js/e8f61fe367ab4c3c.js',
    //   '/template/dd4dda19/js/3162ad7b1f2ba0cd.js',
    //   '/template/dd4dda19/js/29352ef65d83f5f4.js',
    //   '/template/dd4dda19/js/8b29bf7804834e1f.js',
    //   '/template/dd4dda19/js/b56b7b946c46fa07.js',
    //   '/template/dd4dda19/js/83dff207598c8996.js',
    //   '/template/dd4dda19/js/e1c260a1ac67c797.js',
    //   '/template/dd4dda19/js/6ecf267ba36e946d.js',
    //   '/template/dd4dda19/js/b28e2170682ddd4a.js'
    // ]
  }
}
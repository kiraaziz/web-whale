"use client"
import grapesjs, { Editor } from 'grapesjs'
import GjsEditor, { BlocksProvider, Canvas, LayersProvider, PagesProvider, SelectorsProvider, StylesProvider, TraitsProvider } from '@grapesjs/react'
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
import Download from 'grapesjs-plugin-export'
import { Button } from '../ui/button'

export default function EditorLayout({ values, template, css, js }: any) {

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
      setShowEditors(true)
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
    console.log('Active panel:', activePanel)

    const activePanelName = activePanel.get('id')
    console.log('Active panel name:', activePanelName)

  })


  editor && editor.on('stop:core:preview', () => {
    setIsPreview(false)
  })

  const [showEditors, setShowEditors] = useState(true)

  const generateLinksString = () => {
    const cssFiles = {
      'style.css': (ed: any) => ed.getCss(),
      ...css,
      'script.js': (ed: any) => ed.getJs(),
      ...js
    }

    let linksString = '';
    for (const file of Object.keys(cssFiles)) {
      const href = file
      if (href.includes(".css")) {
        linksString += `<link rel="stylesheet" href="css/${href}"/>\n`;
      } else {
        linksString += `<script src="js/${href}"></script>\n`;
      }
    }

    return linksString;
  }

  const getImages = async (ed: any) => {
    const images:any = {};
    const assets = ed.Assets.getAll();

    // Process all assets including images
    assets.forEach((asset:any) => {
      if (asset.get('type') === 'image') {
        const fileName: any = asset.get('name') || `image-${asset.cid}.${asset.get('ext')}`;
        images[fileName] = asset.get('src');
      }
    });

    // Get images from components
    const components = ed.getComponents();
    const processComponent = (component:any) => {
      if (component.get('type') === 'image') {
        const src = component.get('src');
        const fileName = src.split('/').pop();
        images[fileName] = src;
      }
      component.get('components').forEach(processComponent);
    };

    components.forEach(processComponent);

    const res = await fetchImages(images)
    return res
  }

  const blobToBase64 = async (blob:any) => {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    })
  }

  const fetchImages = async (images: any) => {
    let blobs: any = {};  // This will hold the base64 strings

    // Loop through each image and fetch the Blob
    for (const [fileName, url] of Object.entries(images)) {
      try {
        // Fetch the image from the URL
        const response = await fetch(url as any);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${fileName}`);
        }

        // Convert the response to a Blob
        const blob = await response.blob();

        // Convert the Blob to base64 and store it
        const base64String = await blobToBase64(blob);
        blobs[fileName] = base64String;

      } catch (error) {
        console.error(`Error fetching ${fileName}:`, error);
      }
    }

    // After all images are processed, log the blobs object
    console.log(blobs);
    return blobs;
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      onEditor={onEditor}
      plugins={[(editor: Editor) => template(editor), editor => Download(editor, {
        root: {
          'index.html': (ed: any) => `
          <html>
            <head>
              ${generateLinksString()}
            </head>
            <body>
              ${ed.getHtml()}
            </body>
          </html>
        `,
          img: async (ed: any) => {
            const images = await getImages(ed);
            return images;
          },
          css: {
            'style.css': (ed: any) => ed.getCss(),
            ...css
          },
          js: {
            'script.js': (ed: any) => ed.getJs(),
            ...js
          },
        }
      })]}
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
          {true && <ElementSelector selectedElement={selectedElement} setSelectedElement={setSelectedElement} />}
          <div className={`h-full border-r bg-muted/20  magicScroll ease-in-out duration-200 overflow-x-hidden ${!showEditors ? "w-0 opacity-0 " : "opacity-100 w-[20em]"}`}>
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
          <div className={cn(showEditors ? "p-10" : "p-0", ' w-full overflow-hidden bg-card flex-1')}>
            <div className={cn(showEditors ? "p-5  rounded-2xl" : "p-0", 'h-full w-full bg-background gjs-column-m shadow-xl border overflow-')}>
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


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
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function EditorLayout({ values, template }: any) {

  const templaeID = values.base
  const [selectedElement, setSelectedElement] = useState("components")
  const [editor, setEditor] = useState<Editor>()
  const [init, setInit] = useState(true)
  const [isPreview, setIsPreview] = useState(false)
  const [showEditors, setShowEditors] = useState(true)
  const [showSpaces, setShowSpaces] = useState(true)

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

  editor && editor.on('stop:core:preview', () => {
    setIsPreview(false)
  })

  useEffect(() => {
    if (editor) {
      const wrapper = editor.getWrapper()
      editor.select(wrapper)
      setInit(false)
    }
  }, [editor])


  async function saveAll() {
    const zip = new JSZip();

    // Get HTML content
    const html = editor && editor.getHtml();
    const css = editor && editor.getCss();

    // Asset folders to copy
    const assetFolders = ['js', 'fonts', 'css', 'img'];
    const basePath = `/templates/${templaeID}`;

    // Function to read file content
    async function readFileContent(path: any) {
      try {
        const response = await fetch(path);
        const blob = await response.blob();
        return blob;
      } catch (error) {
        console.error(`Error reading file ${path}:`, error);
        return null;
      }
    }

    let cssFiles = ""
    let jsFiles = ""

    // Copy assets
    for (const folder of assetFolders) {
      try {
        // Get list of files in each folder
        const folderPath = `${basePath}/${folder}/`;
        const fileList = values.structure[folder] // You need to implement this based on your backend

        console.log(fileList)

        for (const file of fileList) {
          const content = await readFileContent(`${folderPath}${file}`);
          if (content) {
            // Maintain the same directory structure in zip
            const filesBase = `templates/${templaeID}/${folder}/${file}`
            zip.file(filesBase, content);
            if (folder === "css") {
              cssFiles += `<link rel="stylesheet" href="${filesBase}"/>\n`
            }

            if (folder === "js") {
              jsFiles += `<script src="${filesBase}"></script>\n`
            }
          }
        }
      } catch (error) {
        console.error(`Error processing ${folder} folder:`, error);
      }
    }

    // Create complete HTML file with CSS
    const completeHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Exported Template</title>
            ${jsFiles}
            ${cssFiles}
            <style>
              ${css}
            </style>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `;

    // Add HTML to zip
    zip.file('index.html', completeHtml);
    // Generate and download zip
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'template-with-assets.zip');
    } catch (error) {
      console.error('Error generating zip:', error);
    }
  }

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
          scripts: values.structure.js.map((v: any) => { return `templates/${templaeID}/js/${v}` }),
          styles: values.structure.css.map((v: any) => { return `templates/${templaeID}/css/${v}` })
        },
      }}>
      <div className={`flex w-full flex-col h-[100svh]`}>
        <div className='w-full h-[4rem] border-b bg-muted/20  flex items-center'>
          {editor && <Timers projectName={"website"} />}
          {editor && <Screens showEditors={showEditors} setShowEditors={setShowEditors} isPreview={isPreview} setIsPreview={setIsPreview} saveAll={saveAll} />}

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
              {props => <BlockManager {...props} setSelectedElement={setSelectedElement} setIsPreview={setShowSpaces} />}
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
          <div className={cn((showEditors && showSpaces) ? "p-10" : "p-0", 'ease-in-out duration-150  w-full overflow-hidden bg-card flex-1')}>
            <div className={cn((showEditors && showSpaces) ? "p-5  ease-in-out duration-150 rounded-2xl" : "p-0", 'h-full w-full bg-background gjs-column-m shadow-xl border overflow-')}>
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


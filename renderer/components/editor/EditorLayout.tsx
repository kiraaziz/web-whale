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
import { useHelfText } from '@/hooks/useState'
import gjsBlocksBasic from 'grapesjs-blocks-basic'
import { debounce } from 'lodash'
import 'grapesjs/dist/css/grapes.min.css'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { CheckCheck, SaveAll } from 'lucide-react'

export default function EditorLayout({ template, project, projectState }: any) {

  const [selectedElement, setSelectedElement] = useState("components")
  const [editor, setEditor] = useState<Editor>()
  const [init, setInit] = useState(true)
  const [isPreview, setIsPreview] = useState(false)
  const [showEditors, setShowEditors] = useState(true)
  const [showSpaces, setShowSpaces] = useState(true)
  const [isLastUpdate, setIsLastUpdate] = useState(true)

  const onEditor = (editor_: Editor) => {
    if (editor_) {
      setEditor(editor_)
    }
  }

  editor && editor.on('component:remove', () => {
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

  editor && editor.on('block:drag:start', () => {
    const guideId = 'drag-guide-component';
    const existingGuide = editor.getWrapper().find(`#${guideId}`)[0];

    if (!existingGuide) {
      editor.addComponents(`
        <div id="${guideId}" class="custom-container " style="
        height: 50px;
          width: 100%
        ">
        </div>
      `);
    }
  });

  editor && editor.on('block:drag:stop', () => {
    const guideId = 'drag-guide-component';
    const guide = editor.getWrapper().find(`#${guideId}`)[0];
    if (guide) {
      guide.remove();
    }
  });

  editor && editor.on('destroy', () => {
    const guideId = 'drag-guide-component';
    const guide = editor.getWrapper().find(`#${guideId}`)[0];
    if (guide) {
      guide.remove();
    }
  });

  editor && editor.on('stop:core:preview', () => {
    setIsPreview(false)
  })

  const saveState = async () => {
    try {
      await (window as any).electron.invoke('update-project-content', {
        projectDir: project.projectDirectory,
        newData: editor.getProjectData()
      })
    } catch (e) {
      toast.error("error saving project")
    }

    setIsLastUpdate(true)
  }

  editor && editor.on('component:update component:add component:remove', () => {
    setIsLastUpdate(false)
  })

  useEffect(() => {
    if (editor) {
      const wrapper = editor.getWrapper()
      editor.select(wrapper)
      editor.loadProjectData(projectState);
      setInit(false)
    }
  }, [editor])

  return (
    <GjsEditor
      grapesjs={grapesjs}
      onEditor={onEditor}
      plugins={[gjsBlocksBasic, (editor: Editor) => template(editor)]}
      options={{
        height: '100vh',
        storageManager: false,
        canvas: {
          scripts: project.structure.js.map((v: any) => { return `asset://${project.projectDirectory}/js/${v}` }),
          styles: project.structure.css.map((v: any) => { return `asset://${project.projectDirectory}/css/${v}` }),
        },
      }}>
      <div className={`flex w-full flex-col h-[100svh]`}>
        <div className='w-full h-[4rem] border-b bg-muted/20  flex items-center'>
          {editor && <Timers projectName={useHelfText(project.typedName || "Untitled", 10)} />}
          {editor && <Screens showEditors={showEditors} setShowEditors={setShowEditors} isPreview={isPreview} setIsPreview={setIsPreview} saveAll={null} SaveButton={<Button onClick={saveState} disabled={isLastUpdate}>
            {isLastUpdate ? 
            <CheckCheck size={15} />
            : 
            <SaveAll size={15} />}
            Save</Button>} />}
        </div>
        <div className='w-full flex !h-[calc(100svh_-_4rem)] '>
          {true && <ElementSelector selectedElement={selectedElement} setSelectedElement={setSelectedElement} />}
          <div className={`h-full border-r bg-muted/20  magicScroll ease-in-out duration-300 overflow-x-hidden ${!showEditors ? "w-0 opacity-0 " : "opacity-100 w-[20em]"}`}>
            <div className='!w-[20em] pointer-events-none'>
              {(selectedElement === "layers") && <LayersProvider>
                {props => <LayerManager {...props} />}
              </LayersProvider>}
              {(selectedElement === "settings") && <TraitsProvider>
                {props => <TraitManager {...props} />}
              </TraitsProvider>}
              {(selectedElement === "components") && <BlocksProvider>
                {props => <BlockManager {...props} project={project} setSelectedElement={setSelectedElement} setIsPreview={setShowSpaces} />}
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













async function saveAll() { }
//   const zip = new JSZip();

//   // Get HTML content
//   const html = editor && editor.getHtml();
//   const css = editor && editor.getCss();

//   // Asset folders to copy
//   const assetFolders = ['js', 'fonts', 'css', 'img'];
//   const basePath = `/templates/${templaeID}`;

//   // Function to read file content
//   async function readFileContent(path: any) {
//     try {
//       const response = await fetch(path);
//       const blob = await response.blob();
//       return blob;
//     } catch (error) {
//       console.error(`Error reading file ${path}:`, error);
//       return null;
//     }
//   }

//   let cssFiles = ""
//   let jsFiles = ""

//   // Copy assets
//   for (const folder of assetFolders) {
//     try {
//       // Get list of files in each folder
//       const folderPath = `${basePath}/${folder}/`;
//       const fileList = values.structure[folder] // You need to implement this based on your backend

//       console.log(fileList)

//       for (const file of fileList) {
//         const content = await readFileContent(`${folderPath}${file}`);
//         if (content) {
//           // Maintain the same directory structure in zip
//           const filesBase = `templates/${templaeID}/${folder}/${file}`
//           zip.file(filesBase, content);
//           if (folder === "css") {
//             cssFiles += `<link rel="stylesheet" href="${filesBase}"/>\n`
//           }

//           if (folder === "js") {
//             jsFiles += `<script src="${filesBase}"></script>\n`
//           }
//         }
//       }
//     } catch (error) {
//       console.error(`Error processing ${folder} folder:`, error);
//     }
//   }

//   // Create complete HTML file with CSS
//   const completeHtml = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <title>Exported Template</title>
//           ${jsFiles}
//           ${cssFiles}
//           <style>
//             ${css}
//           </style>
//         </head>
//         <body>
//           ${html}
//         </body>
//       </html>
//     `;

//   // Add HTML to zip
//   zip.file('index.html', completeHtml);
//   // Generate and download zip
//   try {
//     const content = await zip.generateAsync({ type: 'blob' });
//     saveAs(content, 'template-with-assets.zip');
//   } catch (error) {
//     console.error('Error generating zip:', error);
//   }
// }

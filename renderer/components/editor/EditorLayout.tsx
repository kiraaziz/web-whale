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
import 'grapesjs/dist/css/grapes.min.css'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { CheckCheck, SaveAll } from 'lucide-react'


// import path from 'path';
// import fs from 'fs-extra';
import JSZip from 'jszip';
import path from 'path'

export default function EditorLayout({ template, project, projectState }: any) {

  const [selectedElement, setSelectedElement] = useState("components")
  const [editor, setEditor] = useState<Editor>()
  const [init, setInit] = useState(true)
  const [isPreview, setIsPreview] = useState(false)
  const [showEditors, setShowEditors] = useState(true)
  const [showSpaces, setShowSpaces] = useState(true)
  const [isLastUpdate, setIsLastUpdate] = useState(true)
  const [pageDetails, setPageDetails] = useState([])

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

  const handleExportSite = async () => {
    try {
      // Create a new ZIP instance
      const zip = new JSZip();

      // Get all pages from the editor
      const pages = editor.Pages.getAll();

      // Create directories in the ZIP
      const jsFolder = zip.folder('js');
      const cssFolder = zip.folder('css');
      const imgFolder = zip.folder('img');
      const fontsFolder = zip.folder('fonts');

      // Copy JS files from project directory to ZIP
      const jsFiles = project.structure.js;
      for (const jsFile of jsFiles) {
        const jsPath = path.join(project.projectDirectory, 'js', jsFile);
        const jsContent = await (window as any).electron.invoke('read-file', jsPath)
        jsFolder.file(jsFile, jsContent);
      }


      // Copy JS files from project directory to ZIP
      const fontsFiles = project.structure.fonts;
      for (const fontsFile of fontsFiles) {
        const fontsPath = path.join(project.projectDirectory, 'fonts', fontsFile);
        const fontsContent = await (window as any).electron.invoke('read-file-exact', fontsPath)
        fontsFolder.file(fontsFile, fontsContent);
      }

      // Copy CSS files from project directory to ZIP
      const cssFiles = project.structure.css;
      for (const cssFile of cssFiles) {
        const cssPath = path.join(project.projectDirectory, 'css', cssFile);
        const cssContent = await (window as any).electron.invoke('read-file', cssPath)
        cssFolder.file(cssFile, cssContent);
      }

      // Export each page
      // Generate script and style links
      const jsLinks = jsFiles.map(jsFile => `<script src="./js/${jsFile}"></script>`).join("\n");
      const cssLinks = cssFiles.map(cssFile => `<link rel="stylesheet" href="./css/${cssFile}">`).join("\n");

      // Export each page
      for (const [index, page] of (pages as any).entries()) {
        let pageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${pageDetails[index].name}</title>
            ${cssLinks}
        </head>
        <body>
            ${page.getMainComponent().toHTML().replaceAll("https://mobiri.se", "/#").replaceAll(`asset://${project.projectDirectory.replaceAll(/\\/g, '/')}/img`, './img')}
            ${jsLinks}
        </body>
        </html>
        `;
        const pageSlug = pageDetails[index].slug;

        // Add page to ZIP
        zip.file(pageSlug, pageContent);
      }

      // // Copy image files
      const imgFiles = project.structure.img;
      for (const imgFile of imgFiles) {
        const imgPath = path.join(project.projectDirectory, 'img', imgFile);
        const imgContent = await (window as any).electron.invoke('read-file-exact', imgPath)
        imgFolder.file(imgFile, imgContent);
      }


      // // Generate the ZIP file
      const zipContent = await zip.generateAsync({ type: 'blob' });

      // Create download link
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(zipContent);
      downloadLink.download = `${project.typedName || 'project'}.zip`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      toast.success('Project exported successfully');

    } catch (error) {
      console.error('Export error:', error);
      toast.error(`Export failed: ${error.message}`);
    }
  }

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
          {editor && <Screens showEditors={showEditors} setShowEditors={setShowEditors} isPreview={isPreview} setIsPreview={setIsPreview} saveAll={handleExportSite} SaveButton={<Button onClick={saveState} disabled={isLastUpdate}>
            {isLastUpdate ?
              <CheckCheck size={15} />
              :
              <SaveAll size={15} />}
            Save</Button>} />}
        </div>
        <div className='w-full flex !h-[calc(100svh_-_4rem)] '>
          <ElementSelector setShowEditors={setShowEditors} selectedElement={selectedElement} setSelectedElement={setSelectedElement} />
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
                {props => <PageManager {...props} setSelectedElement={setSelectedElement} pageDetails={pageDetails} setPageDetails={setPageDetails} />}
              </PagesProvider>}
              { }
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

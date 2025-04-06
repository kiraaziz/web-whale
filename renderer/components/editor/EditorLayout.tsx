"use client"
import grapesjs, { Editor } from 'grapesjs'
import LayerManager from './Elements/LayerManager'
import { useEffect, useState, useCallback } from 'react'
import GjsEditor, { BlocksProvider, Canvas, LayersProvider, PagesProvider, SelectorsProvider, StylesProvider, TraitsProvider } from '@grapesjs/react'
import ElementSelector from './Tools/ElementSelector'
import { StyleManager } from './Elements/StyleManager'
import { BlockManager } from './Elements/BlockManager'
import { SelectorManager } from './Elements/SelectorManger'
import { TraitManager } from './Elements/TraitManager'
import { PageManager } from './Elements/PagesManger'
import Timers from './Tools/Timers'
import Screens from './Tools/Screens'
import { cn } from '@/lib/utils'
import gjsBlocksBasic from 'grapesjs-blocks-basic'
import 'grapesjs/dist/css/grapes.min.css'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { CheckCheck, SaveAll } from 'lucide-react'
import slugify from 'slugify'
import { handleExportSite } from '@/hooks/useExport'

export default function EditorLayout({ template, project, projectState }: any) {

  const [selectedElement, setSelectedElement] = useState("components")
  const [editor, setEditor] = useState(null)
  const [init, setInit] = useState(true)
  const [isPreview, setIsPreview] = useState(false)
  const [showEditors, setShowEditors] = useState(true)
  const [showSpaces, setShowSpaces] = useState(true)
  const [isLastUpdate, setIsLastUpdate] = useState(true)
  const [pageDetails, setPageDetails] = useState([])

  const handleGenerateSlugs = useCallback(() => {
    if (!editor) return

    const slugCounts = new Map()
    const uniquePageDetails = editor.Pages.getAll().map((v) => {
      let baseName = v.getName()
      let baseSlug = slugify(baseName, {
        replacement: '-',
        lower: true,
        trim: true
      }) || "index"

      let finalSlug = baseSlug + ".html"
      let counter = 1

      while (slugCounts.has(finalSlug)) {
        finalSlug = `${baseSlug}-${counter}.html`
        counter++
      }

      slugCounts.set(finalSlug, 1)

      return {
        name: baseName,
        slug: finalSlug
      }
    })

    setPageDetails(uniquePageDetails)
  }, [editor])

  const onEditor = (editor_) => {
    if (editor_) {
      setEditor(editor_)
    }
  }

  const saveState = async () => {
    if (!editor) return

    try {
      await (window as any).electron.invoke('update-project-content', {
        projectDir: project.projectDirectory,
        newData: editor.getProjectData()
      })
    } catch (e) {
      toast.error("Error saving project")
    }
    setIsLastUpdate(true)
  }

  useEffect(() => {
    if (!editor) return

    const wrapper = editor.getWrapper()
    editor.select(wrapper)
    editor.loadProjectData(projectState)
    setInit(false)

    handleGenerateSlugs()
  }, [editor, projectState, handleGenerateSlugs])

  useEffect(() => {
    if (!editor) return

    const onComponentRemove = () => {
      setSelectedElement("components")
      const wrapper = editor.getWrapper()
      editor.select(wrapper)
    }

    const onComponentSelected = (component) => {
      if (component && !init) {
        setShowEditors(true)
        setSelectedElement(!["style", "layers", "settings"].includes(selectedElement) ? "style" : selectedElement)
      }
    }

    const onComponentChange = () => {
      setIsLastUpdate(false)
    }

    const onBlockDragStart = () => {
      const guideId = 'drag-guide-component'
      const existingGuide = editor.getWrapper().find(`#${guideId}`)[0]

      if (!existingGuide) {
        editor.addComponents(`
            <div id="${guideId}" class="custom-container" style="
            height: 50px;
            width: 100%
            ">
            </div>
          `)
      }
    }

    const onBlockDragStop = () => {
      const guideId = 'drag-guide-component'
      const guide = editor.getWrapper().find(`#${guideId}`)[0]
      if (guide) {
        guide.remove()
      }
    }

    const onStopPreview = () => {
      setIsPreview(false)
    }

    const onPageChange = () => {
      handleGenerateSlugs()
    }

    editor.on('component:remove', onComponentRemove)
    editor.on('component:selected', onComponentSelected)
    editor.on('component:update component:add component:remove', onComponentChange)
    editor.on('block:drag:start', onBlockDragStart)
    editor.on('block:drag:stop', onBlockDragStop)
    editor.on('destroy', onBlockDragStop)  
    editor.on('stop:core:preview', onStopPreview)

    editor.on('page:add', onPageChange)
    editor.on('page:remove', onPageChange)
    editor.on('page:rename', onPageChange)
    editor.on('page:update', onPageChange)
    editor.on('page:select', onPageChange)

    return () => {
      editor.off('component:remove', onComponentRemove)
      editor.off('component:selected', onComponentSelected)
      editor.off('component:update component:add component:remove', onComponentChange)
      editor.off('block:drag:start', onBlockDragStart)
      editor.off('block:drag:stop', onBlockDragStop)
      editor.off('destroy', onBlockDragStop)
      editor.off('stop:core:preview', onStopPreview)

      editor.off('page:add', onPageChange)
      editor.off('page:remove', onPageChange)
      editor.off('page:rename', onPageChange)
      editor.off('page:update', onPageChange)
      editor.off('page:select', onPageChange)
    }
  }, [editor, handleGenerateSlugs, init, selectedElement])



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
          {editor && <Timers projectName={project.typedName || "Untitled"} />}
          {editor && <Screens showEditors={showEditors} setShowEditors={setShowEditors} isPreview={isPreview} setIsPreview={setIsPreview} saveAll={()=>handleExportSite(editor, project, pageDetails)} SaveButton={<Button onClick={saveState} disabled={isLastUpdate}>
            {isLastUpdate ?
              <CheckCheck size={15} />
              :
              <SaveAll size={15} />}
            Save changes</Button>} />}
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
            <div className='h-20' />
          </div>
          <div className={cn((showEditors && showSpaces) ? "p-10" : "p-0", 'ease-in-out duration-150  w-full overflow-hidden bg-card flex-1')}>
            <div className={cn((showEditors && showSpaces) ? "p-5  ease-in-out duration-150 rounded-2xl" : "p-0", 'h-full w-full bg-background gjs-column-m shadow-xl border overflow-')}>
              <Canvas className={cn(isPreview ? "fixed z-50 h-screen w-screen top-0 left-0" : "w-full !h-full", "gjs-custom-editor-canvas ")} />
            </div>
          </div>
        </div>
      </div>
    </GjsEditor>
  )
}
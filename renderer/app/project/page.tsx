"use client"
import EditorLayout from '@/components/editor/EditorLayout';
import { useLayoutEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

export default function page() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const [metaDate, setMetaDate] = useState<any>(null)
  const [template, setTemplate] = useState<any>(null)
  const [projectState, setProjectState] = useState<any>(null)

  useLayoutEffect(() => {
    const fetchMetaDateById = async () => {
      try {
        const metaDate = await (window as any).electron.invoke('get-project-by-id', id);
        if (metaDate) {
          await handleLoadAssests(metaDate)
          setMetaDate(metaDate)
        } else {
          router.push("/")
        }
      } catch (error) {
        toast.error('Error fetching metaDate:' + error.message)
        router.push("/")
      }
    };
    fetchMetaDateById()
  }, [id])

  const handleLoadAssests = async (e: any) => {
    try {
      const pluginPath = `${e.projectDirectory}/${e.structure.root[0]}`
      const scriptText = await (window as any).electron.invoke('read-file', pluginPath)
      const state = await (window as any).electron.invoke('get-project-content', e.projectDirectory)

      const moduleFunction = new Function(
        'editor',
        `
        ${scriptText.replace(/src="templates\/([a-z0-9]+)\/img\/([^"]+)"/g, `src="asset://${e.projectDirectory.replace(/\\/g, '/')}/img/$2"`)}
        return myFunction(editor);
        `
      )
      setTemplate(() => moduleFunction)
      setProjectState(state)
    } catch (error) {
      toast.error("Failed to load the plugin:", error)
      router.push("/")
    }
  }

  if (!metaDate) return <div className='p-5 max-w-7xl mx-auto w-full h-[100svh]'><div className='flex justify-center items-center h-full w-full'>
    <span className="loader"></span>
  </div></div>

  return (<EditorLayout template={template} project={metaDate} projectState={projectState}/>)
}

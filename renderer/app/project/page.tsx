
"use client"
import EditorLayout from '@/components/editor/EditorLayout';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';

export default function page() {
  
    const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [project, setProject] = useState<any>(null);
  const [t1, setT1] = useState<any>(null);

  useLayoutEffect(() => {
    const fetchProjectById = async () => {
      try {
        if (typeof window !== 'undefined' && (window as any).electron?.invoke) {
          const project = await (window as any).electron.invoke('get-project-by-id', id);
          if(project){
            await handleSelect(project)
            setProject(project);
        }
        }
      } catch (error) {
        alert('Error fetching project:' + error.message);
      }
    };
    fetchProjectById();
  }, [id]);

  const handleSelect = async (e: any) => {
    try {
      // Remove the asset:// protocol and use the full path directly
      const pluginPath = `${e.projectDirectory}/${e.structure.root[0]}`;
      // Use electron's invoke to read the file instead of fetch
      const scriptText = await (window as any).electron.invoke('read-plugin-file', pluginPath);

      console.log('<img src="templates/a849f2fd/img/d748.png" alt="Mobirise Website Builder" title="">'.replace(/src="templates\/([a-z0-9]+)\/img\/([^"]+)"/g, `src="asset://${e.projectDirectory}/img/$2"`))
      const moduleFunction = new Function(
        'editor',
        `
        ${scriptText.replace(/src="templates\/([a-z0-9]+)\/img\/([^"]+)"/g, `src="asset://${e.projectDirectory.replace(/\\/g, '/')}/img/$2"`)}
        return myFunction(editor);
        `
      );
      setT1(() => moduleFunction);

    } catch (error) {
      console.error("Failed to load the plugin:", error);
    }
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <EditorLayout template={t1} project={project} />
    </div>
  )
}

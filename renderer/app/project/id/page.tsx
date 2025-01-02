"use client"
import EditorLayout from '@/components/editor/EditorLayout';
import React, { useEffect, useState } from 'react'

export default function page() {

  const id = "PIhG6J0O28KA8at7"
  const [project, setProject] = useState<any>(null);
  const [t1, setT1] = useState<any>(null);

  useEffect(() => {
    const fetchProjectById = async () => {
      try {
        const project = await (window as any).electron.invoke('get-project-by-id', id);
        setProject(project);
        handleSelect(project)
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

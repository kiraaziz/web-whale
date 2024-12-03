"use client"
import EditorLayout from '@/components/editor/EditorLayout'
import { useState } from 'react'
import totalBlocks from "@/scrapper/results/be3d0ad5efd9429c.json"

export default function Page() {


  const [v, setV] = useState(null)
  const [t1, setT1] = useState<any>(null);


  const handleSelect = async (e: any) => {
    try {
      const pluginPath = `${e.pluginPath}`; // Ensure correct public path
      const response = await fetch(pluginPath);
      if (!response.ok) {
        throw new Error(`Failed to fetch plugin: ${response.statusText}`);
      }

      const scriptText = await response.text();

      const moduleFunction = new Function(
        'editor',
        `
        ${scriptText}
        return myFunction(editor);
        `
      );
      setT1(() => moduleFunction);

    } catch (error) {
      console.error("Failed to load the plugin:", error);
      alert("Failed to load the plugin. Check the console for details.");
    }

    setV(e);
  };

  if (!v) return (
    <div className="h-screen w-screen overflow-auto">
      <div className='p-5 grid grid-cols-3 gap-2 overflow-auto'>
        {totalBlocks.map((e: any, index: number) => (
          <div key={index} onClick={() => handleSelect(e)} className='p-2 bg-muted/20 rounded border h-60 overflow-hidden'>
            {e.previews.map((i: any) => (
              <img src={i} alt="" className='w-full' />
            ))}
            {e.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <EditorLayout template={t1} values={v} />
  );
}

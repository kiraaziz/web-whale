"use client"
import EditorLayout from '@/components/editor/EditorLayout'
import { useState } from 'react'
import { totalBlocks } from "@/scrapper/resluts"

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
    <div className='w-full h-full flex items-center justify-center gap-2'>
      {totalBlocks.map((e: any, index: number) => (
        <button key={index} onClick={() => handleSelect(e)}>
          {e.name}
        </button>
      ))}
    </div>
  );

  return (
    <EditorLayout template={t1} values={v} />
  );
}

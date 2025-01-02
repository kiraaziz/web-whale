"use client"
import EditorLayout from '@/components/editor/EditorLayout'
import { useEffect, useState } from 'react'

export default function Page() {


  const [v, setV] = useState(null)
  const [t1, setT1] = useState<any>(null);
  const [totalBlocks, setTotalBlocks] = useState("load")

  const LoadData = async () => {
    // Example fetch request added at the end
    const exampleFetch = await fetch('/api/getBlock', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const exampleData = await exampleFetch.json();
    setTotalBlocks(exampleData.data)
  }

  useEffect(() => {
    LoadData()
  }, [])


  const handleSelect = async (e: any) => {
    try {

      const pluginPath = `templates/${e.base}/${e.structure.root[0]}`;
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
      setV(e);

    } catch (error) {
      console.error("Failed to load the plugin:", error);
      alert("Failed to load the plugin. Check the console for details.");
    }

  };

  if (totalBlocks === "load") return <p>Loading...</p>

  if (!v) return (
    <div className="h-screen w-screen overflow-auto">
      <div className='p-5 grid grid-cols-3 gap-2 overflow-auto'>
        {totalBlocks.map((e: any, index: number) => (
          <div key={index} onClick={() => handleSelect(e)} className='p-2 bg-muted/20 rounded border h-60 overflow-hidden hover:cursor-pointer'>
            {e.structure.preview.slice(0, 3).map((i: any) => (
              <>
                <h1 className='text-3xl font-bold mb-2 '>{e.name}</h1>
                <img src={`templates/${e.base}/preview/${i}`} alt="" className='w-full' />
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <EditorLayout template={t1} values={v} />
  );
}

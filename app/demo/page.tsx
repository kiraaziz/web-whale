"use client"
import EditorLayout from '@/components/editor/EditorLayout'
import { useState } from 'react'
import totalBlocks from "@/scrapper/results/be3d0ad5efd9429c.json"

export default function Page() {


  const [v, setV] = useState(null)
  const [t1, setT1] = useState<any>(null);

  const [css, setCss] = useState({})
  const [js, setJs] = useState({})

  async function getCssContent(url: any) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch CSS content');
      }
      return await response.text(); // Return the CSS content as a string
    } catch (error) {
      console.error(error);
      return ''; // Return empty string if error occurs
    }
  }

  async function buildCssObject(values: any) {
    const cssObject: any = {
      // 'style.css': () => editor && editor.getCss(),
    };

    for (const [index, style] of values.styles.entries()) {
      const cssContent = await getCssContent(style);
      cssObject[`style-${index}.css`] = cssContent;
    }

    setCss(cssObject)
  }

  async function getJsContent(url: any) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch CSS content');
      }
      return await response.text(); // Return the CSS content as a string
    } catch (error) {
      console.error(error);
      return ''; // Return empty string if error occurs
    }
  }

  async function buildJsObject(values: any) {
    const jsObject: any = {
      // 'style.css': () => editor && editor.getCss(),
    };

    for (const [index, style] of values.scripts.entries()) {
      const jsContent = await getJsContent(style);
      jsObject[`script-${index}.js`] = jsContent;
    }

    setJs(jsObject)
  }

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
      await buildCssObject(e)
      await buildJsObject(e)
    } catch (error) {
      console.error("Failed to load the plugin:", error);
      alert("Failed to load the plugin. Check the console for details.");
    }

    setV(e);
  };

  if (!v) return (
    <div className="h-screen w-screen overflow-auto">
      <div className='p-5 grid grid-cols-3 gap-2 overflow-auto'>
        {totalBlocks.slice(0, 5).map((e: any, index: number) => (
          <div key={index} onClick={() => handleSelect(e)} className='p-2 bg-muted/20 rounded border h-60 overflow-hidden'>
            {e.previews.slice(0, 2).map((i: any) => (
              <img src={i} alt="" className='w-full' />
            ))}
            {e.name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <EditorLayout css={css} js={js} template={t1} values={v} />
  );
}

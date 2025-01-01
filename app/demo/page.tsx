"use client"
import EditorLayout from '@/components/editor/EditorLayout'
import { useState } from 'react'

export default function Page() {

  const [v, setV] = useState(null)
  const [t1, setT1] = useState<any>(null);

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

  if (!v) return (
    <div className="h-screen w-screen overflow-auto">
      <div className='p-5 grid grid-cols-3 gap-2 overflow-auto'>
        {totalBlocks.map((e: any, index: number) => (
          <div key={index} onClick={() => handleSelect(e)} className='p-2 bg-muted/20 rounded border h-max overflow-hidden hover:cursor-pointer'>
            {e.structure.preview.map((i: any) => (
              <>
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


const totalBlocks = [
  {
    "base": "651eabba",
    "options": {
      "baseDirPath": "../public/templates/",
      "url": "https://mobirise.com/extensions/curem4/liveblock.html",
      "isHeadless": true,
      "addImportant": true,
      "browserPath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      "rootDom": "section"
    },
    "structure": {
      "root": [
        "\\807c.js"
      ],
      "css": [
        "\\1a07.css",
        "\\1e9d.css",
        "\\2143.css",
        "\\24aa.css",
        "\\7145.css",
        "\\77b4.css",
        "\\a5c4.css",
        "\\b059.css",
        "\\c4fa.css",
        "\\d432.css",
        "\\e3a5.css",
        "\\e6c6.css",
        "\\f4ce.css"
      ],
      "fonts": [
        "\\0d63.eot",
        "\\3ee0.eot",
        "\\4c48.eot",
        "\\5a30.eot",
        "\\5ae7.woff",
        "\\635c.ttf",
        "\\98fd.svg",
        "\\a38a.ttf",
        "\\b8ae.woff2",
        "\\d66b.svg",
        "\\d677.woff"
      ],
      "img": [
        "\\002b.png",
        "\\00e5.jpeg",
        "\\0384.jpeg",
        "\\0413.jpeg",
        "\\10a8.png",
        "\\1424.jpeg",
        "\\1a4a.jpeg",
        "\\1ee4.jpeg",
        "\\1f1b.png",
        "\\2250.jpeg",
        "\\2298.jpeg",
        "\\25d8.jpeg",
        "\\26a0.jpeg",
        "\\26f2.png",
        "\\2f7d.jpg",
        "\\3628.jpeg",
        "\\3732.jpg",
        "\\3a51.png",
        "\\3c68.jpg",
        "\\3d11.jpeg",
        "\\4a09.jpeg",
        "\\4ab3.jpeg",
        "\\5378.jpg",
        "\\58af.jpeg",
        "\\5cf5.jpeg",
        "\\5e0b.jpeg",
        "\\64cc.jpeg",
        "\\6afe.jpeg",
        "\\6d2f.jpeg",
        "\\7a5f.jpeg",
        "\\7a97.png",
        "\\814c.jpeg",
        "\\8191.jpeg",
        "\\8590.jpeg",
        "\\8746.jpeg",
        "\\8f08.jpeg",
        "\\94af.jpeg",
        "\\94d6.png",
        "\\9869.jpeg",
        "\\a32e.jpeg",
        "\\a653.jpeg",
        "\\a78f.jpeg",
        "\\a851.jpeg",
        "\\aa89.jpeg",
        "\\ab30.png",
        "\\ac9d.png",
        "\\adb6.jpeg",
        "\\addf.png",
        "\\b123.jpeg",
        "\\bc7f.jpeg",
        "\\bde2.jpg",
        "\\c1ac.jpeg",
        "\\c9e8.jpeg",
        "\\cde6.png",
        "\\ceca.jpeg",
        "\\cff3.jpeg",
        "\\dbbb.jpeg",
        "\\e95d.jpeg",
        "\\ec3e.jpeg",
        "\\ec6e.jpeg",
        "\\ecf2.jpeg",
        "\\ee81.jpeg",
        "\\f667.jpeg",
        "\\fa9f.jpeg",
        "\\fb5a.jpeg"
      ],
      "js": [
        "\\0bb8.js",
        "\\0ee9.js",
        "\\2866.js",
        "\\5395.js",
        "\\55af.js",
        "\\617b.js",
        "\\6f46.js",
        "\\8502.js",
        "\\8a22.js",
        "\\c44b.js",
        "\\d358.js",
        "\\e1fa.js",
        "\\ecb4.js",
        "\\f9a0.js"
      ],
      "preview": [
        "\\0006.png",
        "\\0084.png",
        "\\0aae.png",
        "\\0fba.png",
        "\\2762.png",
        "\\2a1c.png",
        "\\4b87.png",
        "\\4d57.png",
        "\\5405.png",
        "\\58c5.png",
        "\\668f.png",
        "\\6d78.png",
        "\\7736.png",
        "\\7821.png",
        "\\7bf9.png",
        "\\7e2e.png",
        "\\8006.png",
        "\\8aac.png",
        "\\8d38.png",
        "\\8e20.png",
        "\\9269.png",
        "\\9dc6.png",
        "\\a75a.png",
        "\\a767.png",
        "\\ace3.png",
        "\\b566.png",
        "\\b62a.png",
        "\\b7c9.png",
        "\\ba6b.png",
        "\\bc69.png",
        "\\c400.png",
        "\\c805.png",
        "\\d12f.png",
        "\\d31f.png",
        "\\dae9.png",
        "\\dc56.png",
        "\\e01e.png",
        "\\e1be.png",
        "\\e520.png",
        "\\f328.png",
        "\\f35c.png",
        "\\f61d.png",
        "\\f951.png"
      ]
    }
  }
]
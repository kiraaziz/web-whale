"use client"
import EditorLayout from '@/components/editor/EditorLayout'
import { useState } from 'react'

const totalBlocks = [{
  base: '00fac6d2',
  options: {
    baseDirPath: '../public/templates/',
    url: 'https://mobirise.com/extensions/servicem5/demoblocks.html',
    isHeadless: true,
    addImportant: true,
    browserPath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    rootDom: 'section'
  },
  structure: {
    root: [ 'c8af.js' ],
    css: [
      '07bb.css', '116f.css',
      '217a.css', '35f5.css',
      '52d6.css', '5c79.css',
      '76c3.css', '81f0.css',
      'ab79.css', 'b00c.css',
      'b2ff.css', 'e778.css'
    ],
    fonts: [
      '01e6.ttf',  '1fdb.ttf',   '219d.ttf',
      '2c7f.eot',  '2e39.woff2', '333f.ttf',
      '440e.woff', '4468.svg',   '4e82.ttf',
      '5361.ttf',  '5a9d.woff',  '62b4.ttf',
      '65ba.svg',  '6f96.woff2', '8384.ttf',
      '85c6.eot',  '8a8d.ttf',   '951c.eot',
      '9b6d.ttf',  'a2c6.ttf',   'b309.ttf',
      'b72d.ttf',  'b9a3.ttf',   'd789.eot',
      'de28.ttf',  'e420.ttf',   'ef97.eot',
      'f2fc.svg',  'f849.ttf',   'fa3f.woff',
      'fd2b.eot'
    ],
    img: [
      '0903.jpeg', '160f.jpeg', '1907.jpeg',
      '257c.jpeg', '2d08.jpeg', '35ba.jpeg',
      '4929.jpeg', '497d.jpeg', '4be1.jpeg',
      '4c0b.jpeg', '5a10.jpeg', '6068.jpeg',
      '6c2a.jpeg', '6d1f.jpeg', '6fba.jpeg',
      '743d.jpeg', '78dc.jpeg', '8460.jpeg',
      '899f.jpeg', '9579.jpeg', '9b09.jpeg',
      'a0ae.jpeg', 'bb43.jpeg', 'cb07.jpeg',
      'cb51.jpeg', 'cee0.png',  'f648.jpeg'
    ],
    js: [
      '04a5.js', '1b17.js',
      '29fc.js', '2d9c.js',
      '6a32.js', '7263.js',
      '8619.js', '8b9e.js',
      'ba50.js', 'db90.js'
    ],
    preview: [
      '0285.png', '0f7d.png', '18f4.png',
      '30a2.png', '58a4.png', '73c6.png',
      '7f44.png', '8022.png', '83e6.png',
      '8675.png', '8a89.png', '8c23.png',
      '8f7a.png', '9b45.png', 'a686.png',
      'b7e1.png', 'ba85.png', 'bb75.png',
      'c0b4.png', 'cd5f.png', 'd672.png',
      'da9e.png', 'e227.png', 'e677.png',
      'ea96.png'
    ]
  }
}]

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
          <div key={index} onClick={() => handleSelect(e)} className='p-2 bg-muted/20 rounded border h-60 overflow-hidden hover:cursor-pointer'>
            {e.structure.preview.slice(1, 2).map((i: any) => (
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

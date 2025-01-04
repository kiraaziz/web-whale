"use client"
import grapesjs, { Editor } from 'grapesjs'
import GjsEditor, { BlocksProvider, Canvas, LayersProvider, PagesProvider, SelectorsProvider, StylesProvider, TraitsProvider } from '@grapesjs/react'
import LayerManager from './Elements/LayerManager'
import { useEffect, useState } from 'react'
import ElementSelector from './Tools/ElementSelector'
import { StyleManager } from './Elements/StyleManager'
import { BlockManager } from './Elements/BlockManager'
import { SelectorManager } from './Elements/SelectorManger'
import { TraitManager } from './Elements/TraitManager'
import { PageManager } from './Elements/PagesManger'
import Timers from './Tools/Timers'
import Screens from './Tools/Screens'
import { cn } from '@/lib/utils'
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function EditorLayout({ values, template, project }: any) {

  const [selectedElement, setSelectedElement] = useState("components")
  const [editor, setEditor] = useState<Editor>()
  const [init, setInit] = useState(true)
  const [isPreview, setIsPreview] = useState(false)
  const [showEditors, setShowEditors] = useState(true)
  const [showSpaces, setShowSpaces] = useState(true)

  const onEditor = (editor_: Editor) => {
    if (editor_) {
      setEditor(editor_)
    }
  }

  editor && editor.on('component:remove', (component) => {
    setSelectedElement("components")
    const wrapper = editor.getWrapper()
    editor.select(wrapper)
  })

  editor && editor.on('component:selected', (component) => {
    if (component && !init) {
      setShowEditors(true)
      setSelectedElement(!["style", "layers", "settings"].includes(selectedElement) ? "style" : selectedElement)
    }
  })

  editor && editor.on('stop:core:preview', () => {
    setIsPreview(false)
  })

  editor && editor.on('update', (component) => {
    console.log('Project state updated:', editor.getComponents());
  })

  useEffect(() => {
    if (editor) {
      const wrapper = editor.getWrapper()
      editor.select(wrapper)
      setInit(false)
    }
  }, [editor])




  // 2. Add complex HTML with nested elements
  const addComplexHtml = () => {
    editor.addComponents(`
<!-- Navigation -->
<nav class="navbar navbar-expand-lg bg-white fixed-top">
  <div class="container">
    <div class="navbar-brand">
      <span class="navbar-caption-wrap">
        <a class="navbar-caption mbr-bold">CompanyName</a>
      </span>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#reviews">Reviews</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="mbr-fullscreen" id="home">
  <div class="container">
    <div class="media-container-row">
      <div class="col-md-6">
        <div class="mbr-section">
          <h1 class="mbr-section-title align-left mbr-bold pb-3 display-1">Welcome to Our Platform</h1>
          <p class="mbr-text align-left pb-3 display-7">
            Transforming ideas into reality with innovative solutions and expert guidance.
          </p>
          <div class="mbr-section-btn">
            <a class="btn btn-md btn-primary" href="#services">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mbr-figure">
          <img src="/api/placeholder/600/400" alt="Hero Image">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section class="services-section" id="services">
  <div class="container">
    <div class="row justify-content-center">
      <div class="title col-12 col-lg-8">
        <h2 class="mbr-section-title align-center pb-3 display-2">Our Services</h2>
      </div>
    </div>
    <div class="row">
      <!-- Service 1 -->
      <div class="card col-12 col-md-4">
        <div class="card-wrapper">
          <div class="card-box align-center">
            <span class="mbr-iconfont mbri-desktop display-2"></span>
            <h4 class="card-title align-center mbr-black pb-3 display-7">Web Development</h4>
            <p class="mbr-text align-center mbr-regular">Create stunning websites tailored to your business needs.</p>
          </div>
        </div>
      </div>
      <!-- Service 2 -->
      <div class="card col-12 col-md-4">
        <div class="card-wrapper">
          <div class="card-box align-center">
            <span class="mbr-iconfont mbri-growing-chart display-2"></span>
            <h4 class="card-title align-center mbr-black pb-3 display-7">Digital Marketing</h4>
            <p class="mbr-text align-center mbr-regular">Boost your online presence with strategic marketing.</p>
          </div>
        </div>
      </div>
      <!-- Service 3 -->
      <div class="card col-12 col-md-4">
        <div class="card-wrapper">
          <div class="card-box align-center">
            <span class="mbr-iconfont mbri-users display-2"></span>
            <h4 class="card-title align-center mbr-black pb-3 display-7">Consulting</h4>
            <p class="mbr-text align-center mbr-regular">Expert guidance for your business growth.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section class="mbr-section about-section bg-light" id="about">
  <div class="container">
    <div class="media-container-row">
      <div class="col-12 col-lg-6">
        <div class="mbr-figure">
          <img src="/api/placeholder/600/400" alt="About Us">
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="text-wrapper">
          <h3 class="mbr-section-title display-2">About Our Company</h3>
          <p class="mbr-text pb-3 mbr-regular">
            We deliver exceptional results through innovation and dedication. Our expert team brings years of experience in delivering successful solutions to businesses worldwide.
          </p>
          <div class="mbr-section-btn">
            <a class="btn btn-md btn-primary" href="#contact">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Reviews Section -->
<section class="reviews-section" id="reviews">
  <div class="container">
    <div class="row justify-content-center">
      <div class="title col-12 col-lg-8">
        <h2 class="mbr-section-title align-center pb-3 display-2">Client Reviews</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-wrapper">
            <div class="card-box">
              <div class="mbr-text align-left mbr-regular">
                "Outstanding service and exceptional results. Highly recommended!"
              </div>
              <div class="card-box align-left">
                <div class="user">
                  <div class="user_image">
                    <img src="/api/placeholder/60/60" alt="Client 1">
                  </div>
                  <div class="user_text">
                    <h5 class="mbr-bold">John Smith</h5>
                    <small class="mbr-regular">CEO, Tech Solutions</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-wrapper">
            <div class="card-box">
              <div class="mbr-text align-left mbr-regular">
                "They transformed our business with innovative solutions."
              </div>
              <div class="card-box align-left">
                <div class="user">
                  <div class="user_image">
                    <img src="/api/placeholder/60/60" alt="Client 2">
                  </div>
                  <div class="user_text">
                    <h5 class="mbr-bold">Sarah Johnson</h5>
                    <small class="mbr-regular">Marketing Director</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<section class="footer-section bg-dark">
  <div class="container">
    <div class="media-container-row">
      <div class="col-md-4">
        <h5 class="mbr-white pb-3">CompanyName</h5>
        <p class="mbr-text mbr-regular">Transforming businesses through innovation.</p>
      </div>
      <div class="col-md-4">
        <h5 class="mbr-white pb-3">Contact Us</h5>
        <p class="mbr-text mbr-regular">
          Email: info@company.com<br>
          Phone: (555) 123-4567<br>
          Address: 123 Business St, City
        </p>
      </div>
      <div class="col-md-4">
        <h5 class="mbr-white pb-3">Follow Us</h5>
        <div class="social-row">
          <div class="soc-item">
            <a href="#" class="mbr-iconfont socicon-facebook"></a>
          </div>
          <div class="soc-item">
            <a href="#" class="mbr-iconfont socicon-twitter"></a>
          </div>
          <div class="soc-item">
            <a href="#" class="mbr-iconfont socicon-linkedin"></a>
          </div>
          <div class="soc-item">
            <a href="#" class="mbr-iconfont socicon-instagram"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-lower">
      <div class="media-container-row">
        <div class="col-md-12">
          <hr>
        </div>
      </div>
      <div class="media-container-row">
        <div class="col-md-12 text-center">
          <p class="mbr-text mbr-regular">© 2025 CompanyName. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  `);
  };





  async function saveAll() { }
  //   const zip = new JSZip();

  //   // Get HTML content
  //   const html = editor && editor.getHtml();
  //   const css = editor && editor.getCss();

  //   // Asset folders to copy
  //   const assetFolders = ['js', 'fonts', 'css', 'img'];
  //   const basePath = `/templates/${templaeID}`;

  //   // Function to read file content
  //   async function readFileContent(path: any) {
  //     try {
  //       const response = await fetch(path);
  //       const blob = await response.blob();
  //       return blob;
  //     } catch (error) {
  //       console.error(`Error reading file ${path}:`, error);
  //       return null;
  //     }
  //   }

  //   let cssFiles = ""
  //   let jsFiles = ""

  //   // Copy assets
  //   for (const folder of assetFolders) {
  //     try {
  //       // Get list of files in each folder
  //       const folderPath = `${basePath}/${folder}/`;
  //       const fileList = values.structure[folder] // You need to implement this based on your backend

  //       console.log(fileList)

  //       for (const file of fileList) {
  //         const content = await readFileContent(`${folderPath}${file}`);
  //         if (content) {
  //           // Maintain the same directory structure in zip
  //           const filesBase = `templates/${templaeID}/${folder}/${file}`
  //           zip.file(filesBase, content);
  //           if (folder === "css") {
  //             cssFiles += `<link rel="stylesheet" href="${filesBase}"/>\n`
  //           }

  //           if (folder === "js") {
  //             jsFiles += `<script src="${filesBase}"></script>\n`
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       console.error(`Error processing ${folder} folder:`, error);
  //     }
  //   }

  //   // Create complete HTML file with CSS
  //   const completeHtml = `
  //       <!DOCTYPE html>
  //       <html>
  //         <head>
  //           <meta charset="utf-8">
  //           <title>Exported Template</title>
  //           ${jsFiles}
  //           ${cssFiles}
  //           <style>
  //             ${css}
  //           </style>
  //         </head>
  //         <body>
  //           ${html}
  //         </body>
  //       </html>
  //     `;

  //   // Add HTML to zip
  //   zip.file('index.html', completeHtml);
  //   // Generate and download zip
  //   try {
  //     const content = await zip.generateAsync({ type: 'blob' });
  //     saveAs(content, 'template-with-assets.zip');
  //   } catch (error) {
  //     console.error('Error generating zip:', error);
  //   }
  // }

  return (
    <GjsEditor
      grapesjs={grapesjs}
      onEditor={onEditor}
      plugins={[(editor: Editor) => template(editor)]}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
        canvas: {
          scripts: project.structure.js.map((v: any) => { return `asset://${project.projectDirectory}/js/${v}` }),
          styles: project.structure.css.map((v: any) => { return `asset://${project.projectDirectory}/css/${v}` }).reverse()
        },
      }}>
      <div className={`flex w-full flex-col h-[100svh]`}>
        <div className='w-full h-[4rem] border-b bg-muted/20  flex items-center'>
          {editor && <Timers projectName={"website"} />}
          {editor && <Screens showEditors={showEditors} setShowEditors={setShowEditors} isPreview={isPreview} setIsPreview={setIsPreview} saveAll={addComplexHtml} />}

        </div>
        <div className='w-full flex !h-[calc(100svh_-_4rem)] '>
          {true && <ElementSelector selectedElement={selectedElement} setSelectedElement={setSelectedElement} />}
          <div className={`h-full border-r bg-muted/20  magicScroll ease-in-out duration-200 overflow-x-hidden ${!showEditors ? "w-0 opacity-0 " : "opacity-100 w-[20em]"}`}>
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
              {props => <PageManager {...props} setSelectedElement={setSelectedElement} />}
            </PagesProvider>}
            <div className={`${(selectedElement === "style") ? "block" : "hidden"}`}>
              <SelectorsProvider>
                {props => <SelectorManager {...props} />}
              </SelectorsProvider>
              <StylesProvider>
                {props => <StyleManager {...props} />}
              </StylesProvider>
            </div>
          </div>
          <div className={cn((showEditors && showSpaces) ? "p-10" : "p-0", 'ease-in-out duration-150  w-full overflow-hidden bg-card flex-1')}>
            <div className={cn((showEditors && showSpaces) ? "p-5  ease-in-out duration-150 rounded-2xl" : "p-0", 'h-full w-full bg-background gjs-column-m shadow-xl border overflow-')}>
              <Canvas className={cn(isPreview ? "fixed z-50 h-screen w-screen top-0 left-0" : "w-full !h-full", " gjs-custom-editor-canvas ")} />
            </div>
          </div>
        </div>
      </div>
    </GjsEditor>
  )
}

declare global {
  interface Window {
    HeadingPlugin: (editor: Editor) => void
  }
}

const plugins = [

  // 'grapesjs-plugin-export'
  // {
  //   id: 'gjs-blocks-basic',
  //   src: 'https://unpkg.com/grapesjs-blocks-basic',
  // },
  ,
]

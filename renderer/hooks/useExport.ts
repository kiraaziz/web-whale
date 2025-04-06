import JSZip from "jszip"
import path from "path"
import { toast } from "sonner"

export const handleExportSite = async (editor, project, pageDetails) => {
    try {
        // Create a new ZIP instance
        const zip = new JSZip()

        // Get all pages from the editor
        const pages = editor.Pages.getAll()

        // Create directories in the ZIP
        const jsFolder = zip.folder('js')
        const cssFolder = zip.folder('css')
        const imgFolder = zip.folder('img')
        const fontsFolder = zip.folder('fonts')

        // Copy JS files from project directory to ZIP
        const jsFiles = project.structure.js
        for (const jsFile of jsFiles) {
            const jsPath = path.join(project.projectDirectory, 'js', jsFile)
            const jsContent = await (window as any).electron.invoke('read-file', jsPath)
            jsFolder.file(jsFile, jsContent)
        }


        // Copy JS files from project directory to ZIP
        const fontsFiles = project.structure.fonts
        for (const fontsFile of fontsFiles) {
            const fontsPath = path.join(project.projectDirectory, 'fonts', fontsFile)
            const fontsContent = await (window as any).electron.invoke('read-file-exact', fontsPath)
            fontsFolder.file(fontsFile, fontsContent)
        }

        // Copy CSS files from project directory to ZIP
        const cssFiles = project.structure.css
        for (const cssFile of cssFiles) {
            const cssPath = path.join(project.projectDirectory, 'css', cssFile)
            const cssContent = await (window as any).electron.invoke('read-file', cssPath)
            cssFolder.file(cssFile, cssContent)
        }

        // Export each page
        // Generate script and style links
        const jsLinks = jsFiles.map(jsFile => `<script src="./js/${jsFile}"></script>`).join("\n")
        const cssLinks = cssFiles.map(cssFile => `<link rel="stylesheet" href="./css/${cssFile}">`).join("\n")

        // Export each page
        for (const [index, page] of (pages as any).entries()) {
            let pageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${pageDetails[index].name}</title>
            ${cssLinks}
        </head>
        <body>
            ${page.getMainComponent().toHTML().replaceAll("https://mobiri.se", "/#").replaceAll(`asset://${project.projectDirectory.replaceAll(/\\/g, '/')}/img`, './img')}
            ${jsLinks}
        </body>
        </html>
        `
            const pageSlug = pageDetails[index].slug

            // Add page to ZIP
            zip.file(pageSlug, pageContent)
        }

        // // Copy image files
        const imgFiles = project.structure.img
        for (const imgFile of imgFiles) {
            const imgPath = path.join(project.projectDirectory, 'img', imgFile)
            const imgContent = await (window as any).electron.invoke('read-file-exact', imgPath)
            imgFolder.file(imgFile, imgContent)
        }


        // // Generate the ZIP file
        const zipContent = await zip.generateAsync({ type: 'blob' })

        // Create download link
        const downloadLink = document.createElement('a')
        downloadLink.href = URL.createObjectURL(zipContent)
        downloadLink.download = `${project.typedName || 'project'}.zip`
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)

        toast.success('Project exported successfully')

    } catch (error) {
        toast.error(`Export failed: ${error.message}`)
    }
}
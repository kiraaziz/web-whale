import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

async function getDirectoryContents(dirPath: string) {
    try {
        const files = await fs.readdir(dirPath)
        const fileDetails = await Promise.all(
            files.map(async (file) => {
                const filePath = path.join(dirPath, file)
                const stat = await fs.stat(filePath)
                return {
                    name: file,
                    path: filePath,
                    size: stat.size,
                    isDirectory: stat.isDirectory(),
                    modified: stat.mtime
                }
            })
        )
        return fileDetails.filter(item => !item.isDirectory)
    } catch (error) {
        console.error('Error reading directory:', error)
        throw error
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const requestedPath = searchParams.get('path') || ''

        const baseDir = path.join(process.cwd(), 'public')
        const fullPath = path.join(baseDir, requestedPath)
 
        const files = await getDirectoryContents(fullPath)

        return NextResponse.json({
            path: requestedPath,
            files: files.map(file => file.name)
        })

    } catch (error) {
        return NextResponse.json(
            {
                error: 'Internal server error',
            },
            { status: 500 }
        )
    }
} 
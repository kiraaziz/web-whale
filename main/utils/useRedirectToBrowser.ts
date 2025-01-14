import { shell } from "electron"

const useRedirectToBrowser = async (url: string) => {
    try {
        await shell.openExternal(url)
        return true
    } catch (error) {
        console.error('Failed to open URL:', error)
        return false
    }
}

export { useRedirectToBrowser }
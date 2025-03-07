import { toast } from "sonner"
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const useTimeAgo = (dateString: Date) => {
    const inputDate = new Date(dateString);
    return formatDistanceToNow(inputDate, { addSuffix: true, includeSeconds: true, locale: enUS });
}

export const setState = (state: any, filed: any, value: any) => {
    state((pre: any) => {
        return {
            ...pre,
            [filed]: value
        }
    })
}

export const useHelfText = (text: string, length: number, fromEnd = false) => {
    if (text.length <= length) return text

    return fromEnd
        ? `...${text.slice(-length)}`  // Last characters with "..." at the start
        : `${text.slice(0, length)}...`  // First characters with "..." at the end
}


export const useSizeConvert = (size: any) => {
    let sizeInKB = size / 1024
    let formattedSize

    if (sizeInKB >= 1024) {
        formattedSize = `${(sizeInKB / 1024).toFixed(2)} MO`
    } else {
        formattedSize = `${sizeInKB.toFixed(2)} Ko`
    }
    return formattedSize
}


export const useRedirectToBrowser = async (url: string) => {
    try {
        new URL(url)
        await (window as any).electron.invoke('open-external-url', url)
    } catch (error) {
        toast.error('Invalid URL or failed to open')
    }
}

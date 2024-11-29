
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

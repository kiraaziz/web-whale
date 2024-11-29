import { toast } from "sonner";

export const isImage = (file: any) => {
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp']
    return file && acceptedImageTypes.includes(file.type)
}


export const useUploadImage = async (file: any, type: any) => {

    const data = new FormData();
    data.append("file", file);

    if (type !== "image") {
        data.append("type", "any")
    }

    const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
    });

    if (!response.ok) {
        toast.error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    // /"/upload/" + (type !== "image" ? "any/" : "") + 
    return result.downloadURL
}

const avatar = [
    "Kingston",
    "Brooklynn",
    "Christopher",
    "Mason",
    "Andrea",
    "Aiden",
    "Avery",
    "Sara",
    "Mackenzie",
    "Jameson",
    "Vivian",
    "Kimberly",
    "Chase",
    "Jade",
    "Riley",
    "Maria",
    "Ryker",
    "Adrian",
    "Jocelyn",
    "Caleb"
];

export const Avatars = avatar.map(name => `https://api.dicebear.com/9.x/identicon/svg?seed=${name}`)
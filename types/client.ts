import { ReactNode } from "react"
import { prisma } from "@/hooks/usePrisma"

export type Node = { children: ReactNode }

export type FetchRequest = [boolean, (data: any) => Promise<void>]

export type FetchResponse = {
    success: boolean,
    message: string,
    [key: string]: any
}

export type Params = { params: { id: string } }

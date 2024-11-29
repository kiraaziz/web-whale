import { options } from "@/app/api/auth/[...nextauth]/Options"
import { getServerSession } from "next-auth"
import { prisma } from "./usePrisma"

export const useHavePermission = async (projectId: string, access: string[]) => {

    const { user: { id } }: any = await getServerSession(options)

    const membership = await prisma.membership.findFirst({
        where: {
            userId: id,
            projectId: projectId,
            blocked: false,
            role: {
                in: access
            }
        }
    })

    if (membership) {
        return true
    }

    return {
        success: false,
        message: "You don't have permission",
    }

}

export const useHaveUIPermission = async (projectId: string) => {

    const { user: { id } }: any = await getServerSession(options)

    const membership = await prisma.membership.findFirst({
        where: {
            userId: id,
            projectId: projectId,
            blocked: false,
        }
    })

    if (membership) return true
    return false
}

export const useAcceptInvitaion = async (projectId: string) => {

    const session: any = await getServerSession(options)

    await prisma.membership.updateMany({
        where: {
            OR: [
                { tempMail: (session?.user?.email || "").toLowerCase() },
                {
                    user: {
                        email: (session?.user?.email || "").toLowerCase()
                    }
                }
            ],
            projectId: projectId
        },
        data: {
            userId: session?.user?.id,
            tempMail: null
        }
    })

    const member = await prisma.membership.findFirst({
        where: {
            projectId: projectId,
            userId: session?.user?.id
        }
    })

    return member
}

export const useCreateActivity = async (keyId: string, type: "LIST" | "CREATE" | "UPDATE" | "DELETE" | "READ") => {

    const currentDate = new Date()

    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const date = currentDate.toISOString().split('T')[0]

    
    await prisma.activity.create({
        data: {
            day,
            month,
            year,
            date,
            type,
            apiKeyId: keyId
        }
    })

    return
}
import { options } from "@/app/api/auth/[...nextauth]/Options"
import { prisma } from "./usePrisma"
import { getServerSession } from "next-auth"
import { subDays, subMonths, eachDayOfInterval, format } from 'date-fns'

export const useGetCollections = async (projectsId: string) => {

    return await prisma.collection.findMany({
        orderBy: {
            createdAt: "desc"
        },
        where: {
            projectId: projectsId
        },
        include: {
            _count: {
                select: {
                    Document: true
                }
            }
        }
    })
}

export const useGetDocuments = async (projectId: string, docId: string) => {

    return await prisma.document.findMany({
        orderBy: {
            createdAt: "desc"
        },
        where: {
            collection: {
                id: docId,
                projectId: projectId
            }
        }
    })
}

export const useGetKeys = async (projectId: string) => {

    return await prisma.apiKey.findMany({
        orderBy: {
            createdAt: "desc"
        },
        where: {
            collection: {
                projectId: projectId
            }
        },
        include: {
            collection: true
        }
    })
}

export const useGetFiles = async (projectId: string) => {

    return await prisma.file.findMany({
        orderBy: {
            createdAt: "desc"
        },
        where: {
            projectId: projectId
        },
    })
}

export const useGetProjects = async () => {

    const { user: { id } }: any = await getServerSession(options)

    return await prisma.project.findMany({
        orderBy: {
            createdAt: "desc"
        },
        where: {
            membership: {
                some: {
                    userId: id
                }
            }
        },
    })
}

export const useGetProject = async (projectId: string) => {

    return await prisma.project.findUnique({
        where: {
            id: projectId
        },
        include: {
            membership: {
                orderBy: {
                    createdAt: "desc"
                },
                include: {
                    user: true
                }
            }
        }
    })
}

export const useGetRole = async (projectId: string) => {

    const { user: { id } }: any = await getServerSession(options)

    return await prisma.membership.findFirst({
        where: {
            projectId: projectId,
            userId: id
        },
    })
}

export const useGetHomeState = async (projectId: string, period: "7d" | "30d" | "90d") => {

    const today = new Date()
    let startDate

    switch (period) {
        case '7d':
            startDate = subDays(today, 7)
            break
        case '90d':
            startDate = subMonths(today, 3)
            break
        case '30d':
        default:
            startDate = subDays(today, 30)
            break
    }

    const allDates = eachDayOfInterval({
        start: startDate,
        end: today,
    }).map(date => format(date, 'yyyy-MM-dd'))

    const activity_ = await prisma.activity.groupBy({
        by: ["date"],
        _count: {
            id: true,
        },
        where: {
            createdAt: {
                gte: startDate,
            },
            apiKey: {
                collection: {
                    projectId: projectId,
                },
            },
        },
    })

    const allActivityTypes = ["LIST", "CREATE", "READ", "UPDATE", "DELETE"]

    const activityState_ = await prisma.activity.groupBy({
        by: ["type"],
        _count: {
            id: true,
        },
        where: {
            apiKey: {
                collection: {
                    projectId: projectId,
                },
            },
        },
    })

    const activityStateMap = new Map(
        activityState_.map((el) => [el.type, el._count.id])
    )

    const activityState = allActivityTypes.map((type) => {
        return {
            type: type,
            count: activityStateMap.get(type) || 0,
        }
    })

    const activityMap = new Map(
        activity_.map(el => [el.date, el._count.id])
    )

    const activities = allDates.map(date => ({
        date,
        count: activityMap.get(date) || 0,
    }))

    const totalCollections = await prisma.collection.count({
        where: {
            projectId: projectId
        }
    })


    const totalDoc = await prisma.document.count({
        where: {
            collection: {
                projectId: projectId
            }
        }
    })


    const totalRequests = await prisma.activity.count({
        where: {
            apiKey: {
                collection: {
                    projectId: projectId,
                },
            },
        }
    })



    const totalStorage = await prisma.file.aggregate({
        _sum: {
            size: true
        },
        where: {
            projectId: projectId,
        }
    })

    return { totalRequests, totalDoc, totalCollections, totalStorage, activities, activityState }
}

export type GetProjectType = Awaited<ReturnType<typeof useGetProject>>
export type GetRoleType = Awaited<ReturnType<typeof useGetRole>>
export type GetHomeType = Awaited<ReturnType<typeof useGetHomeState>>

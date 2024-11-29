import { FetchRequest, FetchResponse } from "@/types/client"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"

export function useFetch(
    path: string,
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
    action: (data: any) => void,
    canRefrech = true
): FetchRequest {

    const [isPending, startTransition] = useTransition()
    const router = useRouter()

    const Run = async (data: any, showInfo: boolean = true): Promise<void> => {

        startTransition(async () => {
            try {

                const req = await fetch(`/api${path}`, {
                    method: method,
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    cache: "no-cache"
                })

                if (!req.ok) {
                    throw new Error(`HTTP error! Status: ${req.status}`);
                }

                const res: FetchResponse = await req.json()


                if (!res.success) {
                    showInfo && toast.error(`🥲 ${res.message}`)
                } else {
                    if (canRefrech) {
                        router.refresh()
                    }
                    showInfo && toast.success(`✨🎉 ${res.message}`)
                    action(res)
                }

            } catch (error: any) {
                console.error(error)
                toast.error(`🥲 ${error.message}`)
            }
        })
    }

    return [isPending, Run]
}


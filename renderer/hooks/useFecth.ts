import { useRouter } from "next/navigation"
import { useTransition } from "react"

export function useFetch(
    path: string,
    method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH",
    action: (data: any) => void,
    canRefrech = true
): any {

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

                const res: any = await req.json()


                if (!res.success) {
                    showInfo && alert(`🥲 ${res.message}`)
                } else {
                    if (canRefrech) {
                        router.refresh()
                    }
                    showInfo && alert(`✨🎉 ${res.message}`)
                    action(res)
                }

            } catch (error: any) {
                console.error(error)
                alert(`🥲 ${error.message}`)
            }
        })
    }

    return [isPending, Run]
}


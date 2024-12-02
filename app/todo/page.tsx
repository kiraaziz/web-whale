"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function page() {

    const [totalTask, setTotalTask] = useState<any>([])
    const [task, setTask] = useState<any>({
        title: "",
        description: "",
        level: 10
    })

    const handleSetTask = (f: string, e: string) => {
        setTask((pre: any) => {
            return {
                ...pre,
                [f]: e
            }
        })
    }

    const addTask = () => {
        if (!task.title || !task.description) {
            alert("😭 invalid inputs")
            return
        }

        setTotalTask([task, ...totalTask])
        setTask({
            title: "",
            description: "",
            level: 10
        })
    }

    return (
        <div className="p-10">
            <div className="">
                <Input placeholder="title" autoFocus value={task.title} onChange={(e)=> handleSetTask('title', e.target.value)} />
                <Input placeholder="description" autoFocus value={task.description} onChange={(e)=> handleSetTask('description', e.target.value)} />
            </div>
        </div>
    )
}

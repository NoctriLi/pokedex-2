"use client"

import { useEffect, useState } from "react"

export const Main = ({children, type, className}) => {
    const [pType, setPType] = useState("")
    useEffect(() => {
        setPType(` bg-${type}-d`)
        }, [type])

        console.log(pType)
    return (
        <main className={className }>
            {children}
        </main>
    )
    
    }

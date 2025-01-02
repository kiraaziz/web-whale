"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {

    return <NextThemesProvider  {...props}>
        {/* <div className={cn(!pathName ? poppins.className : cairo.className, "h-full w-full")}> */}
            {children}
        {/* </div> */}
    </NextThemesProvider>
}

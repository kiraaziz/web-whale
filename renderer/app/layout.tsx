"use client"
import TitleBar from "@/components/providers/TitleBar"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers/theme"
import { Toaster } from "@/components/ui/sonner"
import "@/lib/globals.css"

export default function RootLayout({ children }: any) {

  const [appIsLoading, setAppIsLoading] = useState(true)
  useEffect(() => {
    if (window && (window as any).electron && (window as any).electron.invoke) {
      setAppIsLoading(false)
    } else {
      setAppIsLoading(false)
    }
  }, [])

  
  return (
    <html lang="en">
      <head>
        <title>Web Whale</title>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn("text-foreground w-screen bg-background p-0 m-0 flex flex-col overflow-hidden !pb-0")
      }>
        {!appIsLoading && <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TitleBar />
          <div className="w-full h-full  overflow-hidden"> 
            {children} 
          </div>
          <Toaster />
        </ThemeProvider>}
      </body>
    </html >
  )
}

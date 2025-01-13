import { ThemeProvider } from "@/components/providers/theme"
import { cn } from "@/lib/utils"
import "@/lib/globals.css"
 

export default async function RootLayout({ children }: any) {
 
  return (
    <html lang="en">
      <head>
        <title>Web Whale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn("text-foreground w-screen bg-background p-0 m-0 flex flex-col overflow-hidden !pb-0")
      }>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full h-full  overflow-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html >
  )
}

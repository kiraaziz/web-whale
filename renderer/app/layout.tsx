import { ThemeProvider } from "@/components/providers/theme"
import { cn } from "@/lib/utils"
import { Nunito } from 'next/font/google'
import "@/lib/globals.css"

const nunito = Nunito({
  subsets: ['latin'],
  weight: ["200", "300", "500", "400", "600", "700", "800", "900"]
})

export default async function RootLayout({ children }: any) {

  return (
    <html lang="en">
      <head>
        <title>Web Whale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn(nunito.className, "text-foreground h-[100svh] w-screen bg-background p-0 m-0 flex flex-col overflow-hidden !pb-0")
      }>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}

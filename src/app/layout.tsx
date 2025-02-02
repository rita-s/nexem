import { ThemeProvider } from "next-themes"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "NEXEM - Construction Services",
    description: "Professional construction services in Coventry",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
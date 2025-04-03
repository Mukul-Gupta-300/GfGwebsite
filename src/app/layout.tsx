import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import CustomCursor from "./components/CustomCursor" // Import the cursor component
import type React from "react"
import Image from 'image/Logo.png'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GeeksforGeeks BVCOE",
  description: "A tech oriented coding society",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/Logo.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <CustomCursor /> Add the custom cursor here */}
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
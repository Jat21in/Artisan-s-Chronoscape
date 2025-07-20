"use client"

import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import "./globals.css"
import Header from "@/components/header"
import AIChatbot from "@/components/ai-chatbot"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <AIChatbot />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "Artisan's Chronoscape",
  description: "A time-traveling adventure through the world of artisans",
    generator: 'Next.js',
  applicationName: "Artisan's Chronoscape",
  keywords: [
    "artisan",
    "chronoscape",
    "time travel",
    "adventure",
    "craftsmanship",
    "history",
    "exploration",
    "culture",
    "heritage",
    "art",
    "journey",
    "tradition",
    "innovation", 
  ],
  authors: [
    {
      name: "Artisan's Team",
      url: "https://artisanschronoscape.com",
    },
  ],
  creator: "Artisan's Team",
  publisher: "Artisan's Team",
  openGraph: {  
    title: "Artisan's Chronoscape",
    description: "A time-traveling adventure through the world of artisans",
    url: "https://artisanschronoscape.com",
    siteName: "Artisan's Chronoscape",
    images: [
      {
        url: "/1.jpg",
        width: 1200,
        height: 630,
        alt: "Artisan's Chronoscape OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'
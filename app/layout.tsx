import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kaddosh Global Events - Creating Magical Moments",
  description: "Professional event planning services for weddings, corporate events, and special celebrations",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// })

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// })

export const metadata: Metadata = {
  title: "Jinsun Machineries - Industrial Equipment & Solutions",
  description: "Leading provider of industrial machinery and equipment solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
       <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

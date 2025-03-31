import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { locales } from "@/middleware"
import { dir } from "i18next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Travellian - Travel Agency",
  description: "Book your dream vacation with Travellian",
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


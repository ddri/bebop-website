import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bebop - Campaign Content Management System",
  description: "Bebop is a simple CMS that helps you create, manage, and publish content campaigns.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <svg className="hidden">
          <defs>
            {/* Halftone pattern for hero section */}
            <pattern
              id="hero-pattern"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <circle cx="12.5" cy="12.5" r="1.5" fill="rgba(230, 105, 232, 0.15)" />
            </pattern>

            {/* Risograph-style pattern for CTA section */}
            <pattern
              id="cta-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(30)"
            >
              <circle cx="25" cy="25" r="2" fill="rgba(255, 255, 255, 0.1)" />
              <circle cx="0" cy="0" r="2" fill="rgba(255, 255, 255, 0.1)" />
              <circle cx="0" cy="50" r="2" fill="rgba(255, 255, 255, 0.1)" />
              <circle cx="50" cy="0" r="2" fill="rgba(255, 255, 255, 0.1)" />
              <circle cx="50" cy="50" r="2" fill="rgba(255, 255, 255, 0.1)" />
            </pattern>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  )
}


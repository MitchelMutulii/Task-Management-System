import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Mipango – Structure Work, Unlock Potential',
  description: 'A modern, calming, and responsive landing page for the TaskFlow task management app.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


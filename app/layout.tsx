import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YouTube Analyzer',
  description: 'Analyze and summarize YouTube videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}

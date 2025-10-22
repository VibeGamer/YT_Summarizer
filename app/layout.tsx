import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YouTube Analyzer',
  description: 'Analyze YouTube videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <header className="bg-white dark:bg-slate-800 shadow-md">
            <div className="container mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
                YouTube Analyzer
              </h1>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

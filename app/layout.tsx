import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vocabulary Trainer',
  description: '',
}

export default function RootLayout({
  children
}: {
    children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

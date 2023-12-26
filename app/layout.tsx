import type { Metadata } from 'next';
import './globals.css';
import Topbar from '@/components/Topbar';

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
        <Topbar />
        {children}
      </body>
    </html>
  )
}

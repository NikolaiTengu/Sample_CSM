import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SCP Foundation - RAISA Dashboard | Recordkeeping and Information Security Administration',
  description: 'Classified monitoring system for client satisfaction metrics - SCP Foundation RAISA Division',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

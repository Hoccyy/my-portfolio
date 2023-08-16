import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Head from 'next/head' // Import the Head component


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hoccyy | SWE',
  description: 'ADD DESC software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        {/* Add the link for the new favicon */}
        <link rel="icon" href="favicon.png" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

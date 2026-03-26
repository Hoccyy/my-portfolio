import './globals.css';
import Head from 'next/head';
import Navbar from './components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hocían Wade | SWE',
  description: 'Hocian Wade is a Software Engineer and Computer Science student with a passion for Software Engineering and a burning desire to learn more about Software and technology.',
};

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
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&family=Nunito:wght@200&display=swap');
        </style>
      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}

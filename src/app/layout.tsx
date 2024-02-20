import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import NavItem from './components/NavItem';
import Footer from './components/Footer';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '@Hoccyy | Software Engineer 🪻',
  description: 'I\'m Hocian Wade, Software Engineer and Computer Science student with a passion for Software Engineering and a burning desire to learn more about Computer Science and technology.',
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
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&family=Nunito:wght@200&display=swap');
        </style>
      </Head>
      <body className={inter.className}>
        <div className={styles.centerMenu}>
        <nav id='menu' className={styles.menu}>
          <NavItem desc='A little bit about me' title='About' path='/'/>
          <NavItem desc='Some of my work' title='Projects' path='/work'/>
          <NavItem desc='Get in touch with me!' title='Contact' path='/contact'/>
        </nav>
        </div>
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}

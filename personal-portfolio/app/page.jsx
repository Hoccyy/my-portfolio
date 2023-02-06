import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.card}>Hocian Wade.</h1>
      <h1 className={styles.main}>Budding Software Engineer</h1>
      <span>
        <p className={styles.description}>I'm a Computer Science student</p>
      </span>

    </main>
  )
}

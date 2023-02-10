import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div class="content-1">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            draggable={false}
            priority
          />
          <div className={styles.sizefit}><h1 className={styles.title}>Hocian Wade.</h1></div>
          <div id='content-0'>
          <h1 className={styles.title2}>I am a Full-stack developer</h1></div>
          <span>
            <p className={styles.title3}>About me,</p>
            <p className={styles.description1}>I'm a university student currently enrolled in Computer Science at York University.</p>
          </span>

        </div>{/*Div1*/}
        <div className='content-2'>
          {/*<button className={styles.button}>Resume</button>*/}
          <div id='content-0'> <h3 className={styles.title2}>My Projects</h3> </div>
          <ul className='banners'>
              <li className='banners-1'><h1 className={styles.description}>Morse-Code Translator</h1>
              <h3 className={styles.description}>A web application that translates english into morsecode and vice versa</h3>
              </li>
              <li className='banners-1'><h1 className={styles.description}>Python Cache cleaner</h1></li>
              <li className='banners-1'><h1 className={styles.description}>Trivia Game</h1></li>
          </ul>
          <ul className='banners'>
              <li className='banners-1'><h1 className={styles.description}>Arduino Timer</h1></li>
              <li className='banners-1'><h1 className={styles.description}>Water Level Tracker</h1>
              <h2 className={styles.wipTitle}>Coming soon</h2>
              </li>
              <li className='banners-1'><h1 className={styles.description}>Weather App</h1>
              <h2 className={styles.wipTitle}>Coming soon</h2>
              </li>
          </ul>
          <h1 className={styles.title2}>Something</h1>
        </div>

    </div>{/*Main DIv*/}
    </main>
  )
}

import './globals.css'
import styles from './page.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body class='b-Men'>
        <div class="left-tab">
          <ul class='menu-it'>
            <li class='rightm'>
              <span className={styles.card}><p className={styles.descriptionL}>About</p></span>
              <span className={styles.card}><a target="blank" href='https://www.linkedin.com/in/hoccyy/' className={styles.descriptionL}>LinkedIn</a></span>
              <span className={styles.card}><a target="blank" href='https://twitter.com/Hoccyy_' className={styles.descriptionL}>Twitter</a></span>
              <span className={styles.card}><a target="blank" href='https://github.com/Hoccyy' className={styles.descriptionL}>Github</a></span></li> 
          </ul>
        </div>
        <div>
          {children}
        </div>
        <div className={styles.footer}>
          <ul class="left-tab">
            <li class='rightm'> <h1 className={styles.title2GI}>@Hoccyy</h1> </li>  
          </ul>
        </div>
      </body>
    </html>
  )
}

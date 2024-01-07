import styles from '../page.module.css'
import SocialMediaItem from '../components/SocialMediaItem'

const resumeUrl = 'https://drive.google.com/file/d/1O4cXXNgMqks6eakNn5fM6MG8O5aYEvWb/view?usp=sharing';

export default function Contact() {
  return (
    <main className={styles.mainContact}>
      <h1 className={styles.socialTextHeader}>Get in touch with me</h1>
      <div className={styles.resources}>
        <div className={styles.emailContainer}>
          <SocialMediaItem imageSource='/gmail.png' platform='' src='mailto:hocianw@gmail.com' newtab={false}/>
          <a href='mailto:hocianw@gmail.com'>
            <h1 className={styles.socialText}>Email me!</h1>
            <h1 className={styles.socialText2}>Hocianw@gmail.com</h1>
          </a>
        </div>
      </div>

      <div className={styles.resources}>
        <div className={styles.generalContainer}>
          <SocialMediaItem imageSource='/linkedin.png' platform='LinkedIn' src='https://www.linkedin.com/in/hoccyy/'/>
        </div>
        <div className={styles.generalContainer}>
          <SocialMediaItem imageSource='/github.png' platform='GitHub' src='https://github.com/Hoccyy'/>
        </div>
        <div className={styles.generalContainer}>
          <SocialMediaItem imageSource='/twitter.png' platform='Twitter' src='https://twitter.com/Hoccyy_'/>
        </div>

        <div className={styles.resumeContainer}>
          <h1 className={styles.resumeContainerHeader}>Resume</h1>
          <h3 className={styles.resumeContainerBody}>
            <a href={resumeUrl} target='_blank' title='Online read-only copy'>
              <span className={styles.resumeText}>Online Version</span>
            </a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href='1Hocian_Wade - Resume.pdf' target='_blank' download>
              <span className={styles.resumeText}>Download</span> &nbsp;&nbsp;📥
            </a>
          </h3>
        </div>
      </div>
    </main>
  )
}

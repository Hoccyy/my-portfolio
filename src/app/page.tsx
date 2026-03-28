'use client';
import Image from 'next/image';
import styles from './page.module.css';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Interests from './components/Interests';
import { ExperienceTimeline } from './components/ExperienceTimeline';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.primary}>
        <div className={styles.center}>
          <div className={styles.introSect}>
          <Image
              src={"/portrait2.jpg"}
              width={900}
              height={900}
              alt="Portrait"
              className={styles.portraitImgMobile}
              draggable={false}
          />
            <div className={styles.introSect2}>
              <h1 id="intro" className={styles.introMessage}>
                Hocían Wade 👨🏾‍💻
              </h1>
              <h2 className={styles.introBody}>
                {" "}
                I&apos;m&nbsp;a Software&nbsp;Engineer and Computer&nbsp;Science
                student at
                <span className={styles.uniSpan}>&nbsp;York&nbsp;University </span>
                pursuing my bachelor&apos;s degree with a deep passion
                for developing software and bringing ideas to life 💻&nbsp;⚙️
              </h2>
            </div>

            <Image
              src={"/portrait2.jpg"}
              width={900}
              height={900}
              alt="Portrait"
              className={styles.portraitImg}
              draggable={false}
            />
          </div>
        </div>


        <div id="skillsCont" className={styles.skillsCont}>
          <Interests/>
          <TechStack />
        </div>

        <h1 className={styles.sectionHeader}> Work Experience </h1>
        <ExperienceTimeline/>

        <div className={styles.expSection}>

          <div className={styles.expCenter}>

            <div className={styles.eduSect}>
              <Education/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

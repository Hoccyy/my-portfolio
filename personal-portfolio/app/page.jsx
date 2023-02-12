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
          <h1 className={styles.title2FS}>I am a Full-stack developer</h1></div>

        </div>{/*Div1*/}



        <div className={styles.content3}>
          {/*<button className={styles.button}>Resume</button>*/}
          <div id='content-0'> <h3 className={styles.title2Sk}>My Skills</h3> </div>

              <div className={styles.banGrid}>{/*Skill set 1*/}
                <div className={styles.gridSkills}>
                  {/*<h1 className={styles.title2Sk}>Python</h1>*/}
                  <Image
                  //src="/Python-logo.svg"
                  src="/assets/Python.svg"
                  alt="Python 3.0 Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
                <div className={styles.gridSkillsJS}>
                  <Image
                  //src="/Python-logo.svg"
                  src="/assets/JavaScript.svg"
                  alt="JavaScript(Vanilla JS) Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
                <div className={styles.gridSkills}>
                <Image
                  //src="/Python-logo.svg"
                  src="/assets/Java.svg"
                  alt="Java Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
              </div>

              <div className={styles.banGrid}>{/*Skillset 2 */}
                <div className={styles.gridSkillsN}>
                  {/*<h1 className={styles.title2Sk}>Python</h1>*/}
                  <Image
                  //src="/Python-logo.svg"
                  src="/assets/next.svg"
                  alt="Next.JS Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
                <div className={styles.gridSkills}>
                  <Image
                  //src="/Python-logo.svg"
                  src="/assets/React.svg"
                  alt="React Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
                <div className={styles.gridSkills}>
                <Image
                  //src="/Python-logo.svg"
                  src="/assets/Csharp.svg"
                  alt="C# Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
              </div>
              <div className={styles.banGrid}>{/*Skillset 3 */}
                <div className={styles.gridSkillsJS}>
                  {/*<h1 className={styles.title2Sk}>Python</h1>*/}
                  <Image
                  //src="/Python-logo.svg"
                  src="/assets/Html.svg"
                  alt="HTML Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
                <div className={styles.gridSkillsJS}>
                  <Image
                  //src="/Python-logo.svg"
                  src="/assets/CSS.svg"
                  alt="CSS Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
                <div className={styles.gridSkills}>
                <Image
                  //src="/Python-logo.svg"
                  src="/assets/CPP.svg"
                  alt="C++(CPP) Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
              </div>
              <div className={styles.banGrid}>{/*Skillset 3 */}
                <div className={styles.gridSkillsN}>
                  {/*<h1 className={styles.title2Sk}>Python</h1>*/}
                  <Image
                  //src="/Python-logo.svg"
                  src="/assets/SQL.svg"
                  alt="SQL Logo"
                  className={styles.skillLogo}
                  width={100}
                  height={24}
                  draggable={false}
                  priority
                  />
                </div>
              </div>

          </div>

          <div className={styles.content2}>
          <div id='content-0'> <h3 className={styles.title2Sk}>My Projects</h3> </div>
          <div className={styles.banGrid}>
            <div className={styles.gridItem}><h1 className={styles.title2}>Morse Translator</h1>
            <Image
            src="/assets/Morse.png"
            alt="Vercel Logo"
            className={styles.bumpLogo}
            width={100}
            height={24}
            draggable={false}
            priority
            />
            <h3 className={styles.title2GI}>A web application to translate English into Morse Code and vice versa</h3>
          </div>
            <div className={styles.gridItem}><h1 className={styles.title2}>Cache-Woosh</h1></div>
            <div className={styles.gridItem}><h1 className={styles.title2}>Arduino Timer</h1></div>
            <div className={styles.gridItem}><h1 className={styles.title2}>Weather app</h1></div>
          </div>
          <div className={styles.banGrid}>
            <div className={styles.gridItem}><h1 className={styles.title2}>Water Tracker</h1>
            <Image
            src="/assets/Morse.png"
            alt="Vercel Logo"
            className={styles.bumpLogo}
            width={100}
            height={24}
            draggable={false}
            priority
          />
            </div>
            <div className={styles.gridItem}><h1 className={styles.title2}>Cache Cleaner</h1></div>
            <div className={styles.gridItem2}><h1 className={styles.title2}>Cache Cleaner</h1></div>
            <div className={styles.gridItem2}><h1 className={styles.title2}>Cache Cleaner</h1></div>

          </div>
          <h1 className={styles.title2}>Something</h1>
        </div>

    </div>{/*Main DIv*/}
    </main>
  )
}

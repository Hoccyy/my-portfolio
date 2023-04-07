import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div class="content-1">
          <div className={styles.textCont}><h1 className={styles.title}>Hocian Wade.</h1>
          
            <h1 className={styles.title2FS}>I am a Full-stack developer</h1>
            <div id='content-0'>
            </div>
          </div>

        </div>{/*Div1*/}


        <div className={styles.content3}>
          
          <div id='content-0'> <h3 className={styles.title2Sk}>Resume</h3> </div>
          <Image
          src="/assets/Resume.png"
          alt="Resume"
          className={styles.resume}
          width={690}
          height={1100}
          draggable={true}
          priority
          />
        </div>
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
              <div className={styles.gridItem}>
                <Image
                src="/assets/Morse2.svg"
                alt="Vercel Logo"
                className={styles.bumpLogo}
                width={100}
                height={24}
                draggable={false}
                priority
                />
                <a target="_blank" href='https://www.morseley.com/'>
                  <h1 className={styles.title2GI}>Morse Translator</h1>
                </a>
                <div className={styles.textCont}>
                  <h3 className={styles.description2}>A web application to translate English into Morse Code and vice versa</h3>
                </div>
            </div>
              <div className={styles.gridItem}>
                <Image
                src="/assets/CacheW.svg"
                alt="Vercel Logo"
                className={styles.bumpLogo}
                width={100}
                height={24}
                draggable={false}
                priority
                />
                <a target="_blank" href='https://github.com/Hoccyy/Cache-Whoosh'>
                  <h1 className={styles.title2GI}>Cache-Woosh</h1>
                </a>
                <div className={styles.textCont}>
                  <h3 className={styles.description2}>Cache cleaning app written in Python using PyQt and batch file manipulation</h3>
                </div>
            </div>

            <div className={styles.gridItem}>
              <Image
                src="/assets/wip.svg"
                alt="Vercel Logo"
                className={styles.bumpLogo}
                width={100}
                height={24}
                draggable={false}
                priority
              />
              <a target="_blank" href='https://github.com/Hoccyy/Arduino-Timer-Display'>
                <h1 className={styles.title2GI}>Arduino Timer</h1>
              </a>
              <div className={styles.textCont}>
                  <h3 className={styles.description2}>Project built for a class project to count from 1-9 and display A-F, using an Arduino module and C++</h3>
              </div>
            </div>

            <div className={styles.gridItem}>
              <Image
                src="/assets/wip.svg"
                alt="Vercel Logo"
                className={styles.bumpLogo}
                width={100}
                height={24}
                draggable={false}
                priority
              />
              <a target="_blank" href='https://chrome.google.com/webstore/detail/mirrorhound/iapfedepagfopcakfpejjjlkafmnpoeh'>
                 <h1 className={styles.title2GI}>MirrorHound</h1>
              </a>
                <div className={styles.textCont}>
                  <h3 className={styles.description2}>Chrome web extension to detect mirrored websites automatically and potentially prevent phishing scams and fraud</h3>
                </div>
            </div>
          </div>
          <div className={styles.banGrid}>
            <div className={styles.gridItem}>
              <Image
                src="/assets/wip.svg"
                alt="Vercel Logo"
                className={styles.bumpLogo}
                width={100}
                height={24}
                draggable={false}
                priority
              />
              <h1 className={styles.title2GI}>Water Tracker</h1>
              <div className={styles.textCont}>
                <h3 className={styles.description2}>Web app to track daily water intake written using Next.JS</h3>
              </div>
            </div>

            <div className={styles.gridItem}>
              <Image
                src="/assets/QuickClick.svg"
                alt="Vercel Logo"
                className={styles.bumpLogo}
                width={100}
                height={24}
                draggable={false}
                priority
              />
              <a target="_blank" href='https://github.com/Hoccyy/auto-clicker'>
                <h1 className={styles.title2GI}>QuickClick</h1>
              </a>
              <div className={styles.textCont}>
                  <h3 className={styles.description2}>A python app made to automate repetitive clicking automatically. This can be used for games, or to help with your workflow and productivity.</h3>
              </div>
            </div>

            <div className={styles.gridItem2}><h1 className={styles.title2}>Cache Cleaner</h1></div>
            <div className={styles.gridItem2}><h1 className={styles.title2}>Cache Cleaner</h1></div>

          </div>
          

          
          <div id='content-0'>
            <div className={styles.content4}>
              <h1 className={styles.title2Sk}>Education</h1>
              <div className={styles.banGridEdu}>{/*Skill set 1*/}
                  <div className={styles.gridEdu}>
                    {/*<h1 className={styles.title2Sk}>Python</h1>*/}
                    <Image
                    
                    src="/assets/York.svg"
                    alt="Python 3.0 Logo"
                    className={styles.skillLogo}
                    width={100}
                    height={24}
                    draggable={false}
                    priority
                    />
                    </div> {/**Close Logo */}
                  <div className={styles.gridEdu}>
                    {/*<h1 className={styles.title2Sk}>Python</h1>*/}
                    <Image
                    
                    src="/assets/AlgomaUniversity.svg"
                    alt="Python 3.0 Logo"
                    className={styles.skillLogo}
                    width={100}
                    height={24}
                    draggable={false}
                    priority
                    />
                    </div> {/**Close Logo */}
                  <div className={styles.gridEdu}>
                    {/*<h1 className={styles.title2Sk}>Python</h1>*/}
                    <Image
                    //src="/Python-logo.svg"
                    src="/assets/ThistletownCollegiateInstitute.svg"
                    alt="Python 3.0 Logo"
                    className={styles.skillLogo}
                    width={100}
                    height={24}
                    draggable={false}
                    priority
                    />
                    </div> {/**Close Logo */}
              </div>
            
            </div>

          </div>

        </div>


    </div>{/*Main DIv*/}
    </main>
  )
}
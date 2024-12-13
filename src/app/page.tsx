"use client";
import Link from 'next/link';
import styles from './page.module.css';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';

const AmazonDesc: string = 'Specialized in Cloud Development and Full-Stack Development, deigning a scalable cloud resource management feature enhancing CodeCatalyst and working on the AWS backend improving performance and metrics, enabling DevOps teams to test software more efficiently.';
const MsftDesc: string = '// TODO  📌';
const LinkedInProfile: string = 'https://www.linkedin.com/in/hoccyy/';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.primary}>
        <div className={styles.introSect}>
          <h1 id='intro' className={styles.introMessage}>
            Hi there. 👋
          </h1>

          <div className={styles.center}>
            <h2 className={styles.introBody}> I&apos;m&nbsp;
              <span className={styles.introName}>
                <Link className={styles.name} href={LinkedInProfile} target='_blank'>
                  Hocian&nbsp;Wade
                </Link>
              </span>
              &nbsp;and I am a Software Engineer and student. I&apos;m a Junior at
              &nbsp;
              <span className={styles.uniSpan}>
                York University
              </span>
              &nbsp;
              pursuing my bachelor&apos;s degree in Computer Science
              with a deep passion for Software Engineering! 💻 ⚙️
            </h2>
          </div>
        </div>

        <div id='skillsCont' className={styles.skillsCont}>
          <h1 className={styles.sectionHeader}> Skills </h1>

          <div className={styles.center}>
            <div className={styles.skillCenter}>
              <SkillItem skillName='Python' />
              <SkillItem skillName='Java' />
              <SkillItem skillName='CI/CD' />
              <SkillItem skillName='TypeScript' />
              <SkillItem skillName='JavaScript' />
              <SkillItem skillName='React' />
              <SkillItem skillName='NodeJS' />
              <SkillItem skillName='C#' />
              <SkillItem skillName='Azure DevOps' />
              <SkillItem skillName='NextJS' />
              <SkillItem skillName='Git' />
              <SkillItem skillName='Firebase' />
              <SkillItem skillName='Google Cloud Platform' />
              <SkillItem skillName='Source Control' />
              <SkillItem skillName='GCP' />
              <SkillItem skillName='C++' />
              <SkillItem skillName='Go' />
              <SkillItem skillName='JUnit' />
              <SkillItem skillName='XUnit' />
              <SkillItem skillName='TensorFlow' />
              <SkillItem skillName='HTML5' />
              <SkillItem skillName='CSS' />
              <SkillItem skillName='Machine Learning' />
              <SkillItem skillName='Scikit-learn' />
              <SkillItem skillName='UI/UX Design' />
              <SkillItem skillName='Shell Scripting' />
              <SkillItem skillName='LUA' />
              <SkillItem skillName='UI/UX Design' />
              <SkillItem skillName='Browser Extensions' />
              <SkillItem skillName='Cloud Development' />
              <SkillItem skillName='Web Development' />
              <SkillItem skillName='Cloud Services' />
              <SkillItem skillName='Scripting' />
              <SkillItem skillName='Unix' />
              <SkillItem skillName='Testing' />
              <SkillItem skillName='TensorFlow' />
              <SkillItem skillName='Cloud Computing' />
              <SkillItem skillName='AWS EC2' />
              <SkillItem skillName='PyTorch' />
              <SkillItem skillName='Object-Oriented Programming' />
              <SkillItem skillName='Linux' />
              <SkillItem skillName='NumPy' />
              <SkillItem skillName='Automation' />
              <SkillItem skillName='Tailwind CSS' />
              <SkillItem skillName='OpenCv' />
              <SkillItem skillName='Full Stack Development' />
              <SkillItem skillName='Back-end Development' />
              <SkillItem skillName='Front-end Development' />
              <SkillItem skillName='Document Writing' />
              <SkillItem skillName='React Native' />
              <SkillItem skillName='PyQt' />
              <SkillItem skillName='Mockups' />
            </div>
          </div>
        </div>

        <h1 className={styles.sectionHeader}> Experience </h1>
        <div className={styles.expSection}>
          <div className={styles.expCenter}>
            <ExperienceItem companyLink='https://www.microsoft.com/en-ca/about' jobTitle='Software Engineer, Intern &nbsp;🧑‍💻' companyName='Microsoft' companyLogoSrc='/Microsoft_logo.svg' technologies={['C#', 'JavaScript', 'TypeScript', "Azure DevOps", 'Linux', 'CSS', 'JUnit', 'XUnit']} duties={['Software Engineer', ]} jobDesc={MsftDesc} imageIncluded={true} roleLength='Incoming'/>
            <ExperienceItem companyLink='https://www.aboutamazon.com/what-we-do/amazon-web-services' jobTitle='Software Engineer, Intern &nbsp;🧑‍💻' companyName='Amazon Web Services' companyLogoSrc='/Amazon_icon.svg' technologies={['Java', 'AWS Cloudformation' , 'CodeCatalyst' , 'AWS' , 'JavaScript', 'Vite', 'AWS CDK' , 'Linux' , 'Unix' , 'TypeScript' , 'React', 'HTML5', 'CSS', 'JUnit', 'Vue' , 'Docker', 'DynamoDB', 'Json' ]} duties={['Software Engineer', 'Full-Stack Engineer' , 'Cloud Developer' ]} jobDesc={AmazonDesc} imageIncluded={true} roleLength='Jun 2023 - Sep 2023'/>
            
            <div className={styles.eduSect}>
              <h1 className={styles.sectionHeader}> Education </h1>
              <ExperienceItem companyLink='https://www.yorku.ca' jobTitle='Junior Year Student' companyName='York University' companyLogoSrc='/york2.png' technologies={['Java', 'JavaScript' , 'TypeScript' , 'React', 'C', 'Software Tools', 'Shell Scripting', 'Unix' , 'HTML', 'CSS', 'Junit', 'Linux', 'Calculus I', 'Calculus II', 'Object Oriented Programming', 'Discrete Math', 'Theory of Computation', 'Design & Analysis of Algorithms', 'Data Structures', 'RISC-V', 'Verilog' ]} duties={['Computer Science']} jobDesc='Coursework' imageIncluded={true} roleLength='Sep 2023 - Present'/>
              <ExperienceItem companyLink='https://www.algomau.ca' jobTitle='Student' companyName='Algoma University' technologies={['Java', 'JavaScript' , 'Linear Algebra' , 'Algorithms' , 'Data Structures' ]} duties={['Computer Science Hons. BA']} jobDesc='Coursework' imageIncluded={true} companyLogoSrc='/algoma.png' roleLength='Sep 2022 - Apr 2023'/>
              <ExperienceItem companyLink='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjS1_Hcp8eDAxWVDHkGHRs0AkUQFnoECCcQAQ&url=https%3A%2F%2Fwww.tdsb.on.ca%2FFind-your%2FSchools%2Fschno%2F2812&usg=AOvVaw07NvTm-vEIx8CwYm1oxCtG&opi=89978449' jobTitle='High School Graduate' companyName='Thistletown Collegiate Institute' technologies={['Python', 'C++' , 'Algorithms' , 'Data Structures' , 'Calculus' , 'OOP' , 'Embedded Software' , 'Arduino' , 'Computer Engineering' ]} duties={['Ontario Secondary School Diploma', 'ICT S.H.S.M Co-op']} jobDesc='Coursework' imageIncluded={true} companyLogoSrc='/tci.png' roleLength='Nov 2020 - Jun 2022'/>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

"use client";
import Link from 'next/link';
import styles from './page.module.css';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';

const AmazonDesc : string = 'Focused on Cloud Development and Full-stack development designing a highly scalable Cloud resource management feature and upgrading CodeCatalyst and parts of the AWS backend for optimized performance and metrics allowing Devops teams to test software more efficiently. I also developed my documentation and technical writing skills, and various software testing methods.';
const LinkedInProfile : string = 'https://www.linkedin.com/in/hoccyy/';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.primary}>
        <h1 id='intro' className={styles.introMessage}>
          Hi, I&apos;m Hocian. A Software Engineer. 🌿
        </h1>

        <div className={styles.center}>
          <h2 className={styles.introBody}> I&apos;m
            <span className={styles.introName}>
              <Link href={LinkedInProfile} target='_blank'>
                Hocian&nbsp;Wade
              </Link>
            </span>
            a Junior year Computer Science student at York University and a Software Engineer with a deep passion for the coding and Software development!
          </h2>
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
              <SkillItem skillName='Firebase' />
              <SkillItem skillName='Google Cloud Platform' />
              <SkillItem skillName='NextJS' />
              <SkillItem skillName='Git' />
              <SkillItem skillName='Source Control' />
              <SkillItem skillName='GCP' />
              <SkillItem skillName='C#' />
              <SkillItem skillName='C++' />
              <SkillItem skillName='Golang' />
              <SkillItem skillName='TensorFlow' />
              <SkillItem skillName='HTML5' />
              <SkillItem skillName='CSS' />
              <SkillItem skillName='Machine Learning' />
              <SkillItem skillName='Scikit-learn' />
              <SkillItem skillName='UI/UX Design' />
              <SkillItem skillName='Shell Scripting' />
              <SkillItem skillName='LUA' />
              <SkillItem skillName='UI/UX Design' />
              <SkillItem skillName='Cloud Development' />
              <SkillItem skillName='Web Development' />
              <SkillItem skillName='Cloud Services' />
              <SkillItem skillName='Scripting' />
              <SkillItem skillName='Unix' />
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
              <SkillItem skillName='Backend Development' />
              <SkillItem skillName='Frontend Development' />
              <SkillItem skillName='Document Writing' />
              <SkillItem skillName='React Native' />
              <SkillItem skillName='PyQt' />
              <SkillItem skillName='Mockups' />
              <SkillItem skillName='Testing' />
            </div>
          </div>
        </div>

        <h1 className={styles.sectionHeader}> Experience </h1>
        <div className={styles.expSection}>
          <div className={styles.expCenter}>
            <ExperienceItem companyLink='https://www.aboutamazon.com/what-we-do/amazon-web-services' jobTitle='Software Engineer, Intern' companyName='Amazon (AWS)' companyLogoSrc='/Amazon_icon.svg' technologies={['Java', 'AWS Cloudformation' , 'CodeCatalyst' , 'AWS' , 'JavaScript', 'Vite', 'AWS CDK' , 'Linux' , 'Unix' , 'TypeScript' , 'React' , 'CSS' , 'HTML5' , 'JUnit', 'Vue' , 'Docker', 'DynamoDB', 'Json' ]} duties={['Software Engineer', 'Full-Stack Engineer' , 'Cloud Developer' ]} jobDesc={AmazonDesc} imageIncluded={true} />
            <h1 className={styles.sectionHeader}> Education </h1>
            <ExperienceItem companyLink='https://www.yorku.ca' jobTitle='Sophomore Year Student' companyName='York University' companyLogoSrc='/york2.png' technologies={['Java', 'JavaScript' , 'TypeScript' , 'React', 'C', 'Software Tools', 'Shell Scripting', 'Unix' , 'CSS', 'Junit', 'Linux', 'HTML', 'Object Oriented Programming', 'Algorithms', 'Calculus I', 'Calculus II', 'Discrete Math', 'Theory of Computation', 'Data Structures' ]} duties={['Computer Science Hons. BA', '2023 - Present' ]} jobDesc='Coursework' imageIncluded={true} />
            <ExperienceItem companyLink='https://www.algomau.ca' jobTitle='Student' companyName='Algoma University' technologies={['Java', 'JavaScript' , 'Linear Algebra' , 'Algorithms' , 'Data Structures' ]} duties={['Computer Science Hons. BA', '2022 - 2023' ]} jobDesc='Coursework' imageIncluded={true} companyLogoSrc='/algoma.png'/>
            <ExperienceItem companyLink='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjS1_Hcp8eDAxWVDHkGHRs0AkUQFnoECCcQAQ&url=https%3A%2F%2Fwww.tdsb.on.ca%2FFind-your%2FSchools%2Fschno%2F2812&usg=AOvVaw07NvTm-vEIx8CwYm1oxCtG&opi=89978449' jobTitle='High School Graduate' companyName='Thistletown Collegiate Institute' technologies={['Python', 'C++' , 'Algorithms' , 'Data Structures' , 'Calculus' , 'OOP' , 'Embedded Software' , 'Arduino' , 'Computer Engineering' ]} duties={['IT OSSD S.H.S.M', '2020 - 2022' ]} jobDesc='Coursework' imageIncluded={true} companyLogoSrc='/tci.png' />
          </div>
        </div>

      </div>
    </main>
  )
}

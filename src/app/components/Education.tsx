import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const education = [
    {
      school: "York University",
      degree: "Bachelor of Science in Computer Science",
      period: "Sep 2023 — Present",
      location: "Toronto, ON",
      logo: "/york2.png",
      highlights: "Focusing on Systems Architecture, Operating Systems, and Advanced Algorithms.",
      skills: ["Java", "TypeScript", "React", "C", "Unix/Linux", "Data Structures"]
    },
    {
      school: "Algoma University",
      degree: "Bachelor of Arts (Hons) in Computer Science",
      period: "2022 — 2023",
      location: "Brampton, ON",
      logo: "/algoma.png",
      highlights: "Completed core foundations in Computational Theory and Mathematics.",
      skills: ["Java", "JavaScript", "Algorithms", "Linear Algebra"]
    },
    {
      school: "Thistletown Collegiate Institute",
      degree: "Ontario Secondary School Diploma",
      period: "2020 — 2022",
      location: "Toronto, ON",
      logo: "/tci.png",
      highlights: "Specialist High Skills Major (SHSM) in Information & Communications Technology.",
      skills: ["Python", "C++", "Embedded Systems", "Robotics"]
    }
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Education</h2>
      
      <div className={styles.list}>
        {education.map((edu, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.logoBox}>
                <img src={edu.logo} alt="" className={styles.logo} />
              </div>
              <div className={styles.titleArea}>
                <div className={styles.topRow}>
                  <h3 className={styles.school}>{edu.school}</h3>
                  <span className={styles.period}>{edu.period}</span>
                </div>
                <p className={styles.degree}>{edu.degree}</p>
              </div>
            </div>

            <div className={styles.body}>
              <p className={styles.highlights}>{edu.highlights}</p>
              
              <div className={styles.skillsWrapper}>
                <span className={styles.skillLabel}>Key Competencies:</span>
                <div className={styles.skillCloud}>
                  {edu.skills.map(skill => (
                    <span key={skill} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
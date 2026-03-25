import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Education</h2>
      
      <div className={styles.bentoGrid}>
        {/* Main Card: York University */}
        <div className={`${styles.card} ${styles.mainCard}`}>
          <div className={styles.cardHeader}>
            <img src="/york2.png" alt="" className={styles.logo} />
            <div>
              <h3 className={styles.schoolName}>York University</h3>
              <p className={styles.degree}>Computer Science</p>
            </div>
          </div>
          <p className={styles.description}>
            Junior Year. Mastering systems, theory, and high-level architecture.
          </p>
          <div className={styles.tagCloud}>
            {["Java", "TypeScript", "C", "RISC-V", "Verilog", "Algorithms", "OS"].map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <span className={styles.badge}>2023 — Present</span>
        </div>

        {/* Side Card: Algoma */}
        <div className={`${styles.card} ${styles.sideCard}`}>
          <h3 className={styles.schoolName}>Algoma University</h3>
          <p className={styles.degreeSmall}>CS Hons. BA</p>
          <div className={styles.tagCloudMini}>
            {["Linear Algebra", "Data Structures", "Java"].map(t => (
              <span key={t} className={styles.tagMini}>{t}</span>
            ))}
          </div>
          <span className={styles.periodText}>'22 — '23</span>
        </div>

        {/* Bottom Card: High School / Specialization */}
        <div className={`${styles.card} ${styles.footerCard}`}>
          <div className={styles.footerFlex}>
            <div>
              <h3 className={styles.schoolNameSmall}>Thistletown Collegiate</h3>
              <p className={styles.shsm}>ICT S.H.S.M Co-op Specialist</p>
            </div>
            <div className={styles.tagCloudMini}>
              {["C++", "Python", "Arduino", "Embedded"].map(t => (
                <span key={t} className={styles.tagMini}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
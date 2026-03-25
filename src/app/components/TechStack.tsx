import React from 'react';
import styles from './TechStack.module.css';

// Using simple placeholder URLs for icons - replace with your local SVGs/assets
const TechPill = ({ name, icon }: { name: string; icon?: string }) => (
  <div className={styles.pill}>
    {icon && <img src={icon} alt="" className={styles.icon} />}
    <span>{name}</span>
  </div>
);

const StackRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className={styles.row}>
    <div className={styles.label}>{label}</div>
    <div className={styles.pillContainer}>{children}</div>
  </div>
);

export default function TechStack() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>Tech Stack</h2>
        <p className={styles.subtitle}>Tools and technologies I use to build projects.</p>
      </header>

      <div className={styles.stackBody}>
        <StackRow label="FRONTEND">
          <TechPill name="Vue.js" />
          <TechPill name="React" />
          <TechPill name="Next.js" />
          <TechPill name="TypeScript" />
          <TechPill name="HTML5" />
          <TechPill name="CSS" />
        </StackRow>

        <StackRow label="BACKEND">
          <TechPill name="TypeScript" />
          <TechPill name="Python" />
          <TechPill name="C++" />
          <TechPill name="REXX" />
          <TechPill name="JCL" />
          <TechPill name="Java" />
          <TechPill name="Golang" />
          <TechPill name="Node.js" />
        </StackRow>

        <StackRow label="MOBILE">
          <TechPill name="React Native" />
          <TechPill name="Flutter" />
        </StackRow>

        <StackRow label="DATABASE">
          <TechPill name="PostgreSQL" />
        </StackRow>

        <StackRow label="DEVOPS">
          <TechPill name="Git" />
          <TechPill name="Linux" />
          <TechPill name="GitHub" />
          <TechPill name="Bash" />
          <TechPill name="AWS" />
          <TechPill name="GCP" />
          <TechPill name="Firebase" />
        </StackRow>
        <StackRow label="TESTING">
          <TechPill name="JUnit" />
          <TechPill name="Jest" />
          <TechPill name="Mocha" />
        </StackRow>
      </div>
    </section>
  );
}
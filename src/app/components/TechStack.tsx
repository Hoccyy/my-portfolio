import React from 'react';
import styles from './TechStack.module.css';

// This helper converts the name to a Simple Icons slug (e.g., "Next.js" -> "nextdotjs")
const getIconUrl = (name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/\.js/g, 'dotjs')
    .replace(/\+/g, 'plus')
    .replace(/\s/g, '');
  return `https://cdn.simpleicons.org/${slug}`;
};

const TechPill = ({ name }: { name: string }) => (
  <div className={styles.pill}>
    <img 
      src={getIconUrl(name)} 
      alt="" 
      className={styles.icon}
      /* Fallback if icon doesn't exist in the CDN */
      onError={(e) => (e.currentTarget.style.display = 'none')} 
    />
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
        <p className={styles.subtitle}>Tools and technologies I use to build my projects.</p>
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
          <TechPill name="JavaScript" />
          <TechPill name="Python" />
          <TechPill name="C++" />
          <TechPill name="REXX" />
          <TechPill name="JCl" />
          <TechPill name="Java" />
          <TechPill name="Go" />
          <TechPill name="Dart" />
          <TechPill name="Node.js" />
        </StackRow>

        <StackRow label="MOBILE">
          <TechPill name="React" />
          <TechPill name="Flutter" />
        </StackRow>

        <StackRow label="DATABASE">
          <TechPill name="PostgreSQL" />
          <TechPill name="NoSQL" />
        </StackRow>

        <StackRow label="DEVOPS">
          <TechPill name="Git" />
          <TechPill name="Linux" />
          <TechPill name="AWS" />
          <TechPill name="Azure" />
          <TechPill name="GoogleCloud" />
          <TechPill name="Firebase" />
        </StackRow>

        <StackRow label="TESTING">
          <TechPill name="JUnit5" />
          <TechPill name="Jest" />
          <TechPill name="Mocha" />
          <TechPill name="RTL" />
        </StackRow>
      </div>
    </section>
  );
}
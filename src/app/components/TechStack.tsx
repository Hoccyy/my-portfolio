import styles from './TechStack.module.css';
import TechPill from '@/app/components/TechPill';

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
          <TechPill name="React" />
          <TechPill name="Next.js" />
          <TechPill name="TypeScript" />
          <TechPill name="Vue.js" />
          <TechPill name="HTML5" />
          <TechPill name="CSS" />
        </StackRow>

        <StackRow label="BACKEND">
          <TechPill name="JavaScript" />
          <TechPill name="Python" />
          <TechPill name="C++" />
          <TechPill name="REXX" />
          <TechPill name="JCL" />
          <TechPill name="Java" />
          <TechPill name="Go" />
          <TechPill name="Rust" />
          <TechPill name="Dart" />
          <TechPill name="Node.js" />
          <TechPill name="Postman" />
          <TechPill name="Relay" />
          <TechPill name="GraphQL" />
        </StackRow>

        <StackRow label="MOBILE">
          <TechPill name="React" />
          <TechPill name="Flutter" />
          <TechPill name="Swift" />
          <TechPill name="React Native" />
        </StackRow>

        <StackRow label="DATABASE">
          <TechPill name="PostgreSQL" />
          <TechPill name="MySQL" />
          <TechPill name="DBeaver" />
          <TechPill name="NoSQL" />
        </StackRow>

        <StackRow label="DEVOPS">
          <TechPill name="Git" />
          <TechPill name="Linux" />
          <TechPill name="Google Cloud" />
          <TechPill name="Firebase" />
          <TechPill name="AWS" />
          <TechPill name="Azure" />
        </StackRow>

        <StackRow label="TESTING">
          <TechPill name="Jest" />
          <TechPill name="Mocha" />
          <TechPill name="JUnit5" />
          <TechPill name="RTL" />
        </StackRow>
      </div>
    </section>
  );
}
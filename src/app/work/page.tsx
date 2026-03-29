import styles from '../page.module.css';
import ProjectCard from '../components/ProjectCard';

const myProjects = [
  {
    title: "Makku.co",
    description: "A minimalist AI platform empowering authors and screenwriters. Trusted by 1,000+ users and growing.",
    technologies: ["TypeScript", "Next.js", "Firebase", "GCP", "Node.js", "NoSQL", "AI"],
    link: "https://makku.co",
    logoSrc: "/makku1.png"
  },
  {
    title: "Calvor",
    description: "A fitness and health platform to calculate daily energy expenditure, water intake, and protein needs.",
    technologies: ["TypeScript", "Next.js", "React", "Node.js"],
    link: "https://www.calvor.co",
    logoSrc: "https://www.calvor.co/favicon.ico"
  },
  {
    title: "ChefGPT 0.2",
    description: "AI-driven recipe generator that helps you decide on meals based on ingredients you have on hand.",
    technologies: ["Next.js", "TypeScript", "React", "GPT-4o", "AI", "Vercel"],
    link: "https://github.com/Hoccyy/ChefGPT",
    logoSrc: "/chef.png"
  },
  {
    title: "AccrueMind",
    description: "A simple compound interest calculator designed to simplify the process of calculating future investment growth.",
    technologies: ["Next.js", "React", "Chart.js", "Node.js"],
    link: "https://accrue-mind.vercel.app",
    logoSrc: "/accrueMind.ico"
  },
  {
    title: "WordGuard",
    description: "A browser extension built to block profanity on websites for a cleaner web experience.",
    technologies: ["JavaScript", "HTML", "JSON"],
    link: "https://chromewebstore.google.com/detail/wordguard/deleckgdblobccidlaabcnkmabeafmdf",
    logoSrc: "/wordguard.png"
  },
  {
    title: "Morseley.com",
    description: "Real-time Morse code translator with features to download and copy translations instantly.",
    technologies: ["React", "TypeScript", "Next.js", "Node.js"],
    link: "https://www.morseley.com/",
    logoSrc: "/morseley.ico"
  },
  {
    title: "Morseley Codec",
    description: "Lightweight npm package to easily encode and decode Morse code, adapted for portability.",
    technologies: ["JavaScript", "npm", "Node.js"],
    link: "https://www.npmjs.com/package/morseley"
  },
  {
    title: "MirrorHound",
    description: "Chrome extension used to detect mirrored websites and prevent potential phishing attacks.",
    technologies: ["JavaScript", "HTML"],
    link: "https://chrome.google.com/webstore/detail/mirrorhound/iapfedepagfopcakfpejjjlkafmnpoeh",
    logoSrc: "/icon128.png"
  },
  {
    title: "EmotionDetector",
    description: "Computer vision project that classifies facial expressions and outputs detected emotions using a trained model.",
    technologies: ["Python", "Tensorflow", "OpenCV", "Keras"],
    link: "https://github.com/Hoccyy/Emotion-Detector"
  },
  {
    title: "WebGrabb",
    description: "A Go-based utility for rapid web data extraction and information gathering via CLI.",
    technologies: ["Go", "Shell"],
    link: "https://github.com/Hoccyy/WebGrabb"
  },
  {
    title: "Finance Tracker",
    description: "Full-stack tracking app to monitor monthly cashflow and visualize financial goals.",
    technologies: ["TypeScript", "Next.js", "React", "Node.js", "CSS"],
    link: "https://github.com/Hoccyy/expense-tracker"
  },
  {
    title: "York Schedule Builder Fixer",
    description: "York Schedule Builder Fixer is a Chrome extension that improves York University’s Schedule Builder UX.",
    technologies: ["JavaScript", "HTML", "Json"],
    link: "https://chromewebst2ore.google.com/detail/york-sched-builder-fixer/mdphcplfohfllimndkmkbigbcddgfoec",
    logoSrc: 'https://lh3.googleusercontent.com/rIVl-71ba5sB0eW7lBop9Z5mA4i0q0pnE04CUcsJuShR_9SOtGxEuqHnTvYNyKGhkunNpnE7NCqH2gUFDjsorigY=s60'
  }
];

export default function Work() {
  return (
    <main className={styles.mainProjects}>
      <h1 className={styles.mainHeader}>Latest Projects</h1>
      <ProjectCard projects={myProjects} />
    </main>
  );
}
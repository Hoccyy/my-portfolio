import styles from './Interests.module.css';

interface Interest {
  name: string;
  description: string;
  icon: string;
}

const interests: Interest[] = [
  { name: "Writing", description: "Narratives & clean docs.", icon: "✍️" },
  { name: "Photography", description: "Visual storytelling.", icon: "📷" },
  { name: "Working Out", icon: "💪", description: "Physical discipline." },
  { name: "Crocheting", icon: "🧶", description: "Focus, patterns, and creativity." },
  { name: "Gaming", icon: "🎮", description: "World exploration." },
  { name: "Music", icon: "🎵", description: "Deep work soundtracks." },
];

const Interests = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Interests</h2>
      <div className={styles.grid}>
        {interests.map((item) => (
          <div key={item.name} className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <div className={styles.content}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.footer}>
        <p>
          <span className={styles.highlight}>Movie Buff:</span> Appreciates cinematography and independent films.
        </p>
      </div>
    </section>
  );
};

export default Interests;
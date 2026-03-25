import React from 'react';
import styles from './Interests.module.css';

interface Interest {
  name: string;
  description: string;
  icon: string;
}

const interests: Interest[] = [
  { name: "Writing", description: "Crafting narratives and technical documentation.", icon: "✍️" },
  { name: "Photography", description: "Capturing moments through a digital lens.", icon: "📷" },
  { name: "Working Out", description: "Staying active and pushing physical limits.", icon: "💪" },
  { name: "Crocheting", description: "Creating tangible art, one stitch at a time.", icon: "🧶" },
  { name: "Gaming", description: "Exploring immersive worlds and mechanics.", icon: "🎮" },
  { name: "Music", description: "Curating soundtracks for deep work and life.", icon: "🎵" },
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
          <span className={styles.highlight}>Fun Fact:</span> I’m a huge <strong>movie buff</strong>—always down to discuss cinematography or the latest indie gem.
        </p>
      </div>
    </section>
  );
};

export default Interests;
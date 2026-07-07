import { LucideIcon, PenSquare, Camera, Dumbbell, Scissors, Gamepad2, Music4 } from 'lucide-react';
import styles from './Interests.module.css';

interface Interest {
  name: string;
  description: string;
  icon: LucideIcon;
}

const interests: Interest[] = [
  { name: "Writing", description: "Narratives & clean docs.", icon: PenSquare },
  { name: "Photography", description: "Visual storytelling.", icon: Camera },
  { name: "Working Out", description: "Physical discipline.", icon: Dumbbell },
  { name: "Crocheting", description: "Focus, patterns, and creativity.", icon: Scissors },
  { name: "Gaming", description: "World exploration.", icon: Gamepad2 },
  { name: "Music", description: "Deep work soundtracks.", icon: Music4 },
];

const Interests = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Interests</h2>
      <div className={styles.grid}>
        {interests.map((item) => {
          const IconComponent = item.icon;
          
          return (
            <div key={item.name} className={styles.card}>
              <span className={styles.icon}>
                <IconComponent size={24} strokeWidth={1.75} />
              </span>
              <div className={styles.content}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <p>
          <span className={styles.highlight}>Movie Buff:</span> Someone who appreciates cinematography and independent films. (that's me)
        </p>
      </div>
    </section>
  );
};

export default Interests;
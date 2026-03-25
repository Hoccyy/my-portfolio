import React from 'react';
import styles from './ProjectCard.module.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  logoSrc?: string;
}

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.header}>
            {project.logoSrc ? (
              <img 
                src={project.logoSrc} 
                alt={`${project.title} logo`} 
                className={styles.logo} 
              />
            ) : (
              <div className={styles.logoPlaceholder}>
                {project.title.charAt(0)}
              </div>
            )}
            <h3 className={styles.title}>{project.title}</h3>
          </div>
          
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.techStack}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
          
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Project <span>→</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
"use client"
import React from 'react'
import styles from './ProjectItem.module.css'
import Link from 'next/link';
import Image from 'next/image';
import SkillItem from './SkillItem';
import SkillItem2 from './SkillItem2';
import SkillItem3 from './SkillItem3';
import SkillItemMobile from './SkillItemMobile';


const ProjectItem = ({
    projectTitle = 'Project-Title',
    projDesc = 'Project Description',
    repoLink ='',
    imageSrc = '',
    imageIncluded = false,
    technologies = [''],
}) => {

    return (
      <div className={styles.primaryCardBackground}>
        <div>
          <Link href={repoLink} target='_blank'>
          <Image
            src={imageSrc}
            width={90}
            height={90}
            alt='Project Imagery'
            className={ imageIncluded ? styles.projectImage : styles.defaultImg }
            draggable={false}
          />
          </Link>
        </div>

          <div className={styles.secondaryPanel}>
          <Link href={repoLink} target='_blank'>
            <h1 className={styles.projectTitle}>{projectTitle} ↗ </h1>
            <Link href={repoLink} target='_blank'>
            <Image
              src={imageSrc}
              width={90}
              height={90}
              alt='Project Imagery'
              className={imageIncluded ?styles.mobileImage : styles.defaultImgMob}
              draggable={false}
            />
            </Link>
            <h4 className={styles.projDesc}>{projDesc}</h4>

            <div className={styles.skillHolder}>
              {technologies.map((technologies, index) => (
                <SkillItem3 skillName={technologies}/>
              ))}
            </div>
            <div className={styles.skillHolderMobile}>
              {technologies.map((technologies, index) => (
                <SkillItem3 skillName={technologies}/>
              ))}
            </div>

        </Link>
          </div>
      </div>
    );
};

export default ProjectItem;
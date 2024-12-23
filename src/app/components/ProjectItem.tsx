"use client"
import React, { useState } from 'react'
import styles from './ProjectItem.module.css'
import Link from 'next/link';
import Image from 'next/image';
import SkillItem3 from './SkillItem3';


const ProjectItem = ({
    projectTitle = 'Project-Title',
    projDesc = 'Project Description',
    repoLink ='',
    imageSrc = '',
    imageIncluded = false,
    technologies = [''],
}) => {

    const [imgSrc, setImgSrc] = useState(imageSrc);

    return (
      <div className={styles.primaryCardBackground}>
        <div className={styles.cardCenter}>
        <div>
          <Link href={repoLink} target='_blank'>
          {imageIncluded?
          
          <Image
            src={imgSrc}
            width={90}
            height={90}
            alt='Project Imagery'
            className={ imageIncluded ? styles.projectImage : styles.defaultImg }
            draggable={false}
            onError={() => {
              setImgSrc('/default.png');
            }}
          />
          : null
          }
          </Link>
        </div>

          <div className={styles.secondaryPanel}>
          <Link href={repoLink} target='_blank'>
            <h1 className={styles.projectTitle}>{projectTitle} ↗ </h1>
            <Link href={repoLink} target='_blank'>
            {imageIncluded?
            
            <Image
              src={imgSrc}
              width={90}
              height={90}
              alt='Project Imagery'
              className={imageIncluded ?styles.mobileImage : styles.defaultImgMob}
              draggable={false}
              onError={() => {
                setImgSrc('/default.png');
              }}
            />
          : <Image
          src={imgSrc}
          width={90}
          height={90}
          alt='Project Imagery'
          className={imageIncluded ?styles.mobileImage : styles.defaultImgMob}
          draggable={false}
          onError={() => {
            setImgSrc('/default.png');
          }}
        />}
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
      </div>
    );
};

export default ProjectItem;
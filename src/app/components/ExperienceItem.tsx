"use client"
import React from 'react'
import styles from './ExperienceItem.module.css'
import Link from 'next/link';
import Image from 'next/image';
import SkillItem3 from './SkillItem3';
import DutyItem from './DutyItem';

const ExperienceItem = ({
    jobDesc = 'JobDesc',
    companyName = 'Company',
    jobTitle = 'Position',
    companyLogoSrc = '/defaultCompany.png',
    roleLength = '',
    imageIncluded= false,
    companyLink='',
    technologies=[''],
    duties=['']
}) => {

  return (
    <div className={styles.primaryCardBackground}>
      <div className={styles.expValign}>
        <Image
          src={companyLogoSrc}
          width={900}
          height={900}
          alt='Project Imagery'
          className={ imageIncluded ? styles.projectImage : styles.defaultImg }
          draggable={false}
          loading='eager'
          priority
        />
      </div>

      <div className={styles.secondaryPanel}>
      <Link href={companyLink} target='_blank'>
        <h1 className={styles.companyName}>
          {companyName}
        </h1>
      </Link>
      
        <Image
          src={companyLogoSrc}
          width={900}
          height={900}
          alt='Project Imagery'
          className={imageIncluded ? styles.mobileImage : styles.defaultImgMob}
          draggable={false}
        />

        <div className={styles.roleAndDate}>
          <h4 className={styles.jobTitle}>{jobTitle} </h4>
          <h4 className={styles.roleLength}>{roleLength} </h4>
        </div>

        <h4 className={styles.jobDesc}>{jobDesc}</h4>

        <div className={styles.skillHolder}>
          {technologies.map((technologies, index) => (
            <SkillItem3 skillName={technologies}/>
          ))}
        </div>
        <div className={styles.skillHolder}>
          {duties.map((duties, index) => (
            <DutyItem DutyRole={duties}/>
          ))}
        </div>

        <div className={styles.skillHolderMobile}>
          {technologies.map((technologies, index) => (
            <SkillItem3 skillName={technologies}/>
          ))}
        </div>
        <div className={styles.skillHolderMobile}>
          {duties.map((duties, index) => (
            <DutyItem DutyRole={duties}/>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ExperienceItem;
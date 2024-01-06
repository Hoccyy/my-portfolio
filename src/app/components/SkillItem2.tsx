"use client"
import React from 'react'
import styles from './SkillItem2.module.css'

const SkillItem2 = ({
  skillName = '',
}) => {
    return (
        <h4 className={styles.skillName}>
          {skillName}
        </h4>
    );
};

export default SkillItem2;
"use client"
import React from 'react'
import styles from './SkillItem3.module.css'

const SkillItem3 = ({
  skillName = '',
}) => {
    return (
        <h4 className={styles.skillName}>
          {skillName}
        </h4>
    );
};

export default SkillItem3;
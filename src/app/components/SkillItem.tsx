"use client"
import React from 'react'
import styles from './SkillItem.module.css'

type Props = {
    placeHolder?: string
};

const SkillItem = ({
  skillName = '',
}) => {
    return (
        <h4 className={styles.skillName} title={skillName}>
          {skillName}
        </h4>
    );
};

export default SkillItem;
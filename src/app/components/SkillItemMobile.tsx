"use client"
import React from 'react'
import styles from './SkillItem.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


type Props = {
    placeHolder?: string
};

const buttonContent = '⬆';
let selected = false;

const SkillItem = ({
  skillName = '',
}) => {
    return (
        <h4 className={styles.skillName}>
          {skillName}
        </h4>
    );
};

export default SkillItem;
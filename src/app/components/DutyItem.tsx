"use client"
import React from 'react'
import styles from './DutyItem.module.css'
import Link from 'next/link';

const DutyItem = ({
  DutyRole = '',
  hasSrc=false,
  dutysrc= ''
}) => {
    if (hasSrc) {
      return (
        <h4 className={styles.dutyRole}>
          <Link href={dutysrc}>
            {DutyRole}
          </Link>
        </h4>
      );
    } else {
      return (
        <h4 className={styles.dutyRole}>
          {DutyRole}
        </h4>
      );
    }
};

export default DutyItem;
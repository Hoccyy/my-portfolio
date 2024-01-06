"use client"
import React from 'react'
import styles from './SocialMediaItem.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const SocialMediaItem = ({
  imageSource='default.png',
  platform='',
  src='github.com/hoccyy',
  newtab=true
}) => {

    return (
        <div id='menu' className={styles.primary}>
          <a href={src} target={newtab? '_blank' : '_self'}>
          <Image
            src={imageSource}
            width={50}
            height={50}
            alt='Social Media Icon'
            />
          <h3 id='navButtons' className={styles.socialText}>
            {platform}
          </h3>
        </a>
        </div>
    );
};

export default SocialMediaItem;
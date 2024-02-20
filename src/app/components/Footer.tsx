"use client"
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';


const LinkedInProfile : string = 'https://www.linkedin.com/in/hoccyy/';
const GitHubProfile : string = 'https://github.com/hoccyy';
const TwitterProfile : string = 'https://twitter.com/Hoccyy_';
const InstagramProfile : string = 'https://www.instagram.com/hoccyy_/';
const leetcodeProfile : string = 'http://leetcode.com/Hoccyy/';

const Footer = ({
    title = '',
    path = '',
    active = false
}) => {

    return (
        <main>
          <div className={styles.centerFtr}>
            <div className={styles.footerContainer}>
              <h1>
                © 2024&nbsp;&nbsp;<Link href={LinkedInProfile} className={styles.footerHighlight} target='_blank'>&nbsp;@Hoccyy¹³</Link>
                &nbsp;&nbsp;• &nbsp;&nbsp;Toronto, ON
              </h1>
              
            </div>
            <div className={styles.footerCenter}>
              <SocialIcon id={styles.footerIcon} url={LinkedInProfile} target='_blank'/>
              <SocialIcon id={styles.footerIcon} url={GitHubProfile} target='_blank'/>
              <SocialIcon id={styles.footerIcon} url={leetcodeProfile} target='_blank'/>
              <SocialIcon id={styles.footerIcon} url={InstagramProfile} target='_blank'/>
              <SocialIcon id={styles.footerIcon} url={TwitterProfile} target='_blank'/>
            </div>
        </div>
        </main>
        
    );
};

export default Footer;
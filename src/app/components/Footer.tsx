"use client"
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
//import ProgressBar from "react-scroll-progress-bar";

const ProgressBar = require('react-scroll-progress-bar');


const LinkedInProfile : string = 'https://www.linkedin.com/in/hoccyy/';
const GitHubProfile : string = 'https://github.com/hoccyy';
const TwitterProfile : string = 'https://twitter.com/Hoccyy_';

const Footer = ({
    title = '',
    path = '',
    active = false
}) => {

    return (
        <main>
          <ProgressBar bgcolor="rgb(67, 140, 129)" height="2.5px" className={styles.scrollProgress}/>
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
              <SocialIcon id={styles.footerIcon} url={TwitterProfile} target='_blank'/>
            </div>
        </div>
        </main>
        
    );
};

export default Footer;
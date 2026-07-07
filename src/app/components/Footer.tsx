'use client';
import Link from 'next/link';
import styles from '../page.module.css'
import { GITHUB_URL, LEETCODE_PROFILE, LINKEDIN_URL, TWITTER_PROFILE } from './constants';
import { SocialIcon } from 'react-social-icons';


const year : number = new Date().getFullYear();

const Footer = ({
}) => {

    return (
        <main>
          <div className={styles.centerFtr}>
            <div className={styles.footerContainer}>
              <h2 className={styles.footerText}>
                © {year}&nbsp;&nbsp;
                <Link href={LINKEDIN_URL} className={styles.footerHighlight} target='_blank'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@Hoccyy</Link>
                &nbsp;&nbsp;• &nbsp;&nbsp;Toronto, CA
              </h2>
              
            </div>
            
            <div className={styles.footerCenter}>
              <SocialIcon id={styles.footerIcon} url={LINKEDIN_URL} target='_blank'/>
              <SocialIcon id={styles.footerIcon} url={GITHUB_URL} target='_blank'/>
              <SocialIcon id={styles.footerIcon} url={LEETCODE_PROFILE} target='_blank'/>
              <SocialIcon id={styles.footerIcon} url={TWITTER_PROFILE} target='_blank'/>
            </div>
        </div>
        </main>
        
    );
};

export default Footer;
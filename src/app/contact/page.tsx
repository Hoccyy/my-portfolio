'use client'
import styles from '../page.module.css';
import SocialMediaItem from '../components/SocialMediaItem';
import Link from 'next/link';
import { useState } from 'react';
import { FetchAPIKey } from '../components/FetchKey';

const resumeUrl = 'https://drive.google.com/file/d/1O4cXXNgMqks6eakNn5fM6MG8O5aYEvWb/view?usp=sharing';


export default function Contact() {
  const [result, setResult] = useState("");
  const FormsKey : string = FetchAPIKey() as string;
  
  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  
    formData.append("access_key", FormsKey);
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <main className={styles.mainContact}>
      <h1 className={styles.socialTextHeader}>Get in touch</h1>
      <div className={styles.resources}>
        <div className={styles.emailContainer}>
          
          <form onSubmit={onSubmit} className={styles.formContainer}>
            <div className={styles.formItemContainer}>
              <label>Name</label>
              <input className={styles.formInput} type="text" name="name" required placeholder='Your name'/>
            </div>

            <div className={styles.formItemContainer}>
              <label>Email</label>
              <input className={styles.formInput} type="email" name="email" required placeholder='John@mail.com'/>
            </div>

            <div className={styles.formItemContainer}>
              <label>Message</label>
              <textarea className={styles.formTextArea} name="message" required placeholder='Enter a message here'></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Submit Form</button>

          </form>
          <span>{result}</span>

          <a href='mailto:hocianw@gmail.com'>
          <SocialMediaItem imageSource='/gmail.png' platform='' src='mailto:hocianw@gmail.com' newtab={false}/>
          </a>
        </div>
      </div>

      <div className={styles.resources}>
        <div className={styles.generalContainer}>
          <Link href='https://www.linkedin.com/in/hoccyy/' target='_blank'>
            <SocialMediaItem imageSource='/linkedin.png' platform='LinkedIn' src='https://www.linkedin.com/in/hoccyy/'/>
          </Link>
        </div>
        <div className={styles.generalContainer}>
          <SocialMediaItem imageSource='/github.png' platform='GitHub' src='https://github.com/Hoccyy'/>
        </div>
        <div className={styles.generalContainer}>
          <SocialMediaItem imageSource='/twitter.png' platform='Twitter' src='https://twitter.com/Hoccyy_'/>
        </div>

        <div className={styles.resumeContainer}>
          <h1 className={styles.resumeContainerHeader}>Resume</h1>
          <h3 className={styles.resumeContainerBody}>
            <a href={resumeUrl} target='_blank' title='Online read-only copy'>
              <span className={styles.resumeText}>Online Version</span>
            </a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href='1Hocian_Wade - Resume.pdf' target='_blank' download>
              <span className={styles.resumeText}>Download</span> &nbsp;&nbsp;📥
            </a>
          </h3>
        </div>
      </div>
    </main>
  )
}

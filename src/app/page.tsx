'use client';
import Image from 'next/image'
import deleteSlide from './deleteSlide'

const resumeUrl = 'https://drive.google.com/file/d/1O4cXXNgMqks6eakNn5fM6MG8O5aYEvWb/view?usp=sharing';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-2'>
      <nav id='menu' className='menu'>
        <li id='menuItems'>
          <h3 id='glow-item'> <a href='https://github.com/Hoccyy' target='_blank' title='Some of my work'>💼 GitHub</a> </h3>
        </li>
        <li id='menuItems'>
          <h3 id='glow-item'> <a href='https://ca.linkedin.com/in/hoccyy' target='_blank' title='Some of my work'>LinkedIn</a> </h3>
        </li>
        <li id='menuItems'>
          <h3 id='glow-item'> <a href='https://twitter.com/hoccyy_' target='_blank' title='Keep up with me'>Twitter</a></h3>
        </li>
      </nav>
      <h1 id='dynamic-tip-bar'>Swipe {'>'}{'>'}{'>'}</h1>

      <div id='container'>
        <div id='main-div' className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col' dir="ltr">
          <div id='carousel-slide1' className='min-h-10'>
            <h1 className='text-7xl'>Hocian Wade</h1>
            <h2 id='secondary-h2' className='text-4xl m-6'>Software Engineer ⚙️</h2>
            <h2 id='secondary-h2' className='text-4xl m-6'>&</h2>
            <h2 id='secondary-h2-academia' className='text-4xl m-6'>Computer Science Student</h2>
            
          </div>

          <div id='carousel-slide' className='edu'
           onMouseOver={() => {
            var x = document.getElementsByClassName('edu');
            x[0].setAttribute('style', 'animation: fadeIn 0.13s ease-in 0s; opacity: 1;');
          }}>
            <h1 className='text-7xl'>Education 📚</h1>
            <h2 id='listed-items' className='text-4xl m-6'>York University -: Computer Science (B.A Hons.) <br/> 2023-2026</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Algoma University -: Computer Science (B.A Hons.) <br/> 2022-2023</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Thistletown&nbsp;Collegiate&nbsp;Institute&nbsp;<br/>-:&nbsp;OSSD&nbsp;(S.H.S.M&nbsp;Seal)<br/>2020-2022</h2>
          </div>

          <div id='carousel-slide' className='exp'
           onMouseOver={() => {
            var x = document.getElementsByClassName('exp');
            x[0].setAttribute('style', 'animation: fadeIn 0.13s ease-in 0s; opacity: 1;');
          }}>
            <h1 className='text-7xl'>Experience</h1>
            <div>
              <h2 className='text-4xl m-6'>Amazon, SDE I (L4)</h2>
              <Image
                src="Amazon_icon.svg"
                alt="Resume"
                className='amazon-logo'
                width={50}
                height={50}
                draggable={true}
                priority
                title='AWS Team'
              />
            </div>
          </div>

          <div id='carousel-slide' className='skills'
           onMouseOver={() => {
            var x = document.getElementsByClassName('skills');
            x[0].setAttribute('style', 'animation: fadeIn 0.13s ease-in 0s; opacity: 1;');
          }}>
            <h1 className='text-7xl'>My Skills 🛠️</h1>
            <h2 id='listed-items' className='text-4xl m-6'>Software Development</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Web Development</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Machine Learning 🤖</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Scripting 🚀</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Automation and Artificial Intelligence</h2>
          </div>

          <div id='carousel-slide' className='tools'
           onMouseOver={() => {
            var x = document.getElementsByClassName('tools');
            x[0].setAttribute('style', 'animation: fadeIn 0.13s ease-in 0s; opacity: 1;');
          }}>
            <h1 className='text-7xl'>Toolset</h1>
            <h2 id='listed-items' className='text-4xl m-6'>Java | TypeScript/JavaScript | Python</h2>
            <h2 id='listed-items' className='text-4xl m-6'>AutoGluon | C++ | C# | Json | Pandas</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Next.js/React | CI/CD | Tailwind CSS</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Cloud Infrastructure | AWS | UI/UX Design</h2>
          </div>

          <div id='carousel-slide' className='tools2'
           onMouseOver={() => {
            var x = document.getElementsByClassName('tools2');
            x[0].setAttribute('style', 'animation: fadeIn 0.13s ease-in 0s; opacity: 1;');
          }}>
            <h2 id='listed-items' className='text-4xl m-6'>LUA | Node JS | JSX | Amazon S3</h2>
            <h2 id='listed-items' className='text-4xl m-6'>Web Design | Software Design | HTML | AutoGluon</h2>
            <h2 id='listed-items' className='text-4xl m-6'>SQL | Version Control | NumPy</h2>
          </div>

          <div id='carousel-slide' className='projects'
           onMouseOver={() => {
            var x = document.getElementsByClassName('projects');
            x[0].setAttribute('style', 'animation: fadeIn 0.13s ease-in 0s; opacity: 1;');
          }}>
            <h1 className='text-7xl'>My Projects 🚀</h1>
            <h2 id='listed-items' className='text-4xl m-6'> <a href='https://www.morseley.com' target='_blank'>Morseley: fast morse-code translator ✍️</a> </h2>
            <h2 id='listed-items' className='text-4xl m-6'> <a href='https://chrome.google.com/webstore/detail/mirrorhound/iapfedepagfopcakfpejjjlkafmnpoeh' target='_blank' title='Prevents you from using malicious mirrored websites'>MirrorHound, anti-phishing extension</a> </h2>
            <h2 id='listed-items' className='text-4xl m-6'> <a href='https://github.com/Hoccyy/Arduino-Timer-Display' target='_blank'>Arduino Clock</a> </h2>
            <h2 id='listed-items' className='text-4xl m-6'> <a href='https://github.com/Hoccyy/Cache-Whoosh' target='_blank'>Python Cache Cleaner</a> </h2>
            <h2 id='listed-items' className='text-4xl m-6'> <a href='https://github.com/Hoccyy/auto-clicker' target='_blank'>QuickClick AutoClicker</a> </h2>
          </div>

          <div id='carousel-slide' className='contact'
           onMouseOver={() => {
            var x = document.getElementsByClassName('contact');
            x[0].setAttribute('style', 'animation: fadeIn 0.13s ease-in 0s; opacity: 1;');
          }}>
            <h1 className='text-7xl'>Ready to hire?🥳</h1>
            <h1 id='resume-title' className='text-7xl underline'>My Resume</h1>
            <h2 className='text-4xl m-6'> <a href='1Hocian_Wade - Resume.pdf' target='_blank' download>📥 Download</a> | <a href={resumeUrl} target='_blank' title='Online read-only copy'>Online Version</a> </h2>
          </div>
        </div>
      </div>
      <h2 id='email-button' className='mb-9'> <a href='mailto:hocianw@gmail.com?' target='_blank' title='Get in contact with me 🌱'>@Hoccyy ²</a> </h2>

    </main>
  )
}

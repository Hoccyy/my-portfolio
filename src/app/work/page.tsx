import styles from '../page.module.css';
import ProjectItem from '../components/ProjectItem';

export default function Work() {
  return (
    <main className={styles.mainProjects}>
      <h1 className={styles.mainHeader}>Notable Projects</h1>
      <ProjectItem 
        projectTitle='FitPick'
        imageSrc='/fitpick.ico'
        repoLink='https://github.com/Hoccyy/FitPick'
        imageIncluded={true}
        projDesc='FitPick is an app that lets you store your closet virtually and picks one for you randomly. The app stores your closet safely using Firebase and Google OAuth for user account storage and login so you can take your closet with you on the go! Never worry about forgetting anything in your closet again.' 
        technologies={['Firebase', 'Google OAuth', 'NextJS', 'TypeScript', 'NodeJS', 'React', 'Expo', 'CSS', 'HTML']}
      />

      <ProjectItem 
        projectTitle='EmotionDetector 1.0'
        imageSrc='/'
        repoLink='https://github.com/Hoccyy/Emotion-Detector'
        imageIncluded={false}
        projDesc='This project takes a picture of a face and it uses a model that is trained to classify different emotions. When run, the program loads a serialized model that can classify facial expressions and output the emotion detected.' 
        technologies={['Python', 'Tensorflow', 'Matplotlib', 'Pyplot', 'Numpy', 'OpenCV', 'Imghdr', 'Keras', 'cv2']}
      />

      <ProjectItem 
        projectTitle='ChefGPT 0.1'
        imageSrc='/chef.png'
        repoLink='https://github.com/Hoccyy/ChefGPT'
        imageIncluded={true}
        projDesc='Web application built with React that helps you decide on what meals to make and gives step-by-step instructions for preparation. To use this app, simply enter all the ingredients you have or want to use and it will output a recipe for them.' 
        technologies={['TypeScript', 'React', 'NextJS', 'NodeJS', 'GPT-3.5', 'OpenAI API', 'CSS', 'Vercel']}
      />

      <ProjectItem 
        projectTitle='Morseley.com' 
        imageSrc='/morseley.ico'
        repoLink='https://www.morseley.com/'
        imageIncluded={true}
        projDesc='A Morsecode Translator built with React and TypeScript to quickly convert English into Morsecode and back in realtime. The translation engine was originally written in vanilla JavaScript along with regular HTML and CSS and then the project was reformatted with React and NextJS for styling purposes. There are features to easily download and copy translations.' 
        technologies={['JavaScript', 'React', 'NextJS', 'NodeJS', 'CSS', 'npm', 'HTML']}
      />

      <ProjectItem 
        projectTitle='MirrorHound'
        imageSrc='/icon128.png'
        repoLink='https://chrome.google.com/webstore/detail/mirrorhound/iapfedepagfopcakfpejjjlkafmnpoeh'
        imageIncluded={true}
        projDesc='A Chrome extension used to detect mirrored websites that could potentially have malicious intent and informs the user so it the user is aware the website is mirror and prevent phishing attacks.' 
        technologies={['JavaScript']}
      />

      <ProjectItem 
        projectTitle='Finance Tracker'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/expense-tracker'
        imageIncluded={false}
        projDesc='React app to help you keep track of your expenses and also your income to track monthly cashflow and let you know if you&apos;re on target for your financial goals.' 
        technologies={['TypeScript', 'JavaScript', 'React', 'NextJS', 'HTML', 'CSS', 'csv', 'Node.JS']}
      />

      <ProjectItem 
        projectTitle='Media Downloader'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/Youtube-Video-Downloader'
        imageIncluded={false}
        projDesc='Python application made to download videos from their URL or download a playlist of videos all at once for convenience, in a folder. This app also has a feature to download images given the URL and save it.' 
        technologies={['Python', 'Pytube', 'Requests']}
      />

      <ProjectItem 
        projectTitle='House Price Predictor(ML)'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/House-price-prediction'
        imageIncluded={false}
        projDesc='Machine learning project to predict the price of a house using various attributes, such as the lot area, year constructed, nuumber of rooms etc.' 
        technologies={['Python', 'Scikit-learn', 'Pickle', 'Pandas', 'csv', 'Numpy', 'Matplotlib']}
      />

      <ProjectItem 
        projectTitle='Image Generator'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/Image-Generator'
        imageIncluded={false}
        projDesc='A web app that utilizes the OpenAI API to fetch generated images from the Dall-e model based on the user&apos;s prompt.' 
        technologies={['TypeScript', 'React', 'NextJS', 'NodeJS', 'dall-e-3', 'Vercel']}
      />

      <ProjectItem 
        projectTitle='QuickClick 1.0'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/auto-clicker'
        imageIncluded={false}
        projDesc='an autoclicker made with PyQt and python to automate repetitive clicking with custom quantities of clicks and a custom delay time between each click.' 
        technologies={['Python', 'PyQt', 'Pyautogui']}
      />
      
      <ProjectItem 
        projectTitle='GraphPlotter 1.0'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/Graph-Maker'
        imageIncluded={false}
        projDesc='Python app that uses Matplotlib to create graphs quickly using Matplotlib instead of making them manually which is slower.' 
        technologies={['Python', 'NumPy', 'matplotlib', 'SciPy']}
      />
      
      <ProjectItem 
        projectTitle='Cache-Whoosh'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/Cache-Whoosh'
        imageIncluded={false}
        projDesc='A Python app to clean the cache from computers and get rid of unused files to speed up your computer.' 
        technologies={['Python', 'PyQt']}
      />

      <ProjectItem 
        projectTitle='QR-code maker'
        imageSrc='/default.png'
        repoLink='https://github.com/Hoccyy/Qr-Code-Maker'
        imageIncluded={false}
        projDesc='App made with Python and Matplotlib to create graphs quickly using Matplotlib instead of making them manually which is slower.' 
        technologies={['Python', 'NumPy', 'matplotlib', 'SciPy']}
      />
    </main>
  )
}

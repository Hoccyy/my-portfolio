import styles from '../page.module.css';
import ContactDetails from '../components/ContactDetails';

export default function Contact() {
  return (
    <main className={styles.mainContact}>
      <ContactDetails/>
    </main>
  )
}

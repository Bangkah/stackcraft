import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contact}>
    <h1>Contact Us</h1>
    <form className={styles.form} autoComplete="off" onSubmit={e => e.preventDefault()}>
      <div className={styles.fieldGroup}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your Name" required />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email.com" required />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required />
      </div>
      <button className={styles.submit} type="submit">Send Message</button>
    </form>
    <div className={styles.socials}>
      <span>Email: hello@stackcraft.com</span>
      <span>GitHub: github.com/stackcraft</span>
      <span>LinkedIn: linkedin.com/company/stackcraft</span>
    </div>
  </div>
);

export default Contact;

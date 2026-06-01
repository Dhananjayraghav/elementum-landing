import styles from './Newsletter.module.css'

export default function Newsletter() {
  return (
    <section className={styles.section}>
      {/* Double arrow decoration */}
      <svg className={styles.arrows} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10 C30 40, 50 50, 50 70" stroke="#ff6b88" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M50 70 L44 58 M50 70 L56 58" stroke="#ff6b88" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M55 10 C65 40, 85 50, 85 70" stroke="#ff6b88" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M85 70 L79 58 M85 70 L91 58" stroke="#ff6b88" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>

      {/* Purple crescent */}
      <div className={styles.crescent} />

      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Subscribe to<br />our newsletter
        </h2>
        <p className={styles.subtext}>
          To make your stay special and even more memorable
        </p>
        <button className={styles.btn}>Subscribe Now</button>
      </div>
    </section>
  )
}

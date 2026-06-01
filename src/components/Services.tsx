import styles from './Services.module.css'

const SERVICES = [
  {
    category: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    category: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    category: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      {/* Pink squiggle decoration */}
      <svg className={styles.squiggle} viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 10 C70 40, 10 70, 40 100 C70 130, 40 150, 40 160" stroke="#ff6b88" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>

      <div className={styles.inner}>
        <h2 className={styles.heading}>
          What we{' '}
          <span className={styles.pillGreen}>can</span>
          <br />
          <span className={styles.underlineOrange}>offer</span> you!
        </h2>

        <div className={styles.list}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.row}>
              <p className={styles.category}>{s.category}</p>
              <h3 className={styles.title}>{s.title}</h3>
              <button className={styles.arrowBtn} aria-label={`Learn more about ${s.title}`}>
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="6" x2="33" y2="6" stroke="#111" strokeWidth="1.5"/>
                  <path d="M28 1 L38 6 L28 11" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

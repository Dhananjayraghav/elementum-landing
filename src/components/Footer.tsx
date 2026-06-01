import styles from './Footer.module.css'

const COLUMNS = [
  {
    heading: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
  {
    heading: 'Terms & Policies',
    isContact: true,
    contact: {
      address: '1498w Fluton ste, STE 2D Chicago, IL 63867.',
      phone: '(123) 456789000',
      email: 'info@elementum.com',
    },
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />

      <div className={styles.grid}>
        {COLUMNS.map((col, i) => (
          <div key={i} className={styles.col}>
            <h4 className={styles.colHeading}>{col.heading}</h4>
            {col.isContact && col.contact ? (
              <address className={styles.contact}>
                <p>{col.contact.address}</p>
                <p>{col.contact.phone}</p>
                <p>{col.contact.email}</p>
              </address>
            ) : (
              <ul>
                {col.links?.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.link}>{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>©2023 Elementum. All rights reserved</p>
      </div>
    </footer>
  )
}

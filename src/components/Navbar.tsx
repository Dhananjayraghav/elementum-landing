import { useState } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.brand}>Elementum</div>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={styles.link}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

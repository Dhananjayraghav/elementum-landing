import styles from './Testimonials.module.css'

const SIDE_PROFILES = [
  // left side  [id, size, top%, left%]
  { id: 14,  size: 72,  side: 'left',  top: 5,   x: 12  },
  { id: 26,  size: 56,  side: 'left',  top: 30,  x: 4   },
  { id: 38,  size: 140, side: 'left',  top: 52,  x: 14  },
  { id: 52,  size: 60,  side: 'left',  top: 80,  x: 6   },
  // right side
  { id: 61,  size: 76,  side: 'right', top: 5,   x: 10  },
  { id: 73,  size: 64,  side: 'right', top: 28,  x: 3   },
  { id: 85,  size: 150, side: 'right', top: 55,  x: 8   },
  { id: 91,  size: 88,  side: 'right', top: 82,  x: 15  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      {SIDE_PROFILES.map(({ id, size, side, top, x }) => (
        <img
          key={id}
          src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
          alt="customer"
          className={styles.floatingPhoto}
          style={{
            width: size,
            height: size,
            top: `${top}%`,
            [side]: `${x}%`,
          }}
        />
      ))}

      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <span className={styles.pillGreen}>What</span> our customer
          <br />
          says{' '}
          <span className={styles.underlineOrange}>About Us</span>
        </h2>

        <div className={styles.quoteCard}>
          <span className={styles.openQuote}>&ldquo;&ldquo;</span>
          <p className={styles.quoteText}>
            Elementum delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn&apos;t used, which have also
            proved to be easy to use and reliable
          </p>
          <span className={styles.closeQuote}>&rdquo;&rdquo;</span>
        </div>
      </div>
    </section>
  )
}

import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const row1 = useInView(0.1)
  const row2 = useInView(0.1)

  return (
    <section className={styles.section}>
      <div className={styles.pinkBlob} />

      {/* --- Tomorrow row --- */}
      <div ref={row1.ref} className={styles.row}>
        <div className={`${styles.textCol} reveal-left ${row1.visible ? 'visible' : ''}`}>
          <h2 className={styles.heading}>
            <span className={styles.underlineOrange}>Tomorrow</span> should
            <br />
            be better than{' '}
            <span className={styles.pillGreen}>today</span>
          </h2>
          <p className={styles.body}>
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
          <a href="#" className={styles.readMore}>
            Read more <span className={styles.arrow}>———→</span>
          </a>
        </div>

        <div className={`${styles.imageCol} reveal-right ${row1.visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className={`${styles.triangle} ${styles.triangleTopRight}`} />
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=480&h=480&fit=crop&crop=faces"
            alt="Business meeting"
            className={styles.circleImg}
          />
        </div>
      </div>

      {/* Wavy connecting line */}
      <div className={styles.wavyConnector}>
        <svg viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M1100 20 C900 20, 800 100, 600 130 C400 160, 200 100, 100 180"
            stroke="#ff6b88"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* --- Progress row --- */}
      <div ref={row2.ref} className={`${styles.row} ${styles.rowReverse}`}>
        <div className={`${styles.imageCol} reveal-left ${row2.visible ? 'visible' : ''}`}>
          <div className={`${styles.triangle} ${styles.triangleLeft}`} />
          <div className={`${styles.triangle} ${styles.triangleLeftBottom}`} />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=480&h=480&fit=crop&crop=faces"
            alt="Team working"
            className={styles.circleImg}
          />
        </div>

        <div className={`${styles.textCol} reveal-right ${row2.visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <h2 className={styles.heading}>
            <span className={styles.pillGreen}>See</span> how we can
            <br />
            help you{' '}
            <span className={styles.underlineOrange}>progress</span>
          </h2>
          <p className={styles.body}>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className={styles.readMore}>
            Read more <span className={styles.arrow}>———→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

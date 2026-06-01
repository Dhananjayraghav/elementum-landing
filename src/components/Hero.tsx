import styles from './Hero.module.css'

const PROFILES = [
  { id: 32, size: 92,  pos: { left: '0%',   bottom: '130px' } },
  { id: 50, size: 128, pos: { left: '7%',    bottom: '45px'  } },
  { id: 11, size: 120, pos: { left: '28%',   bottom: '75px'  } },
  { id: 22, size: 134, pos: { left: '35%',   bottom: '5px'   } },
  { id: 44, size: 112, pos: { left: '52%',   bottom: '105px' } },
  { id: 65, size: 132, pos: { left: '58.5%', bottom: '28px'  } },
  { id: 77, size: 112, pos: { right: '13%',  bottom: '90px'  } },
  { id: 83, size: 130, pos: { right: '0%',   bottom: '30px'  } },
]

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* Left wavy decoration */}
      <svg className={styles.wavyLeft} viewBox="0 0 80 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 10 C20 50, 70 100, 20 140 C-20 180, 60 220, 20 260" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M75 10 C35 50, 85 100, 35 140 C-5 180, 75 220, 35 260" stroke="#ff6b88" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Right purple crescent */}
      <div className={styles.crescent} />

      <div className={styles.inner}>
        <h1 className={styles.heading}>
          The{' '}
          <span className={styles.underlineOrange}>thinkers</span>{' '}
          and<br />
          doers were{' '}
          <span className={styles.pillPink}>changing</span>
          <br />
          the{' '}
          <span className={styles.pillGreen}>status</span>{' '}
          Quo with
        </h1>

        <p className={styles.subtext}>
          We are a team of strategists, designers communicators, researchers. Together,
          <br className={styles.brDesktop} />
          we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      {/* Floating profile photos */}
      <div className={styles.profilesArea}>
        {PROFILES.map(({ id, size, pos }) => (
          <img
            key={id}
            src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
            alt="team member"
            className={styles.profilePhoto}
            style={{ width: size, height: size, ...pos }}
          />
        ))}
      </div>
    </section>
  )
}

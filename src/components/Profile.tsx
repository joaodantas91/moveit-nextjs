import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/joaodantas91.png" alt="João Dantas"/>
      <div>
        <strong>João Dantas</strong>
        <p>
          <img src="/icons/level.svg" alt="Level"/>
          Level 1
          </p>
      </div>
    </div>
  )
}
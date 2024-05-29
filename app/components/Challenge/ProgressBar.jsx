import React from 'react'
import styles from "./challenge.module.scss"

export default function ProgressBar() {
  return (
    <div className={styles.progressBarTrack}>
        <div className={styles.progressBarValue}></div>
    </div>
  )
}

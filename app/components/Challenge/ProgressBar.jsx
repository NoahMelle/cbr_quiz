import React from 'react'
import styles from "./challenge.module.scss"

export default function ProgressBar({  currentQuestion  }) {
  var progress = currentQuestion * 10;
  return (
    <div className={styles.progressBarTrack}>
        <div className={styles.progressBarValue} style={{width : progress + "%"}}></div>
    </div>  )
}

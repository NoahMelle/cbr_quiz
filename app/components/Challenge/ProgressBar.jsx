import React from "react";
import styles from "./challenge.module.scss";

export default function ProgressBar({ currentQuestion, score }) {
    var progress = currentQuestion * 10;
    return (
        <div>
            <div className={styles.progressBarTrack}>
                <div
                    className={styles.progressBarValue}
                    style={{ width: progress + "%" }}
                >
                    {" "}
                    <div className={styles.score}>{score}</div>
                </div>
            </div>
        </div>
    );
}

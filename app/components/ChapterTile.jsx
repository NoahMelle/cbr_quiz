import React from "react";
import styles from "./styles/style.module.css"
import Image from "next/image";

export default function ChapterTile({ chapter }) {
    return (
        <div className={styles.chapter_tile}>
            <Image src={require('../../public/assets/img/vectors/grade_24dp_FILL1_wght400_GRAD0_opsz24.svg')} />
        </div>
    );
}

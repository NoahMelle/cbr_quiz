"use client";

import React, { act } from "react";
import styles from "./styles/style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ChapterTile({
    chapter,
    activeTile,
    setActiveTile,
    tileId,
}) {
    function showTile(e) {
        activeTile === tileId ? setActiveTile(null) : setActiveTile(tileId);
    }
    var newTileId = tileId + 1
    var newhref = "./challenge/" + newTileId;
    return (
        <div className={styles.chapter_tile_wrapper}>
            <button
                className={[
                    styles.chapter_tile,
                    activeTile === tileId ? styles.active_tile : "",
                ].join(" ")}
                onClick={showTile}
                tabIndex="-1"
                aria-pressed={activeTile === tileId ? "true" : "false"}
            >
                <Image
                    src={require("../../public/assets/img/vectors/grade_24dp_FILL1_wght400_GRAD0_opsz24.svg")}
                    alt="star icon"
                />
            </button>
            <div
                className={[
                    styles.chapter_tile_content,
                    activeTile === tileId ? "" : styles.hidden_tile,
                ].join(" ")}
            >
                <h3>{chapter.chapter}</h3>
                <Link className={styles.start_challenge_button} href={newhref}>
                    Start Challenge
                </Link>
            </div>
        </div>
    );
}

"use client";
import React from "react";
import styles from "./styles/style.module.css";
import ChapterTile from "./ChapterTile";
import Image from "next/image";
import { decode } from "html-entities";

export default function ChapterTileContainer({ rows }) {
    const [activeTile, setActiveTile] = React.useState(null);
    const tiles = [];

    for (let i = 0; i < rows.length; i++) {
        tiles.push(
            <ChapterTile
                key={i}
                chapter={rows[i]}
                activeTile={activeTile}
                setActiveTile={setActiveTile}
                tileId={i}
            />
        );
    }

    return (
        <div className={styles.tiles_container}>
            <Image
                src={"/assets/img/misc/cars1.png"}
                alt="cars background"
                height={200}
                width={200}
                className={styles.carsBackground}
            />
            <Image
                src={"/assets/img/misc/cars2.png"}
                alt="cars background"
                height={200}
                width={200}
                className={styles.carsBackground}
            />
            <Image
                src={"/assets/img/misc/cars3.png"}
                alt="cars background"
                height={200}
                width={200}
                className={styles.carsBackground}
            />
            <Image
                src={"/assets/img/misc/cars4.png"}
                alt="cars background"
                height={200}
                width={200}
                className={styles.carsBackground}
            />
            {tiles}
        </div>
    );
}

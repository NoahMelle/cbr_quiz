"use client";
import React from "react";
import styles from "./styles/style.module.css";
import ChapterTile from "./ChapterTile";
import { decode } from "html-entities";

export default function ChapterTileContainer({ rows }) {
    console.log(rows)

    const [activeTile, setActiveTile] = React.useState(null);
    const tiles = [];

    React.useEffect(() => {
        console.log(activeTile)
    }, [activeTile])

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

    return <div className={styles.tiles_container}>{tiles}</div>;
}

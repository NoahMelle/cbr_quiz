import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import ChapterTile from "./components/ChapterTile";
import componentStyles from "./components/styles/style.module.css";

export default function Home() {
    const tiles = [];
    for (let i = 0; i < 10; i++) {
        tiles.push(<ChapterTile />);
    }

    return <main className={componentStyles.tiles_container}>{tiles}</main>;
}

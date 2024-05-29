import React from "react";
import ChapterTileContainer from "./components/ChapterTileContainer";
import componentStyles from "./components/styles/style.module.css";

export default function Home() {
    return <main className={componentStyles.tiles_container}>
        <ChapterTileContainer />
    </main>;
}

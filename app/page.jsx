import React from "react";
import ChapterTileContainer from "./components/ChapterTileContainer";
import componentStyles from "./components/styles/style.module.css";
import { connection } from './database/dbconnect';

export default async function Home() {
    const query = "SELECT id, category_name as chapter FROM categories";
    const [rows, fields] = await connection.execute(query);


    return <main className={componentStyles.tiles_container}>
        <ChapterTileContainer rows={rows}/>
    </main>;
}

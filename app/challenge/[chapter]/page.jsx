import React from "react";
import { connection } from "../../database/dbconnect.jsx";
import ChallengePage from "../../components/Challenge/ChallengePage";

export default async function page({ params }) {
    const query = `
        SELECT 
            c.category_name, 
            q.type, 
            q.image, 
            q.question, 
            (
                SELECT GROUP_CONCAT(o.option_text SEPARATOR '----------') 
                FROM options o 
                WHERE o.question_id = q.id
            ) AS options,
            q.feedback 
        FROM questions q 
        JOIN categories c ON c.id = q.category 
        WHERE q.type <> 4 AND q.category = ? AND disabled = 0
        ORDER BY RAND() 
        LIMIT 13
`;
    const values = [params.chapter];
    const [rows, fields] = await connection.execute(query, values);

    console.log(rows);

    return (
        <ChallengePage
            rows={rows}
        />
    );
}

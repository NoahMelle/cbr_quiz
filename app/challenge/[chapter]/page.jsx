import React from "react";
import { connection } from "../../database/dbconnect";

export default async function page({ params }) {
    const query = `
        SELECT 
            c.category_name, 
            q.type, 
            q.image, 
            q.question, 
            (
                SELECT GROUP_CONCAT(o.option_text) 
                FROM options o 
                WHERE o.question_id = q.id
            ) AS options,
            q.feedback 
        FROM questions q 
        JOIN categories c ON c.id = q.category 
        WHERE q.type <> 1 AND q.category = ?
        ORDER BY RAND() 
        LIMIT 10
`;
    const values = [params.chapter];
    const [rows, fields] = await connection.execute(query, values);

    console.log(rows);

    return <div>{params.chapter}</div>;
}

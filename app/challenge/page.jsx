import React from "react";
import { connection } from "../database/dbconnect";

export default async function page() {
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
  WHERE q.category <> 1
  ORDER BY RAND() 
  LIMIT 10
`;
    const [rows, fields] = await connection.execute(query);

    console.log(rows);

    return <div>page</div>;
}

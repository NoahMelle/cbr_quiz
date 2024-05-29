import mysql from "mysql2/promise";

export const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "cbr_quiz",
    password: "F3KDR8^i6bVDhj",
});

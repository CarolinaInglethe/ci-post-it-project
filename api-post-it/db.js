import mysql from 'mysql2';

export const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Carol987654321*',
    database: 'crud-lembretes',
});
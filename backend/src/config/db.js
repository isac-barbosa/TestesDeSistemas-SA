import {Pool} from 'pg'
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.query("SELECT current_database()")
    .then(result => {
        console.log("Banco conectado:", result.rows[0].current_database)
    })
    .catch(err => {
        console.log("Erro ao conectar:", err)
    })

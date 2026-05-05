import pool from "../../db/connection.js";

export const getAllNotebooks = async () => {
    try {
        const [rows] = await pool.query("SELECT * FROM notebooks");
        return rows;
    } catch (error) {
        console.log("Erro ao buscar notebooks", error);
    }
}
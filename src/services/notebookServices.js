import pool from "../../db/connection.js";

export const getAllNotebooks = async () => {
    try {
        const [rows] = await pool.query("SELECT * FROM notebooks");
        return rows;
    } catch (error) {
        console.log("Erro ao buscar notebooks", error);
    }
}
export const getNotbookById = async (id) => {
    try {
        const [rows] = await pool.query("SELECT * FROM notebooks Where id = ?", [id])
        return rows[0] || null

    } catch (error) {
        console.log("Erro ao buscar notebook por id", error)
    }
}
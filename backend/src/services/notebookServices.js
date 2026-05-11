import { pool } from "../config/db.js";

export const getAllNotebooks = async () => {
    try {
        const result = await pool.query("SELECT * FROM notebooks");
        return result.rows;
    } catch (error) {
        console.log("Erro ao buscar notebooks", error);
    }
}
export const getNotebookById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT * FROM notebooks WHERE id = $1",
            [id]
        )
        return result.rows[0] || null

    } catch (error) {
        console.log("Erro ao buscar notebook por id", error)
    }
}

export const createNotebook = async ({

    marca,
    modelo,
    preco,
    estoque,
    descricao

}) => {
    try {
        await pool.query(
            `INSERT INTO notebooks (marca, modelo, preco, estoque, descricao) VALUES ($1, $2, $3, $4, $5) `,
            [marca, modelo, preco, estoque, descricao]
        )
        return {message: "Notebook adicionado com sucesso!"}

    } catch (error) {
        console.log("Erro ao cadastrar notebook", error)
    }

}

export const updateNotebook = async (id, {
    marca,
    modelo,
    preco,
    estoque,
    descricao
}) => {
    try{
        const result = await pool.query(
            `UPDATE notebooks SET marca = $1, modelo = $2, preco = $3, estoque = $4, descricao = $5 WHERE id = $6`,
            [marca, modelo, preco, estoque, descricao, id]
        )
        return { message: "Notebook atualizado com sucesso!"}
    }catch (error){
        console.log("Erro ao atualizar notebook", error)
    }
}

export const deleteNotebook = async (id) => {
    try {
         await pool.query(
             `DELETE FROM notebooks WHERE id = $1`,
             [id]
         )
        return { message: "Notebook deletado com sucesso!"}
        
    } catch (error) {
        console.log("Erro ao deletar notebook", error)
        
    }
}
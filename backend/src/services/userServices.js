import { pool } from "../config/db.js";

export const createUser = async ({
    nome,
    email,
    senha
}) => {

    try {
        await pool.query(
            `INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) `,
            [nome, email, senha]
        )
        return {
            message: "Usuário cadastrado com sucesso"
        }
    } catch (error) {
        console.log("Erro ao cadastrar usuário", error)
    }

}


export const loginUser = async ({ email, senha }) => {

    try {
        const result = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        )
        const usuario = result.rows[0]
        if (!usuario) {
            return null
        }
        if (usuario.senha !== senha) {
            return null
        }
        return {
            message: "Login realizado com sucesso"
        }
    } catch (error) {
        console.log("Erro ao fazer login", error)
    }
}
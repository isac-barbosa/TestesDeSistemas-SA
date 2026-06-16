import { pool } from "../config/db.js";

 export const createUser = async ({
    nome,
    email,
    senha
}) => {

    try {

        console.log("Recebido:", {
            nome,
            email,
            senha
        })

        const result = await pool.query(
            `INSERT INTO usuarios (nome, email, senha)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [nome, email, senha]
        )

        console.log("Usuário criado:", result.rows[0])

        return result.rows[0]

    } catch (error) {

        console.log("Erro ao cadastrar usuário", error)

        throw error
    }
}


export const loginUser = async ({ email, senha }) => {

    try {
        const result = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1 AND senha = $2",
            [email, senha]
        )
        console.log("Email:", email)
        console.log("Senha:", senha)
        console.log("Resultado:", result.rows)

        const usuario = result.rows[0]

        if (!usuario) {
            return null
        }
        if (usuario.senha !== senha) {
            return null
        }
        return {
            message: "Login realizado com sucesso",
            usuario
        }
    } catch (error) {
        console.log("Erro ao fazer login", error)
    }
}
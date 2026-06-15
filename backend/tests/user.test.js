import request from "supertest"
import app from "../src/app.js"
import { pool } from "../src/config/db.js"

describe("Rotas de usuários", () => {

    test("Deve cadastrar usuário", async () => {

        const response = await request(app)
            .post("/usuarios")
            .send({
                nome: "Usuario Teste",
                email: `teste${Date.now()}@teste.com`,
                senha: "123456"
            })

        expect(response.statusCode).toBe(201)

    })

    test("Deve realizar login", async () => {

        const response = await request(app)
            .post("/usuarios/login")
            .send({
                email: "teste@teste.com",
                senha: "123456"
            })

        expect(response.statusCode).toBe(200)

    })

    test("Deve retornar erro para senha inválida", async () => {

        const response = await request(app)
            .post("/usuarios/login")
            .send({
                email: "teste@teste.com",
                senha: "senhaerrada"
            })

        expect(response.statusCode).toBe(401)

    })

})

afterAll(async () => {
    await pool.end()
})
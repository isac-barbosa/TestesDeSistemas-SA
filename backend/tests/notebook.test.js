import request from "supertest"
import app from "../src/app.js"
import { pool } from "../src/config/db.js"

describe("Rotas de notebooks", () => {

    test("Deve listar notebooks", async () => {

        const response = await request(app)
            .get("/notebooks")

        expect(response.statusCode).toBe(200)

    })

    test("Deve cadastrar notebook", async () => {

        const response = await request(app)
            .post("/notebooks")
            .send({
                marca: "Dell",
                modelo: `Inspiron ${Date.now()}`,
                preco: 3500,
                estoque: 5,
                descricao: "Notebook teste Jest"
            })

        expect(response.statusCode).toBe(201)

    })

})

afterAll(async () => {
    await pool.end()
})
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import express from "express"
import notebookRoutes from './routes/notebookRoutes.js'
import cors from "cors"
import userRoutes from "./routes/userRoutes.js";

const app = express()
app.use(cors())
app.use(express.json())

// rotas
app.use("/notebooks", notebookRoutes),
app.use("/usuario", userRoutes)

app.get("/", (req, res) =>{
    res.send("Bem vindo á API de Notebooks")
})

export default app
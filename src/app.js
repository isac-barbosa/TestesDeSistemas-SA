import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import express from "express"
import notebookRoutes from './routes/notebookRoutes.js'

const app = express()

app.use(express.json())

// rotas
app.use("/notebooks", notebookRoutes)

export default app
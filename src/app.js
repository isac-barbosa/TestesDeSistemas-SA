import dotenv from 'dotenv'
dotenv.config({path: './.env'})
import express from "express"
import notebookRoutes from './routes/notebookRoutes.routes.js'


const app = express()

app.use(express.json())
app.use(notebookRoutes)

export default app
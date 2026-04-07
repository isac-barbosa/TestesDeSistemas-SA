import { Router } from "express";
import pool from "../../db/connection.js"

const router = Router();


router.get("/notebooks", async (req, res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM notebooks");
        res.json(rows)
    }
    catch(error){
    res.json(rows);
    console.log(error);
    res.status(500).json({ error: "Erro ao buscar notebooks" });
  }
});

router.get("/notebooks/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Detalhes do notebook com ID: ${id}`);
});


export default router;
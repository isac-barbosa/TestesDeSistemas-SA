import { Router } from "express";
import { getAllNotebooks } from "../services/notebookServices.js";

const router = Router();


router.get("/notebooks", async (req, res) => {
  try {
    const notebooks = await getAllNotebooks()
    res.json(notebooks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});

router.get("/notebooks/:id", async (req, res) => {

  const idNotebook = Number(req.params.id)

  try {

    const result = await pool.query(
      "SELECT * FROM notebooks WHERE  id = $1",
      [idNotebook]
    )
    const notebook = result.rows[0]

    if (!notebook) {
      return res.status(404).json({ message: "Notebook não encontrado" })
    }

    return res.status(200).json(notebook)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});


router.post("/notebooks", async (req, res) => {
  const { marca, modelo, preco, estoque, descricao } = req.body
  const [rows] = await pool.query(
    "INSERT INTO notebooks (marca, modelo, preco, estoque, descricao) VALUES ($1, $2, $3, $4, $5)",
    [marca, modelo, preco, estoque, descricao]
  )
  console.log(rows)
  return res.status(201).json({message: "Notebook adicionado com sucesso!"})
})




export default router;
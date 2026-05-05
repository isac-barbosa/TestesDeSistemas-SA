import { Router } from "express";
import { getAllNotebooks } from "../services/notebookServices.js";

const router = Router();


router.get("/notebooks", async (req, res) => {
  try{
    const notebooks = await getAllNotebooks()
    res.json(notebooks)
  }catch (error) {
    res.status(500).json({error: error.message})
  }
});

router.get("/notebooks/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Detalhes do notebook com ID: ${id}`);
});




export default router;
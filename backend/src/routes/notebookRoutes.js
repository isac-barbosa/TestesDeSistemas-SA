import { Router } from "express";
import { createNotebook, getAllNotebooks, getNotebookById, updateNotebook, deleteNotebook } from "../services/notebookServices.js";

const router = Router();


router.get("/", async (req, res) => {
  try {
    const notebooks = await getAllNotebooks()
    res.status(200).json(notebooks)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
});

router.get("/:id", async (req, res) => {

  const idNotebook = Number(req.params.id)

  try {

    const notebook = await getNotebookById(idNotebook)
    if (!notebook) {
      return res.status(404).json({ message: "Notebook não encontrado" })
    }

    return res.status(200).json(notebook)

  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    })
  }
});

router.post("/", async (req, res) => {
   console.log("ROTA POST FUNCIONOU")
  try {
    const notebook = await createNotebook(req.body)
    return res.status(201).json(notebook)
    console.log(notebook)
  }
  catch (error) {
    return res.status(500).json({
      error: error.message 
    })
    
  }
})

router.put("/:id", async (req, res) =>{
  const idNotebook = Number(req.params.id)

    try{
      const notebookExistente = await getNotebookById(idNotebook, req.body)

      if(!notebookExistente){
        return res.status(404).json({ message: "Notebook não encontrado" })
      }

        await updateNotebook(idNotebook, req.body)
        return res.status(200).json({
          message: "Notebook atualizado com sucesso"
        })
    }
    catch(error) {
      return res.status(500).json({
        error: error.message
      })
    }
})

router.delete("/:id", async (req, res) => {
  const idNotebook = Number(req.params.id)

  try {
    const notebookExistente = await getNotebookById(idNotebook)
    if (!notebookExistente) {

      return res.status(404).json({ message: "Notebook não encontrado" })
      
    }

    await deleteNotebook(idNotebook)
    return res.status(200).json({ message: "Notebook deleteado com sucesso" })

    }catch (error){
    return res.status(500).json({
      error: error.message
    })
  }
})

export default router;
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

  router.get("/notebooks/:id",  async (req, res) => {

    const { id } = Number(req.params.id);
    try{
      const result = await pool.query(
        "SELECT * FROM user WHERE  id = $1",
        [idUsuario]
      )
      const usuario = result.rows[0]

      return res.status(200).json(usuario)
      
    }catch{

    }


  });


  router.post("/notebooks", (req, res) =>{
    
  })




export default router;
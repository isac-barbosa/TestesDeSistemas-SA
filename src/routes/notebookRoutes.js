  import { Router } from "express";
  import { pool } from "../config/db.js";

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
import { Router } from "express";
import { createUser, loginUser } from "../services/userServices.js";

const router = Router();

router.post("/cadastro", async (req, res) => {

    try {
        const user = await createUser(req.body)
        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
})

router.post("/login", async (req, res) => {

    try {

        const usuario = await loginUser(req.body)

        if (!usuario) {
            return res.status(401).json({
                message: "Email ou senha inválidos"
            })
        }
        return res.status(200).json(usuario)

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
})

export default router;
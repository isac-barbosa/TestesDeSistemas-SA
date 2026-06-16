import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import "../styles/login.css"

function Register() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

    async function handleRegister(e) {

        e.preventDefault()

        try {

            const response = await api.post("/usuarios", {
                nome,
                email,
                senha
            })

            alert(response.data.message)

            navigate("/")

        } catch (error) {

            console.log(error)

            alert("Erro ao cadastrar usuário")

        }

    }

    return (
        <div className="login-container">

            <form
                className="login-card"
                onSubmit={handleRegister}
            >

                <h1>
                    Criar Conta
                </h1>

                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

                <p
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    Já possui conta? Entrar
                </p>

            </form>

        </div>
    )
}

export default Register
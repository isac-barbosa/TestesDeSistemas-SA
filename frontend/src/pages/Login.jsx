import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import "../styles/login.css"

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

    async function handleLogin(e) {

        e.preventDefault()

        try {

            const response = await api.post("/usuarios/login", {
                email,
                senha
            })

            alert(response.data.message)

            navigate("/home")

        } catch (error) {

            alert("Email ou senha inválidos")

            console.log(error)

        }

    }

    return (

        <div className="login-container">

            <form
                className="login-card"
                onSubmit={handleLogin}
            >
                <h1>
                    Tech <span>Wave</span>
                </h1>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    data-testid="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Digite sua senha"
                    data-testid="senha-input"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="submit" data-testid="login-button">
                    Entrar
                </button>

            </form>

        </div>

    )

}

export default Login
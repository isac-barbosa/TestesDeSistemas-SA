import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import "../styles/login.css"

function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

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
            console.log(error)
            setErro("Email ou senha inválidos")
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
                    required
                />

                <input
                    type="password"
                    placeholder="Digite sua senha"
                    data-testid="senha-input"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    data-testid="login-button"
                >
                    Entrar
                </button>

                <p
                    data-testid="register-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/cadastro")}
                >
                    Não possui conta? Cadastre-se
                </p>
                {erro && (
                    <p data-testid="login-error">
                        {erro}
                    </p>
                )}
            </form>

        </div>

    )

}

export default Login
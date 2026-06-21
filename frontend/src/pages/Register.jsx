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

            alert(response.data.message || "Usuário cadastrado com sucesso!")

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
                    data-testid="register-nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    data-testid="register-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    data-testid="register-senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    data-testid="register-button"
                >
                    Cadastrar
                </button>

                <p
                    data-testid="back-login-button"
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
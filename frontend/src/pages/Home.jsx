import { useState, useEffect } from "react"
import "../styles/home.css"
import api from "../services/api"

function Home() {

    const [notebooks, setNotebooks] = useState([])

    const [search, setSearch] = useState("")
    const [priceFilter, setPriceFilter] = useState("")

    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [preco, setPreco] = useState("")
    const [estoque, setEstoque] = useState("")
    const [descricao, setDescricao] = useState("")


    useEffect(() => {
        getNotebooks()
    }, [])

    async function getNotebooks() {
        try {
  const response = await api.get("/notebooks")
        console.log(response.data)
        setNotebooks(response.data)

    } catch (error) {
        console.log(error)
    }
}

    async function handleCreateNotebook(e) {

        e.preventDefault()

        try {

            await api.post("/notebooks", {
                marca,
                modelo,
                preco,
                estoque,
                descricao
            })

            alert("Notebook cadastrado com sucesso!")

            setMarca("")
            setModelo("")
            setPreco("")
            setEstoque("")
            setDescricao("")

            getNotebooks()

        } catch (error) {
            console.log(error)
        }

    }

   const filteredNotebooks = Array.isArray(notebooks)
    ? notebooks.filter((notebook) => {

        const matchesName =
            notebook.modelo
                .toLowerCase()
                .includes(search.toLowerCase())

        const matchesPrice =
            priceFilter
                ? Number(notebook.preco) <= Number(priceFilter)
                : true

        return matchesName && matchesPrice

    })
    : []



    return (

        <div className="home-container">

            <nav className="navbar">

                <div className="logo">
                    <h1>
                        Tech <span>Wave</span>
                    </h1>
                </div>

                <button className="logout-btn">
                    Sair
                </button>

            </nav>

            <div className="main-content">

                <div className="left-content">

                    <div className="title">

                        <h2>
                            Encontre o <span>notebook ideal</span>
                        </h2>

                        <p>
                            Pesquise e filtre os melhores notebooks disponíveis
                        </p>

                    </div>

                    <div className="filters">

                        <input
                            type="text"
                            placeholder="Marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Preço"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Estoque"
                            value={estoque}
                            onChange={(e) => setEstoque(e.target.value)}
                        />

                        <textarea
                            placeholder="Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>

                    </div>

                    <div className="cards-container">

                        {
                            filteredNotebooks.map((notebook) => (

                                <div className="card" key={notebook.id}>

                                    <img
                                        src={notebook.imagem}
                                        alt={notebook.modelo}
                                    />

                                    <div className="card-content">

                                        <h3>
                                            {notebook.modelo}
                                        </h3>

                                        <p>
                                            Marca: {notebook.marca}
                                        </p>

                                        <p className="price">
                                            R$ {notebook.preco}
                                        </p>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                </div>

                <div className="register-section">

                    <h2>
                        Cadastrar Notebook
                    </h2>

                    <form
                        className="register-form"
                        onSubmit={handleCreateNotebook}
                    >

                        <input type="text" placeholder="Marca" />

                        <input type="text" placeholder="Modelo" />

                        <input type="number" placeholder="Preço" />

                        <input type="number" placeholder="Estoque" />

                        <textarea placeholder="Descrição"></textarea>

                        <button type="submit">
                            Cadastrar
                        </button>

                    </form>

                </div>

            </div>

        </div>

    )

}

export default Home
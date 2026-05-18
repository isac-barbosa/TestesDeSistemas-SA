import { useState, useEffect } from "react"
import "../styles/Home.css"
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
    const [editarNotebookId, setEditarNotebookId] = useState(null)


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

        if (!marca || !modelo || !preco || !estoque) {

            alert("Preencha todos os campos")

            return
        }

        try {

            const notebookData = {
                marca,
                modelo,
                preco: Number(preco),
                estoque: Number(estoque),
                descricao
            }

            // UPDATE
            if (editarNotebookId) {

                await api.put(
                    `/notebooks/${editarNotebookId}`,
                    notebookData
                )

                alert("Notebook atualizado!")

            }

            // CREATE
            else {

                await api.post(
                    "/notebooks",
                    notebookData
                )

                alert("Notebook cadastrado!")

            }

            // limpa estados
            setMarca("")
            setModelo("")
            setPreco("")
            setEstoque("")
            setDescricao("")

            setEditarNotebookId(null)

            getNotebooks()

        } catch (error) {

            console.log(error)

        }
    }
    function handleEditNotebook(notebook) {

        setEditarNotebookId(notebook.id)

        setMarca(notebook.marca)
        setModelo(notebook.modelo)
        setPreco(notebook.preco)
        setEstoque(notebook.estoque)
        setDescricao(notebook.descricao)

    }
    async function handleDeleteNotebook(id) {

        try {
            await api.delete(`/notebooks/${id}`)

            alert("Notebook deletado com sucesso!")
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

                ||

                notebook.marca
                    .toLowerCase()
                    .includes(search.toLowerCase())

            const matchesPrice =
                priceFilter
                    ? Number(notebook.preco) <= Number(priceFilter)
                    : true

            return matchesName && matchesPrice

        })
        : []

    console.log(marca)

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
                            placeholder="Pesquisar por modelo..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Preço máximo..."
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(e.target.value)}
                        />
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
                                        <button
                                            className="edit-btn"
                                            onClick={() => handleEditNotebook(notebook)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDeleteNotebook(notebook.id)
                                            }
                                        >
                                            Excluir
                                        </button>
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
                        <button type="submit">
                            {
                                editarNotebookId
                                    ? "Salvar Alterações"
                                    : "Cadastrar Notebook"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
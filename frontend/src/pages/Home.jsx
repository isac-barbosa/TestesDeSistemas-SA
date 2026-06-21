import { useState, useEffect } from "react"
import "../styles/Home.css"
import api from "../services/api"
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate()

    const [notebooks, setNotebooks] = useState([])
    const [search, setSearch] = useState("")
    const [priceFilter, setPriceFilter] = useState("")
    const [notebookSelecionado, setNotebookSelecionado] = useState(null)
    const [mostrarModal, setMostrarModal] = useState(false)

    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [preco, setPreco] = useState("")
    const [estoque, setEstoque] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")
    const [editarNotebookId, setEditarNotebookId] = useState(null)

    useEffect(() => {
        getNotebooks()
    }, [])

    async function getNotebooks() {
        try {
            const response = await api.get("/notebooks")
            setNotebooks(response.data || [])
        } catch (error) {
            console.log(error)
            setNotebooks([])
        }
    }
    async function handleCreateNotebook(e) {
        e.preventDefault()
        if (!marca || !modelo || !preco || !estoque) {
            alert("Preencha todos os campos")
            return
        }

        const notebookData = {
            marca,
            modelo,
            preco: Number(preco),
            estoque: Number(estoque),
            descricao,
            imagem
        }

        try {

            if (editarNotebookId) {

                await api.put(`/notebooks/${editarNotebookId}`, notebookData)
                const resposta = await api.get(`/notebooks/${editarNotebookId}`)

                console.log("Notebook após atualizar:", resposta.data)
                await getNotebooks()
                setMarca("")
                setModelo("")
                setPreco("")
                setEstoque("")
                setDescricao("")
                setImagem("")
                setEditarNotebookId(null)

                alert("Notebook atualizado!")
            } else {
                await api.post(
                    "/notebooks",
                    notebookData
                )
                alert("Notebook cadastrado!")
            }

            setMarca("")
            setModelo("")
            setPreco("")
            setEstoque("")
            setDescricao("")
            setImagem("")
            setEditarNotebookId(null)

            await getNotebooks()

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
        setImagem(notebook.imagem || "")

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    async function handleDeleteNotebook(id) {
        try {
            console.log("ID recebido:", id)
            await api.delete(`/notebooks/${id}`)

            alert("Notebook deletado com sucesso!")

            await getNotebooks()

        } catch (error) {
            console.log("DELETE executado")
            console.log(error)
        }
    }
    function handleViewNotebook(notebook) {

        setNotebookSelecionado(notebook)
        setMostrarModal(true)

    }
    function handleLogout() {

        const confirmar = window.confirm(
            "Deseja realmente sair?"
        )

        if (confirmar) {
            navigate("/")
        }

    }
    const filteredNotebooks = notebooks.filter((notebook) => {

        const matchesName =
            notebook.modelo.toLowerCase().includes(search.toLowerCase()) ||
            notebook.marca.toLowerCase().includes(search.toLowerCase())

        const matchesPrice =
            priceFilter === ""
                ? true
                : Number(notebook.preco) <= Number(priceFilter)

        return matchesName && matchesPrice
    })
    return (

        <div className="home-container">
            <nav className="navbar">
                <div className="logo">
                    <h1>
                        Tech <span>Wave</span>
                    </h1>
                </div>
                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
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
                        {filteredNotebooks.map((notebook) => (
                            <div
                                className="card"
                                key={notebook.id}
                            >
                                <img
                                    src={
                                        notebook.imagem ||
                                        "https://via.placeholder.com/300x200?text=Notebook"
                                    }
                                    alt={notebook.modelo}
                                />
                                <div className="card-content">

                                    <h3>{notebook.modelo}</h3>

                                    <p>Marca: {notebook.marca}</p>

                                    <p className="price">
                                        R$ {notebook.preco}
                                    </p>

                                    <button
                                        className="view-btn"
                                        onClick={() => handleViewNotebook(notebook)}
                                    >
                                        Ver Mais
                                    </button>

                                    <button
                                        className="edit-btn"
                                        data-testid={`edit-${notebook.id}`}
                                        onClick={() => handleEditNotebook(notebook)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="delete-btn"
                                        data-testid={`delete-${notebook.id}`}
                                        onClick={() => handleDeleteNotebook(notebook.id)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="register-section">

                    <h2>
                        {editarNotebookId
                            ? "Editar Notebook"
                            : "Cadastrar Notebook"}
                    </h2>

                    <form
                        className="register-form"
                        onSubmit={handleCreateNotebook}
                    >

                        <input
                            data-testid="notebook-marca"
                            type="text"
                            placeholder="Marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />

                        <input
                            data-testid="notebook-modelo"
                            type="text"
                            placeholder="Modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                        />

                        <input
                            data-testid="notebook-preco"
                            type="number"
                            placeholder="Preço"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />

                        <input
                            data-testid="notebook-estoque"
                            type="number"
                            placeholder="Estoque"
                            value={estoque}
                            onChange={(e) => setEstoque(e.target.value)}
                        />

                        <textarea
                            data-testid="notebook-descricao"
                            placeholder="Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <input
                            data-testid="notebook-imagem"
                            type="text"
                            placeholder="URL da imagem"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />

                        <button
                            data-testid="notebook-submit"
                            type="submit"
                        >
                            {editarNotebookId
                                ? "Salvar Alterações"
                                : "Cadastrar Notebook"}
                        </button>

                    </form>

                </div>

            </div>

            {mostrarModal && notebookSelecionado && (

                <div
                    className="modal-overlay"
                    onClick={() => setMostrarModal(false)}
                >

                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <img
                            src={
                                notebookSelecionado.imagem ||
                                "https://via.placeholder.com/600x400?text=Notebook"
                            }
                            alt={notebookSelecionado.modelo}
                        />

                        <h2>{notebookSelecionado.modelo}</h2>

                        <p>
                            <strong>Marca:</strong> {notebookSelecionado.marca}
                        </p>

                        <p>
                            <strong>Preço:</strong> R$ {notebookSelecionado.preco}
                        </p>

                        <p>
                            <strong>Estoque:</strong> {notebookSelecionado.estoque}
                        </p>

                        <p>
                            <strong>Descrição:</strong> {notebookSelecionado.descricao}
                        </p>

                        <button onClick={() => setMostrarModal(false)}>
                            Fechar
                        </button>

                    </div>

                </div>

            )}

        </div>

    )
}

export default Home
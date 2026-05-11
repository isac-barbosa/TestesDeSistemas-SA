export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Loja de Notebooks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* LOGIN */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Login
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="Senha"
              className="border rounded-lg p-3"
            />

            <button
              type="submit"
              className="bg-black text-white rounded-lg p-3 hover:opacity-90"
            >
              Entrar
            </button>
          </form>
        </div>


        {/* CADASTRO NOTEBOOK */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Cadastrar Notebook
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Marca"
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Modelo"
              className="border rounded-lg p-3"
            />

            <input
              type="number"
              placeholder="Preço"
              className="border rounded-lg p-3"
            />

            <input
              type="number"
              placeholder="Estoque"
              className="border rounded-lg p-3"
            />

            <textarea
              placeholder="Descrição"
              className="border rounded-lg p-3"
            />

            <button
              type="submit"
              className="bg-green-600 text-white rounded-lg p-3 hover:opacity-90"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>


      {/* LISTAGEM */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Notebooks Cadastrados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="border rounded-xl p-4">
              <h3 className="text-xl font-bold">
                Dell Inspiron
              </h3>

              <p>
                Marca: Dell
              </p>

              <p>
                Preço: R$ 3500
              </p>

              <p>
                Estoque: 5
              </p>

              <p className="mt-2 text-gray-600">
                Notebook gamer para testes.
              </p>
            </div>


            <div className="border rounded-xl p-4">
              <h3 className="text-xl font-bold">
                Lenovo Gaming 3i
              </h3>

              <p>
                Marca: Lenovo
              </p>

              <p>
                Preço: R$ 4500
              </p>

              <p>
                Estoque: 10
              </p>

              <p className="mt-2 text-gray-600">
                Notebook atualizado.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

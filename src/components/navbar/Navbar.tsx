import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <div className="flex w-full justify-center bg-cyan-500 py-4 text-white">
        <div className="container mx-8 flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            Farmácia Carvalho
          </Link>

          <div className="flex gap-4">
            Criar Produto Listar Produtos Cadastrar Categoria Listar Categorias
          </div>
        </div>
      </div>
    </>
  )
}

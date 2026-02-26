import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import type Categoria from "../../../models/Categoria"
import { ClipLoader } from "react-spinners"

export function DeletarCategoria() {
  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error) {
      console.error("Erro ao buscar categoria", error)
      alert("Erro ao buscar a categoria.")
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    setIsLoading(true)

    try {
      await deletar(`/categorias/${id}`)
      alert("Categoria apagada com sucesso")
      retornar()
    } catch (error) {
      console.error("Erro ao deletar", error)
      alert("Erro ao apagar a categoria.")
    } finally {
      setIsLoading(false)
    }
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container mx-auto w-1/3">
      <h1 className="my-4 text-center text-4xl font-bold text-cyan-500">
        Deletar Categoria
      </h1>

      <p className="mb-4 text-center font-semibold text-cyan-500">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
        <header className="bg-cyan-500 px-6 py-2 text-2xl font-bold text-white">
          Categoria
        </header>

        <p className="h-full bg-slate-200 p-8 text-3xl">
          {categoria.descricao}
        </p>

        <div className="flex">
          <button
            className="w-full bg-red-400 py-2 text-white transition-colors hover:bg-red-600 hover:font-bold"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="flex w-full items-center justify-center bg-cyan-300 text-white transition-colors hover:bg-cyan-500 hover:font-bold"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color="#67e8f9" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

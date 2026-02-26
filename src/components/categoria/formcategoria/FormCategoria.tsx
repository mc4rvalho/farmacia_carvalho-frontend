import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { atualizar, buscar, cadastrar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import type Categoria from "../../../models/Categoria"

export function FormCategoria() {
  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error) {
      console.error("Erro ao buscar categoria", error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })
  }

  function retornar() {
    navigate("/categorias")
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)
        alert("A Categoria foi atualizada com sucesso!")
        retornar()
      } catch (error) {
        alert("Erro ao atualizar a categoria.")
        console.error(error)
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)
        alert("A Categoria foi cadastrada com sucesso!")
        retornar()
      } catch (error) {
        alert("Erro ao cadastrar a categoria.")
        console.error(error)
      }
    }

    setIsLoading(false)
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="my-8 text-center text-4xl">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="flex w-1/2 flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="font-bold">
            Descrição da Categoria
          </label>
          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name="descricao"
            className="rounded border-2 border-lime-600 p-2 focus:border-lime-800 focus:ring-1 focus:ring-lime-800 focus:outline-none"
            value={categoria.descricao || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="mx-auto flex w-1/2 justify-center rounded bg-cyan-300 py-2 text-white hover:bg-cyan-500"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#67e8f9" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  )
}

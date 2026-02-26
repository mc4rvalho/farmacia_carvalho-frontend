/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { SyncLoader } from "react-spinners"
import { buscar } from "../../../services/Service"
import type Categoria from "../../../models/Categoria"
import { CardCategoria } from "../cardcategoria/CardCategoria"

export function ListaCategorias() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    setIsLoading(true)
    try {
      await buscar("/categorias", setCategorias)
    } catch (error: any) {
      if (error.toString().includes("401")) 
        alert("Erro ao buscar categorias.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <>
      {isLoading && (
        <div className="my-8 flex w-full justify-center">
          <SyncLoader color="#67e8f9" size={32} />
        </div>
      )}

      <div className="my-4 flex w-full justify-center">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="my-8 text-center text-3xl">
              Nenhuma Categoria foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

export function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border">
      <header className="font-old bg-cyan-500 px-6 py-2 text-2xl text-white">
        Categoria
      </header>
      <p className="h-full bg-slate-200 p-8 text-3xl">{categoria.descricao}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex w-full items-center justify-center bg-cyan-300 py-2 text-slate-100 hover:bg-cyan-500 hover:font-bold"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex w-full items-center justify-center bg-red-400 text-slate-100 hover:bg-red-700 hover:font-bold"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}
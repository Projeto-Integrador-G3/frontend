import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"


interface CardCategoriasProps{
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-green-400 font-bold md:text-2xl text-white'>{categoria.tipo}</header>
            <p className='p-8 md:text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
            
            <div className="flex flex-col md:flex-row">
                <Link to={`/editarCategoria/${categoria.id}`}
                    className='font-bold text-white w-full bg-green-400 hover:bg-green-300
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`} className='font-bold text-white bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria
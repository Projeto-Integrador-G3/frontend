import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import Produto from "../../../models/Produto"
import { AuthContext } from "../../../contexts/AuthContext"

function DeletarProduto() {

  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {

      ToastAlerta('Erro, tente novamente', 'erro')

    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado', 'erro')
      navigate('/login')
    }
  }, [token])
  
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarProduto() {

    setIsLoading(true)

    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      ToastAlerta('Produto apagado com sucesso', 'sucesso')

    } catch (error) {
      ToastAlerta('Erro ao apagar a Produto', 'erro')
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/produtos")
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-green-700 text-white font-bold text-2xl'>Produto</header>
        <div className="p-4">
          <p className='text-xl h-full'>{produto.nome}</p>
          <p>{produto.preco}</p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar} >Não</button>
          <button className='w-full text-slate-100 bg-green-700 hover:bg-green-700 flex items-center justify-center' onClick={deletarProduto} >
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true} /> : <span>Sim</span>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto
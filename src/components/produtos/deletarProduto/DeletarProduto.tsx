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
    <div className='container md:w-1/3 mx-auto p-2 md:p-0 h-[80vh] md:my-auto'>
      <h1 className='text-3xl md:text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-green-400 text-white font-bold text-2xl'>Produto</header>
        <div className="p-4">
          
          <p className='font-bold text-xl h-full'>{produto.nome}</p>
          <p>{`Código: ${produto.id}`}</p>
          <p>{produto.descricao}</p>
          <p>{produto.cor}</p>
          <p>{produto.categoria?.descricao}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <button className='text-slate-100 bg-red-400 hover:bg-red-700 w-full py-2' onClick={retornar} >Não</button>
          <button className='w-full text-white bg-green-300 hover:bg-green-400 font-bold  flex items-center justify-center py-2' onClick={deletarProduto} >
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
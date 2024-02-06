import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { CartContext } from '../../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto } = useContext(CartContext)
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const { usuario, handleLogout } = useContext(AuthContext)
  const [allowEdit, setAllowEdit] = useState<string>('hidden')
  const [allowBuy, setAllowBuy] = useState<string>('block')

  useEffect(() => {
    if (usuario.token !== '' && usuario.usuario === 'root@root.com') {
      
        setAllowEdit('block')
        setAllowBuy('hidden')
        console.log(allowEdit)
    }else{
        setAllowEdit('hidden')
        setAllowBuy('block')
        console.log(allowEdit)
    }
  }, [usuario])

  return (

    <div className='border-green-400 border flex flex-col rounded-2xl overflow-hidden justify-between bg-white'>
      <div>
        <div className="flex w-full bg-green-400 py-3 items-center"/>
        <div className='p-4'>

          <img src={produto.foto} className='mt-1 h-40 max-w-75 mx-auto'
            alt={produto.nome} />

           <h3 className='text-right font-bold uppercase md:p-5'>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(produto.preco)}
          </h3>
          <p className='font-bold'>{produto.nome}</p>
          <p>{produto.descricao}</p>
          <p>{produto.cor}</p>
          <p>{produto.categoria?.descricao}</p>

          <div className="flex space-x-2">
            <button
              onClick={() => handleSizeChange('P')}
              className={`size-button ${selectedSize === 'P' ? 'selected' : ''} p-1 border-2 focus:outline-none focus:bg-green-400 focus:text-white active:bg-green-300 active:text-white`}
            >
              PP
            </button>
            <button
              onClick={() => handleSizeChange('P')}
              className={`size-button ${selectedSize === 'P' ? 'selected' : ''} p-1 border-2 focus:outline-none focus:bg-green-400 focus:text-white active:bg-green-300 active:text-white`}
            >
              P
            </button>
            <button
              onClick={() => handleSizeChange('M')}
              className={`size-button ${selectedSize === 'M' ? 'selected' : ''} p-1 border-2 focus:outline-none focus:bg-green-400 focus:text-white active:bg-green-300 active:text-white`}
            >
              M
            </button>
            <button
              onClick={() => handleSizeChange('G')}
              className={`size-button ${selectedSize === 'G' ? 'selected' : ''} p-1 border-2 focus:outline-none focus:bg-green-400 focus:text-white active:bg-green-300 active:text-white`}
            >
              G
            </button>
            <button
              onClick={() => handleSizeChange('G')}
              className={`size-button ${selectedSize === 'G' ? 'selected' : ''} p-1 border-2 focus:outline-none focus:bg-green-400 focus:text-white active:bg-green-300 active:text-white`}
            >
              GG
            </button>
            <button
              onClick={() => handleSizeChange('G')}
              className={`size-button ${selectedSize === 'G' ? 'selected' : ''} p-1 border-2 focus:outline-none focus:bg-green-400 focus:text-white active:bg-green-300 active:text-white`}
            >
              XGG
            </button>
          </div>


        </div>
      </div>
      <div className={`flex flex-wrap ${allowBuy}`}>
        <button className='w-full text-white bg-green-400 hover:bg-green-300 flex items-center 
                           justify-center py-2 font-bold'
          onClick={() => adicionarProduto(produto)}>
          Comprar
        </button>
      </div>

      <div className={`flex ${allowEdit}`}>
                <Link to={`/editarProduto/${produto.id}`}
                    className='font-bold text-white w-full bg-green-400 hover:bg-green-300
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarProduto/${produto.id}`} className='font-bold text-white bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
      

    </div>


  )
}

export default CardProduto


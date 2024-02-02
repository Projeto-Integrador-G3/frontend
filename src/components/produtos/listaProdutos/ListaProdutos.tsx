import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import { DNA } from 'react-loader-spinner';
import { ToastAlerta } from '../../../utils/ToastAlerta';
import Produto from '../../../models/Produto';
import CardProduto from '../cardProduto/CardProduto';
import { AuthContext } from '../../../contexts/AuthContext';


function ListaProdutos() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      
        ToastAlerta('Erro, tente novamente', 'erro')
    }
  }

  // useEffect(() => {
  //   if (token === '') {
  //     ToastAlerta('Você precisa estar logado', 'erro')
  //     navigate('/login')
  //   }
  // }, [token])

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {produtos.map((produto) => (
          <CardProduto key={produto.id} post={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;
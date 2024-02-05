import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

function FormularioProduto() {

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
        tipo: ''
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        preco: 0,
        foto: '',
        cor:'',
        tamanho: 0,
        categoria: null,
    });

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto, {
            headers: {
              'Authorization': token
            }
          })
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
              'Authorization': token
            }
          })
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
            console.log(categoria);

        }
    }, [id]);

    useEffect(() => {
        if (token === '') {
          ToastAlerta('Você precisa estar logado', '')
          navigate('/login')
        }
      }, [token])
      
    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovaProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true)

        console.log({ produto });

        if (id != undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                      'Authorization': token
                    }
                  })
                ToastAlerta('Produto atualizado com sucesso', 'sucesso');

            } catch (error: any) {
                ToastAlerta('Erro ao atualizar a Produto', 'erro');
            }

        } else {
            try {

                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                      'Authorization': token
                    }
                  })
                ToastAlerta('Produto cadastrado com sucesso', 'sucesso');

            } catch (error: any) {

                ToastAlerta('Erro ao cadastrar a Produto', 'erro');
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.tipo === '';


    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

            <form onSubmit={gerarNovaProduto} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do produto</label>
                    <input
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-green-300 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço do produto</label>
                    <input
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Preço"
                        name="preco"
                        required
                        className="border-2 border-green-300 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto do produto</label>
                    <input
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Foto"
                        name="foto"
                        required
                        className="border-2 border-green-300 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria da produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-green-300 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)} >
                        <option value="" selected disabled>Selecione um categoria</option>
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.tipo}</option>
                            </>
                        ))}

                    </select>
                </div>
                <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-green-200 bg-green-300 hover:bg-green-400 text-white font-bold w-1/2 mx-auto flex py-2 justify-center'>

                    {isLoading ? <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true} /> : <span> {id === undefined ? 'Cadastrar' : 'Editar'}</span>}

                </button>
            </form>
        </div>
    );
}

export default FormularioProduto;
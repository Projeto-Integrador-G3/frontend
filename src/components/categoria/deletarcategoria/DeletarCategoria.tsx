import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";

import { ThreeDots } from "react-loader-spinner";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";



function DeletarCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, { headers: { Authorization: token, } })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, favor logar novamente!', "")
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {

        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, { headers: { Authorization: token, } })
            ToastAlerta('A categoria foi excluída com sucesso!', "sucesso")
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, favor logar novamente!', "")
                handleLogout();
            } else {
                ToastAlerta('Erro ao excluir a categoria.', "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container md:w-1/3 mx-auto p-2 md:p-0 h-[80vh] md:my-auto'>
            <h1 className='text-3xl md:text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-green-400 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-2xl md:text-3xl bg-slate-00 h-full'>{categoria.descricao}</p>
                <div className="flex flex-col md:flex-row">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-700 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-white bg-green-300 hover:bg-green-400 font-bold  flex items-center justify-center py-2'
                        onClick={deletarCategoria}>
                        {isLoading ?
                            <ThreeDots
                                visible={true}
                                height="32"
                                width="32"
                                color="#a1a79f"
                                radius="9"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass="flex justify-center m-1"
                            /> :
                            <span>Sim</span>

                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria
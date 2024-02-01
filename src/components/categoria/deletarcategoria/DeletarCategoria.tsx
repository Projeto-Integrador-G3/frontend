import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";

import {  ThreeDots } from "react-loader-spinner";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";



function DeletarCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
   
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria,{ headers:{Authorization: token,}})
        } catch (error: any) {
            if (error.toString().includes('403')) {
             alert('O Token Expirou!')
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
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
            await deletar(`/categorias/${id}`,{ headers:{Authorization: token,}})
            alert('A categoria foi excluída com sucesso!')
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O Token Expirou!')
                handleLogout();
            } else {
               alert('Erro ao excluir a categoria.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-slate-600 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-00 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-slate-400 hover:bg-slate-700 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full font-bold bg-red-400 
                                   hover:bg-red-700 flex items-center justify-center'
                                   onClick={deletarCategoria}>
                         {isLoading ?
                        <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
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
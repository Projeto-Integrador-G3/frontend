import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";

import { ThreeDots } from "react-loader-spinner";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";


function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria,{
                headers: { Authorization: token },
              });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, favor logar novamente', "")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', "");
            navigate('/login');
        }
    }, [token]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
        console.log(JSON.stringify(categoria))
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, { headers: { 'Authorization': token } });
                ToastAlerta('A categoria foi atualizada com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O token expirou, favor logar novamente!', "")
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar a Categoria.', "erro")
                }
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, { headers: { 'Authorization': token } })
                ToastAlerta('A categoria foi cadastrada com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O token expirou, favor logar novamente!', "")
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar a categoria.', "erro")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto h-[80vh]">
            <h1 className="text-4xl text-center my-8  font-bold">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className=" font-bold">Descrição</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 border-green-300 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="tipo" className=" font-bold">Tipo</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='tipo'
                        className="border-2 border-green-300 rounded p-2"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded font-bold text-white bg-green-300 hover:bg-green-400
                     w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

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
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }

                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
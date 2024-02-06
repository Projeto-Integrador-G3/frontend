import { ReactNode, useContext, useEffect, useState } from "react";
import Carrossel from "../../components/carrossel/Carrossel";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import { AuthContext } from "../../contexts/AuthContext";

interface CardProdutoProps {
    imgUrl: string;
    nomeProduto: string;
    descricao: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({ imgUrl, nomeProduto, descricao }) => {
    return (
        <div className="container border flex flex-col rounded-2xl overflow-hidden justify-between ">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={imgUrl} alt={nomeProduto} className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">{nomeProduto}</h2>
                <p className="text-gray-700">{descricao}</p>
                <button className="mt-4 bg-green-400 text-white py-2 px-4 rounded-full">Comprar</button>
            </div>
        </div>
    );
};

function Home() {

    const { usuario, handleLogout } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== '' && usuario.usuario === 'root@root.com') {
        component = (
            <ModalProduto/>
        )
    }
    
    return (
        <>
            <Carrossel />
            <ListaProdutos />
            {component}
        </>

    )
}

export default Home
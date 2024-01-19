interface CardProdutoProps {
    imgUrl: string;
    nomeProduto: string;
    descricao: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({ imgUrl, nomeProduto, descricao }) => {
    return (
        <div className="flex-shrink-0 justify-between w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <img src={imgUrl} alt={nomeProduto} className="w-full h-32 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">{nomeProduto}</h2>
                <p className="text-gray-700">{descricao}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">Comprar</button>
            </div>
        </div>
    );
};

function Home() {
    return (
        <>

            <div className="container mx-auto mt-8 p-8 bg-white rounded-lg  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">UNI-O que uso não define meu gênero.</h2>
                    <p className="text-gray-700">Moda sem gênero.</p>
                </div>

                <div className="flex justify-center items-center">
                    <img src="https://cdn.discordapp.com/attachments/1159531504129552560/1197918672166072420/U.png?ex=65bd03b3&is=65aa8eb3&hm=5aa13a9ba86b41827767a66047d92164708bb30985e650065a50f5bfa4097401&" alt="Logo" className="w-32 h-32" />
                </div>
                <div className="container justify-between w-full mx-auto mt-8 flex  gap-5">
                    <CardProduto
                        imgUrl={"https://propetz.vtexassets.com/arquivos/ids/156866/CAMISA_UNISSEX_SLIM_PRETA_COSTAS.png?v=638103383796370000"}
                        nomeProduto={"batatinha"}
                        descricao={"123"}
                    />
                    <CardProduto
                        imgUrl={"https://propetz.vtexassets.com/arquivos/ids/156866/CAMISA_UNISSEX_SLIM_PRETA_COSTAS.png?v=638103383796370000"}
                        nomeProduto={"batatinha"}
                        descricao={"123"}
                    />
                    <CardProduto
                        imgUrl={"https://propetz.vtexassets.com/arquivos/ids/156866/CAMISA_UNISSEX_SLIM_PRETA_COSTAS.png?v=638103383796370000"}
                        nomeProduto={"batatinha"}
                        descricao={"123"}
                    />
                    <CardProduto
                        imgUrl={"https://propetz.vtexassets.com/arquivos/ids/156866/CAMISA_UNISSEX_SLIM_PRETA_COSTAS.png?v=638103383796370000"}
                        nomeProduto={"batatinha"}
                        descricao={"123"}
                    />
                </div>
            </div>

        </>

    )
}

export default Home
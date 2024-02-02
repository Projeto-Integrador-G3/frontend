import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";

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
    return (
        <>


            <div className='flex flex-row-reverse items-center my-4 mr-48'>
                <img className='rounded-full size-[10rem]'
                    src="https://ik.imagekit.io/lcjdr9dex/Uni.png?updatedAt=1705675506304" alt="Logo" />

                <div className='box-border px-8 text-justify flex flex-wrap items-end'>

                    <h2
                        className="text-4xl font-bold p-2">
                        UNI - O que uso não define meu gênero.
                    </h2>

                    <p className="text-4xl font-bold p-2">
                        Moda sem gênero
                    </p>

                </div>
            </div>


            <div className="flex justify-center w-full my-4">
                <div className="flex flex-col h-full">

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-[50px]">
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
                        <CardProduto
                            imgUrl={"https://propetz.vtexassets.com/arquivos/ids/156866/CAMISA_UNISSEX_SLIM_PRETA_COSTAS.png?v=638103383796370000"}
                            nomeProduto={"batatinha"}
                            descricao={"123"}
                        />
                    </div>
                </div>
            </div>

            {<ListaProdutos />}
        </>

    )
}

export default Home
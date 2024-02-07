import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import CardCart from "../cardCart/CardCart";

function Cart() {
  const navigate = useNavigate();
  const { items, limparCart } = useContext(CartContext);

  return (
    <div className="flex flex-col justify-center min-h-screen p-4 md:p-8">
      <h1 className="text-4xl text-center my-4">Carrinho de Compras</h1>
      <h2 className="text-2xl text-center my-4">
        {items.length === 0 ? "O Carrinho está vazio!" : ""}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((produto) => (
          <CardCart key={produto.id} item={produto} />
        ))}
      </div>

      <button
        className="rounded text-white bg-green-400 hover:bg-green-300 px-4 py-2 mx-auto flex justify-center cursor-pointer"
        type="submit"
        disabled={items.length === 0 ? true : false}
        onClick={limparCart}
      >
        Finalizar Compra
      </button>
    </div>
  );
}

export default Cart;

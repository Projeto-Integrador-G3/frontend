import { List, ShoppingCart, X } from "@phosphor-icons/react";

import { ReactNode, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'sucesso')
    navigate('/login')
  }

  let navbar: ReactNode

  if (usuario.token === "") {
    navbar = (
      <>
        <li className="hover:text-green-400">
          <Link to='/login' className="lg:px-5 p-2 block">Login</Link>
        </li>
        <li>
          <Link to='/cadastro' className="lg:px-8 p-2 block rounded-xl bg-green-400 hover:bg-green-300">Cadastre-se</Link>
        </li>
      </>
    )
  } else {
    navbar = (
      <>
        <li>
          <Link to='' onClick={logout} className='lg:px-8 p-2 block rounded-xl hover:text-green-400 hover:underline'>Sair</Link>
        </li>
        <li>
          <Link to='/cart' className="gap-4 hover:text-green-400"><ShoppingCart size={28} weight='fill' /></Link>
        </li>
      </>
    );
  }


  return (
    <header className='bg-green-300 py-4'>
      <div className='flex items-center justify-between xl:max-w-9xl xl:mx-auto px-[4%] flex-wrap w-full text-white'>
        <Link to='/' className="text-2xl font-bold">Uni</Link>
        {
          open ?

            <X
              size={24}
              color="#FFF"
              weight="bold"
              className="lg:hidden block h-6 w-6 cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            :
            <List
              size={24}
              color="#FFF"
              weight="bold"
              className="lg:hidden block h-6 w-6 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
        }


        <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
          <ul className="flex flex-col items-start lg:flex-row lg:justify-between">
            <li className="hover:text-green-400">
              <Link to='/produtos' className='lg:px-5 p-2 block'>Produtos</Link>
            </li>
            {usuario.token !== "" && usuario.usuario === "root@root.com" ? (

              <>
                <li className="hover:text-green-400">
                  <Link to='/cadastroProduto' className='lg:px-5 p-2 block'>Add Produto</Link>
                </li>
                <li className="hover:text-green-400">
                  <Link to='/categorias' className='lg:px-5 p-2 block'>Categoria</Link>
                </li>
                <li className="hover:text-green-400">
                  <Link to='/cadastrarCategoria' className='lg:px-5 p-2 block'>Add Categoria</Link>
                </li>

                <li className="hover:text-green-400">
                  <Link to='/sobre' className="lg:px-5 p-2 block">Sobre</Link>
                </li>
              </>
            ) : (
              <li className="hover:text-green-400">
                <Link to='/sobre' className="lg:px-5 p-2 block">Sobre</Link>
              </li>
            )}
            <li className="hover:text-green-400">
              <Link to='/contato' className="lg:px-5 p-2 block">Contato</Link>

            </li>

            {navbar}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
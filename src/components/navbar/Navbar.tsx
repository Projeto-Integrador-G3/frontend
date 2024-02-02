import { List, X } from "@phosphor-icons/react";

import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className='bg-green-300 py-4'>
      <div className='flex items-center justify-between xl:max-w-9xl xl:mx-auto px-[4%] flex-wrap w-full text-white'>
        <a href='/' className="text-2xl font-bold">Uni</a>
        {
          open ?

            <X
              size={24}
              color="#050505"
              weight="bold"
              className="lg:hidden block h-6 w-6 cursor-pointer"
              onClick={() => setOpen(!open)}
            />

            :
            <List
              size={24}
              color="#050505"
              weight="bold"
              className="lg:hidden block h-6 w-6 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
        }


        <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
          <ul className="flex flex-col items-start lg:flex-row lg:justify-between">
            <li>
              <Link to='/produtos' className='lg:px-5 p-2 block'>Produtos</Link>
            </li>
            <li>
              <Link to='/sobre' className="lg:px-5 p-2 block">Sobre</Link>
            </li>
            <li>
              <Link to='/categorias' className='lg:px-5 p-2 block'>Categoria</Link>
            </li>
            <li>
              <Link to='/cadastrarCategoria' className='lg:px-5 p-2 block'>Cadastrar Categoria</Link>
            </li>
            <li>
              <Link to='/contato' className="lg:px-5 p-2 block">Contato</Link>
            </li>
            <li>
              <Link to='/login' className="lg:px-5 p-2 block">Login</Link>
            </li>
            <li>
              <Link to='/cadastro' className="lg:px-8 p-2 block rounded-xl bg-green-400 hover:bg-green-300">Cadastre-se</Link>
            </li>

          </ul>

        </nav>  
      </div>
    </header>
  )
}

export default Navbar
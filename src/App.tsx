import './App.css'
import Sobre from './pages/sobre/Sobre'
import Contato from './pages/contato/Contato'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import ListaCategorias from './components/categoria/listaCategoria/ListaCategorias'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto'
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto'
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos'

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer/>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastroProduto" element={<FormularioProduto />} />
            <Route path="/editarProduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App

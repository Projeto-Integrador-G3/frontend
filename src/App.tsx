

import './App.css'
import Sobre from './pages/sobre/Sobre'
import Contato from './pages/contato/Contato'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />


        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App

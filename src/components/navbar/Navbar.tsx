import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full bg-gray-300  flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <a href='/home' className="text-2xl font-bold">Uni</a>
          <div className='flex gap-4'>
            <a href='/sobre'>Sobre</a>
            <a href='/contato'>Contato</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="flex items-center justify-center h-screen font-bold ">
      <form className="flex justify-center items-center flex-col w-1/2 gap-4">
        <h2 className="text-slate-900 text-5xl ">Entrar</h2>
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuario"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2"

          />
        </div>
        <button type='submit' className="rounded bg-gray-600 hover:bg-gray-400 text-white w-1/2 py-2 flex justify-center">
          Entrar
        </button>

        <hr className="border-slate-800 w-full" />

        <p>
          Ainda não tem uma conta?
          <Link to="/cadastro" className="text-gray-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
      <div className="fundoLogin hidden lg:block"></div>
    </div>
  )
}

export default Login
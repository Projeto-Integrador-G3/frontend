
function Contato() {

    return (
        <div className="flex justify-center md:h-[80vh]" style={{ color: '#CACBCD' }}>
            <div className="md:container grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-slate-900 p-4">
                <div className="text-center py-8 md:my-0">
                    <h1 className="text-6xl md:mb-4">UNI</h1>
                    <h2 className="text-2xl font-bold mb-4"> O que uso não define meu gênero.</h2>
                    <p>
                        Para conversar conosco ou realizar alguma sugestão,
                        por favor, preencha as informações ao lado:
                    </p>
                </div>

                <form className="space-y-3 flex flex-col text-slate-900 font-bold">
                    <label htmlFor="nome" className="block ">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="form-input text-green-400 border-2 rounded w-full p-2"
                    />

                    <label htmlFor="email" className="block">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-input text-green-400 border-2 rounded w-full p-2"
                    />

                    <label htmlFor="telefone" className="block">
                        Telefone
                    </label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Telefone"
                        className="form-input text-green-400 border-2 rounded w-full p-2"
                    />

                    <label htmlFor="assunto" className="block">
                        Assunto
                    </label>
                    <textarea
                        id="assunto"
                        name="assunto"
                        placeholder="Assunto"
                        rows={3}
                        className="form-input text-green-400 border-2 rounded w-full p-2"
                    />
                    <div className="flex justify-center">
                        <button type='submit' className="rounded mt-4 bg-green-300 hover:bg-green-400 text-white w-1/2 py-2 flex justify-center">
                            <span>Enviar</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contato;
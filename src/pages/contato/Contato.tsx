
function Contato() {

    return (
        <div id="container" className="flex justify-center bg-gray-900 h-screen" style={{ color: '#CACBCD' }}>
            <div id="subcontainer" className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                <h1 className="text-6xl font-roboto italic mb-4 text-center">UNI</h1>
                    <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Nosso Formulário</h2>
                    <p>
                        Para conversar conosco ou realizar alguma doação,
                        Por favor, preencha as informações ao lado.
                    </p>
                </div>

                <div className="space-y-3">
                    <label htmlFor="nome" className="block text-sm font-medium">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="form-input text-black border-2 rounded w-full"
                    />

                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-input text-black border-2 rounded w-full"
                    />

                    <label htmlFor="telefone" className="block text-sm font-medium">
                        Telefone
                    </label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Telefone"
                        className="form-input text-black border-2 rounded w-full"
                    />

                    <label htmlFor="assunto" className="block text-sm font-medium">
                        Assunto
                    </label>
                    <textarea
                        id="assunto"
                        name="assunto"
                        placeholder="Assunto"
                        rows={3}   
                        className="form-input text-black border-2 rounded p-2 w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contato;
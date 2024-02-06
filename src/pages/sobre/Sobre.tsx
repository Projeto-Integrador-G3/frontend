import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";


import React from 'react';
interface CardIntegrantesProps {
    imgUrl: string;
    nome: string;
    sobre: string;
    linkedinUrl: string;
    gitHubUrl: string;
    direita: boolean;
}

const CardIntegrante: React.FC<CardIntegrantesProps> = ({ imgUrl, nome, sobre, linkedinUrl, gitHubUrl, direita }) => {

    const classDireita = direita ? "flex-row" : "flex-row-reverse"

    return (
        <div className={`flex ${classDireita} items-center pr-[100px] pb-[100px] pl-[100px]`}>
            <div className="rounded-full box-border p-2 border-4 border-green-300 hover:border-green-400 transform transition duration-500 hover:scale-150">
                <img className='rounded-full max-w-36  object-cover' src={imgUrl} alt={`foto ${nome}`} />
            </div>


            <div className='box-border px-8 text-justify flex flex-wrap items-end'>

                <h2 className="text-4xl font-bold p-2 hover:text-green-300">
                    {nome}
                </h2>

                <p className='p-2'>
                    {sobre}
                </p>

                <div className="flex gap-x-5">
                    <a className="transform transition duration-500 hover:scale-150 text-green-400" href={linkedinUrl} target="_blank">
                        <LinkedinLogo size={40} weight='bold' />
                    </a>

                    <a className="gap gap-2 transform transition duration-500 hover:scale-150 text-green-300" href={gitHubUrl} target="_blank">
                        <GithubLogo size={40} weight='bold' />
                    </a>
                </div>
            </div>
        </div>

    );
};

function Sobre() {
    return (
        <>
            <div className='min-h-screen '>
                <div className='pr-[100px] pt-[100px] pl-[100px]'>
                    <div className='flex flex-row items-center'>
                        <img className='size-[26rem]' src="https://ik.imagekit.io/4zbah2xtl/img/uni500x500-removebg-preview.png?updatedAt=1707232264334"
                            alt="logo Uni" />

                        <div className='box-border px-8 text-justify items-end'>
                            <div>
                                <h1 className="
                                text-5xl
                                font-bold
                                p-2">
                                    Sobre o projeto
                                </h1>

                                <p className='p-2'>
                                    O problema social abordado no projeto está relacionado à falta de igualdade de gênero, com ênfase na discriminação nas indústrias de moda, conforme preconizado pelo ODS 5 - Igualdade de Gênero.
                                    O texto destaca barreiras, como a "taxa rosa" em produtos femininos, padrões binários de modelagem em roupas e tamanhos padronizados.
                                    A falta de conscientização da indústria da moda sobre a diversidade de gênero e corpos resulta em uma oferta deficiente de roupas, excluindo pessoas que fogem dos padrões normativos ou cobrando valores acima do mercado.
                                </p>

                                <p className='p-2'>
                                    A solução escolhida foi criar um E-Commerce, motivada pela escassez de lojas que atendem diversos públicos sem distinção de preço.
                                    O projeto, intitulado UNI - O que uso não define meu gênero, visa a moda sem gênero, eliminando distinções de preços e oferecendo variedade em modelagens para atender a todos os corpos e gostos.
                                    A aplicação busca contribuir para a solução do problema social, proporcionando atendimento amplo a segmentos sociais afetados pela desigualdade no mercado industrial,
                                    uprindo a carência na indústria da moda para aqueles que não se encaixam nos "padrões de corpo" convencionais, oferecendo opções a preços competitivos.
                                </p>

                            </div>
                            <div className=" flex justify-end text-green-300">
                                <div className="transform transition duration-500 hover:scale-150">
                                    <a href="https://github.com/Projeto-Integrador-G3" target="_blank">
                                        <GithubLogo size={40} weight='bold' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="
                        text-5xl
                        font-bold
                        p-[100px]
                        text-center">
                        Sobre nós
                    </h1>
                </div>

                <div>

                    <div>
                        <CardIntegrante

                            imgUrl={"https://ik.imagekit.io/zcioxdl6o/foto-removebg-preview.png?updatedAt=1706885450373"}
                            nome={"Antonio Vinicius Veras Bandeira"}
                            sobre={`Desenvolvedor Full Stack Java comprometido e proativo com amplo conhecimento em princípios SOLID,
                        Padrões de Projetos, API REST, MySql e React. Atuei no setor gráfico durante mais de 5 anos na área de
                        processamento de dados onde adquiri habilidades cruciais para minha evolução profissional,
                        como: atenção aos detalhes, comunicação, capacidade de identificar e corrigir problemas e a lógica de negócios para criação de softwares com foco no atendimento de Órgãos Públicos, como por exemplo: Geração de Guias de IPTU/ISSQN e Contas de água.`}
                            linkedinUrl={"https://www.linkedin.com/in/antoniovvbandeira/"}
                            gitHubUrl={"https://github.com/antonioviniciusvb"}
                            direita={true}

                        />
                        <CardIntegrante

                            imgUrl={"https://ik.imagekit.io/zcioxdl6o/elisabeth.png?updatedAt=1706886209204"}
                            nome={"Elisabeth Aparecida dos Santos Silva"}
                            sobre={`Olá! Meu nome é Elisabeth, sou formada em Gestão da Tecnologia da informação, e no momento estou realizando o Bootcamp da Generation Brasil T68 para me tornar uma Desenvolvedora Full Stack Java Júnior.
                        Possuo experiência em Desenvolvimento Front-end e busco me aperfeiçoar ainda mais.`}
                            linkedinUrl={"https://www.linkedin.com/in/elisabeth-aparecida/"}
                            gitHubUrl={"https://github.com/bettyap"}
                            direita={false}

                        />
                        <CardIntegrante

                            imgUrl={"https://ik.imagekit.io/zcioxdl6o/148586794-removebg-preview.png?updatedAt=1706882346779"}
                            nome={"Felipe Vieira"}
                            sobre={`Atuei na área de segurança por 8 anos após esse período migrei para área da tecnologia onde estou me formando em DEV Fullstack !
                        Em formação em Análise e Desenvolvimento de Sistemas pela Universidade cruzeiro do sul.`}
                            linkedinUrl={"https://www.linkedin.com/in/felipe-vieira-b4473518b/"}
                            gitHubUrl={"https://github.com/berluccini"}
                            direita={true}

                        />

                        <CardIntegrante

                            imgUrl={"https://ik.imagekit.io/zcioxdl6o/gercidio-removebg-preview.png?updatedAt=1706886312088"}
                            nome={"Gercidio Junior Valeriano Pereira"}
                            sobre={`Sou um profissional com o objetivo de integrar diferentes áreas de conhecimento, como humanidades, saúde e tecnologia, para promover soluções inovadoras e sustentáveis.
                        Possuo graduação em Ciências e Humanidades pela UFABC, onde desenvolvi habilidades de pesquisa e adquiri expertise em geoprocessamento.
                        Atuo ativamente na análise de dados há mais de 5 anos.
                        Durante a pandemia, elaborei relatórios sobre a situação dos povos indígenas no contexto da COVID-19.
                        Meu trabalho foi pioneiro, sendo o primeiro a analisar tais dados, e resultou em publicações em conceituadas revistas científicas.`}
                            linkedinUrl={"https://www.linkedin.com/in/gercidiovaleriano/"}
                            gitHubUrl={"https://github.com/Gercidio"}
                            direita={false}
                        />

                        <CardIntegrante

                            imgUrl={"https://ik.imagekit.io/zcioxdl6o/kendal.png?updatedAt=1706886846741"}
                            nome={"Kendal Katherine Correia"}
                            sobre={` Sou pessoa desenvolvedora Java, a procura da primeira oportunidade na área, mas dediquei 8 anos ao
                        atendimento ao público com experiência comprovada, capaz de resolver diversas situações com o
                        diálogo, e tenho sólido conhecimento em Java React, mas também atuei em projetos relacionados ao
                        desenvolvimento web com PHP, CSS, JavaScript e desenvolvimento mobile com Android Studio.
                        Possuo um perfil planejador que me permite saber o caminho para atingir meus objetivos pessoais e
                        profissionais. Como desenvolvedora Java Junior tenho habilidade em ser proativa e isso me permite
                        buscar soluções para as adversidades encontradas no desenvolvimento de projetos.`}
                            linkedinUrl={"https://www.linkedin.com/in/kendal-katherine-correia/"}
                            gitHubUrl={"https://github.com/Kendal-Katherine"}
                            direita={true}
                        />

                        <CardIntegrante

                            imgUrl={"https://ik.imagekit.io/zcioxdl6o/matheus.png?updatedAt=1706885687644"}
                            nome={"Matheus Soares Rodrigues"}
                            sobre={`Sou um estudante apaixonado por Tecnologia e Segurança da Informação na FATEC São Caetano do Sul.
                        Minha afinidade com o campo da Tecnologia vem desde antes de ingressar nessa área.
                        Durante meu tempo no curso de mecânica de usinagem no Senai, tive a oportunidade de interagir com tornos CNC,
                        o que despertou meu interesse pela programação e pela eficiência proporcionada pela tecnologia.`}
                            linkedinUrl={"https://www.linkedin.com/in/matheus-soares-rodrigues-a56b11238/"}
                            gitHubUrl={"https://github.com/MatheusSoares48"}
                            direita={false}
                        />

                        <CardIntegrante

                            imgUrl={"https://ik.imagekit.io/zcioxdl6o/sthefany-removebg-preview.png?updatedAt=1706887451114"}
                            nome={"Sthefany Sousa da Silva Bastos"}
                            sobre={`Experiência em Java , Spring Boot e MySQL, complementada por habilidades sólidas em HTML5,
                        CSS3, JavaScript e TypeScript. Conhecimento ágil em Scrum. Apaixonada por
                        crescimento pessoal, valorizando detalhes, trabalho em equipe e comunicação eficaz.
                        Competências em Git, GitHub, React.js e Programação Orientada a Objetos (POO) completam
                        meu perfil para projetos desafiadores. Meu endereço de email caso tenham interesse ou dúvidas: sthefanyssbastos@hotmail.com.
                        Espero você!`}
                            linkedinUrl={"https://www.linkedin.com/in/sthefany-sousa-da-silva-bastos-/"}
                            gitHubUrl={"https://github.com/SthefayBastos"}
                            direita={true}
                        />

                    </div>
                </div>
            </div>
        </>
    );
}

export default Sobre

# Projeto Integrador Generation Brasil

## Grupo 3 - Turma 68

O Problema Social

ODS 5 - Igualdade de Gênero
Meta: 5.1 - Acabar com todas as formas de discriminação contra todas as mulheres e meninas em toda partes;

Barreira de preço nos produtos destinados às mulheres (faixa rosa); 
“Padrão” de modelagem binário nas roupas; 
“Padrão” de modelagem de tamanho. 


![Logo](https://ik.imagekit.io/zcioxdl6o/uni_logo-removebg-preview.png_ex=65cd401f&is=65bacb1f&hm=8c75124bbb7d8e9bc88eefd12f59b105fb8aa653bae529a65576903ef82c1b10&?updatedAt=1706882280788)

Identificando esses problemas e decidimos desenvolver um e-commerce voltado para o ramo de vestuário sem gênero, sem distinção de preços nas peças e possibilitando mais variedades.

## Stack utilizada

**Back-end:** 
- Java Spring boot
- MYSQL

**Front-end:** 
- React
- TailwindCSS
- TypeScript 




## Aprendizados

Desenvolver esse projeto em equipe do zero ao deploy nos deu muitos aprendizados, tanto em hardskills quanto em softskills. Fomos responsáveis por pensar toda a organização e fluxo de trabalho, nor organizando coletivamente, de forma horizontal, com uma comunicação boa e constante, desenvolvendo a maioria das coisas em pair programming. 

Fomos para além de aprender só a linguagem, seja ela Java, JavaScript, focamos em aprender os fundamentos do desenvolvimento, com foco em Programação Orientada a Objetos, arquitetura de software e daqui pra frente, além de dominar os frameworks, bibliotecas, também estudaremos sobre microserviços, arquitetura de software, DevOps e cloud, para estarmos ainda mais preparados para o mercado de trabalho.


## Roadmap

- Melhorar o suporte de navegadores e responsividade

- Adicionar integrações

- Melhorar o API Throttling

- Diferenciação de permissões de usuários

- Deploy em AWS


## Documentação da API

### Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |

### Group Autenticação - OAuth

Nossa API utiliza [OAuth2](https://oauth.net/2/) como forma de autenticação/autorização.


### Respostas

| Código | Descrição |
|---|---|
| `200` | Sucesso!|
| `201` | Objeto persistido!|
| `204` | Objeto excluído! |
| `400` | Erro na requisição! |
| `401` | Acesso não autorizado! |
| `403` | Acesso proibido! |
| `404` | Objeto não encontrado! |
| `500` | Erro na aplicação|

### Listar
As ações de `listar` permitem o envio dos seguintes parâmetros:

| Parâmetro | Descrição |
|---|---|
| `filtro` | Filtra dados pelo valor informado. |
| `page` | Informa qual página deve ser retornada. |




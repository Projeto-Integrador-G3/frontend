import Categoria from "./Categoria"

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    foto: string;
    cor:string;
    tamanho: number;
    categoria?: Categoria | null;
}

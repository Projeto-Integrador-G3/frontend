import Produto from "./Produto"

export default interface Categoria {
    id: number;
    descricao: string;
    tipo: string;
    produto?: Produto | null;
}

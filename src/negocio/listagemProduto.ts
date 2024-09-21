import Empresa from "../modelo/empresa";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
    private empresa: Empresa
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    public listar(): void {
        console.log(`Produtos:`)
        this.empresa.getProdutos.forEach((produto, i) => {
            console.log(`Id: ${i}`)
            console.log(`Nome: ${produto.nome}`)
            console.log(`Valor: ${produto.valor}`)
            console.log(`Qauntidade: ${produto.quantidade}`)
        })
    }
}
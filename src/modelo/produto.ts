export default class Produto {
    public nome: string
    public valor: number
    public quantidade: number
    constructor(nome: string, valor: number, quantidade: number){
        this.nome = nome
        this.valor = valor
        this.quantidade = quantidade
    }

    public set setNome(nome: string){
        this.nome = nome
    }
    public set setValor(valor: number){
        this.valor = valor
    }
    public set setQuantidade(quantidade: number){
        this.quantidade = quantidade
    }
}
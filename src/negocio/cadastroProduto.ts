import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro{
    private empresa: Empresa
    private entrada: Entrada
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto('Nome: ')
        let valor = this.entrada.receberNumero('Valor: ')
        let quantidade = this.entrada.receberNumero('Quantidade: ')
        let novoProduto = new Produto(nome, valor, quantidade)
        let produtos = this.empresa.getProdutos
        if(produtos){
            produtos.push(novoProduto)
            this.empresa.setProdutos = produtos
            console.log(`${nome} cadastrado com sucesso!`)
            return
        }
        this.empresa.setProdutos = [novoProduto]
        console.log(`${nome} cadastrado com sucesso!`)
    }
}
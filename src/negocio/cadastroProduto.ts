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

    public updateProduto(): void{
        let nomeProduto = this.entrada.receberTexto('Nome do produto a ser atualizado: ')
        let produto = this.empresa.getProdutos.find(p => p.nome === nomeProduto)
        if(produto){
            let opcao: number
            do{
                console.log(`O que deseja atualziar?`)
                console.log(`1 - Nome`)
                console.log(`2 - Valor`)
                console.log(`3 - Quantidade`)
                console.log(`4 - Tudo`)
                console.log(`0 - Voltar`)
                opcao = this.entrada.receberNumero(`Opção: `)
                switch(opcao){
                    case 1:
                        let novoNome = this.entrada.receberTexto(`Novo nome: `)
                        produto.setNome = novoNome
                        break
                    case 2:
                        let novoValor = this.entrada.receberNumero(`Novo valor: `)
                        produto.setValor = novoValor
                        break
                    case 3:
                        let novaQuantidade = this.entrada.receberNumero(`Nova quantidade: `)
                        produto.setQuantidade = novaQuantidade
                        break
                    case 4:
                        novoNome = this.entrada.receberTexto(`Novo nome: `)
                        novoValor = this.entrada.receberNumero(`Novo valor: `)
                        novaQuantidade = this.entrada.receberNumero(`Nova quantidade: `)
                        produto.setNome = novoNome
                        produto.setValor = novoValor
                        produto.setQuantidade = novaQuantidade
                        break
                    default:
                        console.log(`Opção inválida`)
                }
            }while(opcao !== 0)
            console.log(`Produto atualziado!`)
        }else{
            console.log(`Produto não encontrado!`)
            return
        }
    }

    public deletarProduto(): void{
        let nomeProduto = this.entrada.receberTexto(`Produto a ser deletado: `)
        let produtoExiste = this.empresa.getProdutos.find(e => e.nome === nomeProduto)
        if(produtoExiste){
            let produtos = this.empresa.getProdutos.filter(e => e.nome !== nomeProduto)
            this.empresa.setProdutos = produtos
            console.log(`Produto excluído com sucesso!`)
            return
        }
        console.log(`Produto não encontrado!`)
    }
}
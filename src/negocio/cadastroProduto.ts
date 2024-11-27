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
        if(isNaN(valor)){
            console.log('Valor inválido')
            return
        }
        let quantidade = this.entrada.receberNumero('Quantidade: ')
        if(isNaN(quantidade)){
            console.log('Valor inválido')
            return
        }

        let id = 0
        if(this.empresa.getProdutos.length > 0){
            const ultimoProdutoId = this.empresa.getProdutos[this.empresa.getProdutos.length - 1]['id']
            id = ultimoProdutoId + 1
        }

        let novoProduto = new Produto(id, nome, valor, quantidade)
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
        let id = this.entrada.receberNumero('Id do produto a ser atualizado: ')
        const indiceProduto = this.empresa.getProdutos.findIndex((s) => s.id === id)
        let produto = this.empresa.getProdutos[indiceProduto]
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
                let novoNome: string
                let novoValor: number
                let novaQuantidade: number
                switch(opcao){
                    case 1:
                        novoNome = this.entrada.receberTexto(`Novo nome: `)
                        produto.setNome = novoNome
                        break
                    case 2:
                        novoValor = this.entrada.receberNumero(`Novo valor: `)
                        if(isNaN(novoValor)){
                            console.log('Valor inválido')
                            break
                        }
                        produto.setValor = novoValor
                        break
                    case 3:
                        novaQuantidade = this.entrada.receberNumero(`Nova quantidade: `)
                        if(isNaN(novaQuantidade)){
                            console.log('Valor inválido')
                            break
                        }
                        produto.setQuantidade = novaQuantidade
                        break
                    case 4:
                        novoNome = this.entrada.receberTexto(`Novo nome: `)
                        novoValor = this.entrada.receberNumero(`Novo valor: `)
                        if(isNaN(novoValor)){
                            console.log('Valor inválido')
                            break
                        }
                        novaQuantidade = this.entrada.receberNumero(`Nova quantidade: `)
                        if(isNaN(novaQuantidade)){
                            console.log('Valor inválido')
                            break
                        }
                        produto.setNome = novoNome
                        produto.setValor = novoValor
                        produto.setQuantidade = novaQuantidade
                        console.log('Produto atualizado com sucesso!')
                        break
                    default:
                        console.log(`Opção inválida`)
                }
            }while(opcao !== 0)
            console.log(`Produto atualizado!`)
        }else{
            console.log(`Produto não encontrado!`)
            return
        }
    }

    public deletarProduto(): void{
        let id = this.entrada.receberNumero(`Id do produto a ser deletado: `)
        const ultimoProdutoId = this.empresa.getProdutos[this.empresa.getProdutos.length - 1]['id']
        if(id >= 0 && id <= ultimoProdutoId){
            const indiceProduto = this.empresa.getProdutos.findIndex((s) => s.id === id)
            this.empresa.getProdutos.splice(indiceProduto, 1)
            console.log('Produto deletado com sucesso')
        }else{
            console.log('Produto não encontrado')
        }
    }
}
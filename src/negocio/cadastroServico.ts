import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro{
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

        let id = 0
        if(this.empresa.getServicos.length > 0){
            const ultimoServicoId = this.empresa.getServicos[this.empresa.getServicos.length - 1]['id']
            id = ultimoServicoId + 1
        }

        let novoServico = new Servico(id, nome, valor)
        let Servicos = this.empresa.getServicos
        if(Servicos){
            Servicos.push(novoServico)
            this.empresa.setServicos = Servicos
            console.log(`${nome} cadastrado com sucesso!`)
            return
        }
        this.empresa.setServicos = [novoServico]
        console.log(`${nome} cadastrado com sucesso!`)
    }

    public updateServico(): void{
        let id = this.entrada.receberNumero('Id do serviço a ser atualizado: ')
        const indiceServico = this.empresa.getServicos.findIndex((s) => s.id === id)
        let servico = this.empresa.getServicos[indiceServico]
        if(servico){
            let opcao: number
            do{
                console.log(`O que deseja atualziar?`)
                console.log(`1 - Nome`)
                console.log(`2 - Valor`)
                console.log(`3 - Tudo`)
                console.log(`0 - Voltar`)
                opcao = this.entrada.receberNumero(`Opção: `)
                let novoNome: string
                let novoValor: number
                switch(opcao){
                    case 1:
                        novoNome = this.entrada.receberTexto(`Novo nome: `)
                        servico.setNome = novoNome
                        break
                    case 2:
                        novoValor = this.entrada.receberNumero(`Novo valor: `)
                        if(isNaN(novoValor)){
                            console.log('Valor inválido')
                            break
                        }
                        servico.setValor = novoValor
                        break
                    case 3:
                        novoNome = this.entrada.receberTexto(`Novo nome: `)
                        novoValor = this.entrada.receberNumero(`Novo valor: `)
                        if(isNaN(novoValor)){
                            console.log('Valor inválido')
                            break
                        }
                        servico.setNome = novoNome
                        servico.setValor = novoValor
                        break
                    default:
                        console.log(`Opção inválida`)
                }
            }while(opcao !== 0)
                console.log(`Serviço atualziado!`)
        }else{
            console.log(`Servico não encontrado!`)
            return
        }
    }

    public deletarServico(): void{
        let id = this.entrada.receberNumero(`Id do serviço a ser deletado: `)
        const ultimoServicoId = this.empresa.getServicos[this.empresa.getServicos.length - 1]['id']
        if(id >= 0 && id <= ultimoServicoId){
            const indiceServico = this.empresa.getServicos.findIndex((s) => s.id === id)
            this.empresa.getServicos.splice(indiceServico, 1)
            console.log('Serviço deletado com sucesso')
        }else{
            console.log('Serviço não encontrado')
        }
    }
}
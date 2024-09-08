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
        let novoServico = new Servico(nome, valor)
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
        let nomeServico = this.entrada.receberTexto('Nome do Servico a ser atualizado: ')
        let Servico = this.empresa.getServicos.find(p => p.nome === nomeServico)
        if(Servico){
            let opcao: number
            do{
                console.log(`O que deseja atualziar?`)
                console.log(`1 - Nome`)
                console.log(`2 - Valor`)
                console.log(`3 - Tudo`)
                console.log(`0 - Voltar`)
                opcao = this.entrada.receberNumero(`Opção: `)
                switch(opcao){
                    case 1:
                        let novoNome = this.entrada.receberTexto(`Novo nome: `)
                        Servico.setNome = novoNome
                        break
                    case 2:
                        let novoValor = this.entrada.receberNumero(`Novo valor: `)
                        Servico.setValor = novoValor
                        break
                    case 3:
                        novoNome = this.entrada.receberTexto(`Novo nome: `)
                        novoValor = this.entrada.receberNumero(`Novo valor: `)
                        Servico.setNome = novoNome
                        Servico.setValor = novoValor
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
        let nomeServico = this.entrada.receberTexto(`Servico a ser deletado: `)
        let ServicoExiste = this.empresa.getServicos.find(e => e.nome === nomeServico)
        if(ServicoExiste){
            let Servicos = this.empresa.getServicos.filter(e => e.nome !== nomeServico)
            this.empresa.setServicos = Servicos
            console.log(`Servico excluído com sucesso!`)
            return
        }
        console.log(`Servico não encontrado!`)
    }
}
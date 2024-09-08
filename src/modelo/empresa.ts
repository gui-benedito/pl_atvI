import Entrada from "../io/entrada"
import Cliente from "./cliente"
import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"

export default class Empresa{
    CadastroServico() {
        throw new Error("Method not implemented.")
    }
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.entrada = new Entrada
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public set setClientes(newClientes: Array<Cliente>){
        this.clientes = newClientes
    }

    public set setProdutos(produtos: Array<Produto>){
        this.produtos = produtos
    }

    public set setServicos(servicos: Array<Servico>){
        this.servicos = servicos
    }

    public findClienteByCpf(cpf: string){
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf)
    }

    public confirmaProduto(): boolean{
        if(!this.produtos.length){
            console.log(`Sem produtos cadastrados!`)
            return false
        }
        return true
    }

    public confirmaServico(): boolean{
        if(!this.servicos.length){
            console.log(`Sem serviços cadastrados!`)
            return false
        }
        return true
    }

    public confirmaClientes(): boolean{
        if(!this.clientes.length){
            console.log(`Sem clientes cadastrados!`)
            return false
        }
        return true
    }

    public deletar(): void{
        let nome = this.entrada.receberTexto(`Nome: `)
        let newClientes = this.clientes.filter((c) => c.nome !== nome)
        this.setClientes = newClientes
        console.log(`Cliente deletado com sucesso!`)
    }

    public updateCliente(){
        let nome = this.entrada.receberTexto(`Nome: `)
        let cliente = this.getClientes.find((c) => c.nome === nome)
        if(cliente){
            let nome = this.entrada.receberTexto(`Novo nome do cliente: `)
            let nomeSocial = this.entrada.receberTexto(`Novo nome social do cliente: `)

            let valorCPF = this.entrada.receberTexto(`Novo número do cpf: `);
            let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesDataCPF = dataCPF.split('/')
            let anocpf = new Number(partesDataCPF[2].valueOf()).valueOf()
            let mescpf = new Number(partesDataCPF[1].valueOf()).valueOf()
            let diacpf = new Number(partesDataCPF[0].valueOf()).valueOf()
            let dataEmissaoCPF = new Date(anocpf, mescpf, diacpf)
            let cpf = new CPF(valorCPF, dataEmissaoCPF);

            let valorRG = this.entrada.receberTexto(`Novo número do rg: `);
            let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
            let partesData = dataRG.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissaoRG = new Date(ano, mes, dia)
            let rg = new RG(valorRG, dataEmissaoRG);

            cliente.updateCliente(nome, nomeSocial, cpf, rg)
        }
    }
}
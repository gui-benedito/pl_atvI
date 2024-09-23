import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`Início do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        let valorCPF = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesDataCPF = dataCPF.split('/')
        let anocpf = new Number(partesDataCPF[2].valueOf()).valueOf()
        let mescpf = new Number(partesDataCPF[1].valueOf()).valueOf()
        let diacpf = new Number(partesDataCPF[0].valueOf()).valueOf()
        let dataEmissaoCPF = new Date(anocpf, mescpf, diacpf)
        let cpf = new CPF(valorCPF, dataEmissaoCPF);

        let valorRG = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        let partesData = dataRG.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaoRG = new Date(ano, mes, dia)
        let rg = new RG(valorRG, dataEmissaoRG);

        let ddd = this.entrada.receberTexto(`Por favor informe o número do ddd: `);
        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
        let telefone = new Telefone(ddd, numero)

        let cliente = new Cliente(nome, nomeSocial, cpf, rg, telefone);
        this.clientes.push(cliente)
        console.log(`Cadastro concluído :)`)
    }
}
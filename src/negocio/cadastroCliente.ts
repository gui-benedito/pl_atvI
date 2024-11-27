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
        console.log(`Início do cadastro do cliente`)
        const nomeRegex = /^[a-zA-ZÀ-ÿ\s]+$/
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        if(!nomeRegex.test(nome)){
            console.log('Nome inválido')
            return
        }
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        if(!nomeRegex.test(nomeSocial)){
            console.log('Nome social inválido')
            return
        }
        let valorCPF = this.entrada.receberTexto(`Por favor informe o número do cpf: `)

        if(!valorCPF){
            console.log('Informe o CPF')
            return
        }

        let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `)
        
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
    
        if (!dateRegex.test(dataCPF)) {
            console.log('Data de emissão do CPF inválida. Use o formato dd/mm/yyyy.')
            return
        }
    
        let partesDataCPF = dataCPF.split('/')
        if (partesDataCPF.length !== 3) {
            console.log('Data de emissão do CPF inválida.')
            return
        }
    
        let anocpf = Number(partesDataCPF[2])
        let mescpf = Number(partesDataCPF[1]) 
        let diacpf = Number(partesDataCPF[0])
    
        if (isNaN(anocpf) || isNaN(mescpf) || isNaN(diacpf)) {
            console.log('Erro na conversão da data do CPF.')
            return
        }
    
        let dataEmissaoCPF = new Date(anocpf, mescpf, diacpf)
        if (!(dataEmissaoCPF instanceof Date)) {
            console.log('Data de emissão do CPF inválida.')
            return
        }
    
        let cpf = new CPF(valorCPF, dataEmissaoCPF)

        let valorRG = this.entrada.receberTexto(`Por favor informe o número do rg: `)
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `)
    
        if (!dateRegex.test(dataRG)) {
            console.log('Data de emissão do RG inválida. Use o formato dd/mm/yyyy.')
            return
        }
    
        let partesDataRG = dataRG.split('/')
        if (partesDataRG.length !== 3) {
            console.log('Data de emissão do RG inválida.')
            return
        }
    
        let ano = Number(partesDataRG[2])
        let mes = Number(partesDataRG[1])
        let dia = Number(partesDataRG[0])
    
        if (isNaN(ano) || isNaN(mes) || isNaN(dia)) {
            console.log('Erro na conversão da data do RG.')
            return
        }
    
        let dataEmissaoRG = new Date(ano, mes, dia)
        if (!(dataEmissaoRG instanceof Date)) {
            console.log('Data de emissão do RG inválida.')
            return
        }
    
        let rg = new RG(valorRG, dataEmissaoRG)
        
        const numberRegex = /^[0-9]+$/

        let ddd = this.entrada.receberTexto(`Por favor informe o número do DDD: `)
        if (!numberRegex.test(ddd)) { 
            console.log('DDD inválido. Deve conter apenas números.')
            return
        }

        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `)
        if (!numberRegex.test(numero)) { 
            console.log('Número de telefone inválido. Deve conter apenas números.')
            return
        }

        let telefone = new Telefone(ddd, numero)

        if (!(telefone instanceof Telefone)) {
            console.log('Erro ao cadastrar telefone')
            return
        }

        let id = 0
        if(this.clientes.length > 0){
            const ultimoClienteId = this.clientes[this.clientes.length - 1]['id']
            id = ultimoClienteId + 1 
        } 
            
        // Criando o cliente
        let cliente = new Cliente(id, nome, nomeSocial, cpf, rg, telefone)
        this.clientes.push(cliente)
        console.log(`Cadastro concluído :)`)
    }
    
}
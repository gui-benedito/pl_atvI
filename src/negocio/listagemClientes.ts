import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`Lista de todos os clientes:`)
        this.clientes.forEach((cliente, i) => {
            console.log(`Id: ${i}`)
            console.log(`Nome: ` + cliente.nome)
            console.log(`Nome social: ` + cliente.nomeSocial)
            console.log(`CPF: ` + cliente.getCpf.getValor)
            console.log(`RG: ` + cliente.getRg.getValor)
            console.log(`--------------------------------`)
        })
    }

    public clientesProdutosMaisConsumidosPet(tipo: string | undefined , raca: string | undefined) {
        const clientesPorProduto = this.clientes.filter(c => c.possuiPet(tipo, raca))
        if(!clientesPorProduto){
            console.log(`Não há clientes com essa raça ou tipo`)
            return
        }
        let lista: {[key:string]:number} = {}
        clientesPorProduto.sort((a,b) => b.getProdutosConsumidos.length - a.getProdutosConsumidos.length)
        .forEach(c => {
            c.getProdutosConsumidos.forEach((p) => {
                if(!lista[p.nome]){
                    lista[p.nome] = 0
                }
                lista[p.nome] += 1
            })
        })
        console.log(`Serviços mais consumidos por tipo e/ou raça`)
        Object.entries(lista).forEach((p) => {
            console.log(`Produto: ${p[0]}, quantidade: ${p[1]}`)
        })
    }

    public clientesServicosMaisConsumidosPet(tipo: string | undefined , raca: string | undefined) {
        const clientesPorProduto = this.clientes.filter(c => c.possuiPet(tipo, raca))
        if(!clientesPorProduto){
            console.log(`Não há clientes com essa raça ou tipo`)
            return
        }
        let lista: {[key:string]:number} = {}
        clientesPorProduto.sort((a,b) => b.getServicosConsumidos.length - a.getServicosConsumidos.length)
        .forEach(c => {
            c.getServicosConsumidos.forEach((p) => {
                if(!lista[p.nome]){
                    lista[p.nome] = 0
                }
                lista[p.nome] += 1
            })
        })
        console.log(`Serviços mais consumidos por tipo e/ou raça`)
        Object.entries(lista).forEach((p) => {
            console.log(`Produto: ${p[0]}, quantidade: ${p[1]}`)
        })
    }
}
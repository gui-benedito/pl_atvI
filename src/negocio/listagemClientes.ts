import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`)
        this.clientes.forEach((cliente, i) => {
            console.log(`Id: ${i}`)
            console.log(`Nome: ` + cliente.nome)
            console.log(`Nome social: ` + cliente.nomeSocial)
            console.log(`CPF: ` + cliente.getCpf.getValor)
            console.log(`RG: ` + cliente.getRg.getValor)
            console.log(`--------------------------------------\n`);
        })
    }
}
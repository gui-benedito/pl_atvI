import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPet extends Listagem{
    private cliente: Cliente
    private entrada: Entrada
    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
        this.entrada = new Entrada()
    }

    public listar(){
        console.log(`\nLista dos pets de ${this.cliente.nome}:`);
        this.cliente.getPets.forEach((pet) => {
            console.log(`Nome: ${pet.getNome}`)
            console.log(`Raça: ${pet.getRaca}`)
            console.log(`Gênero: ${pet.getGenero}`)
            console.log(`Tipo: ${pet.getTipo}`)
            console.log(`--------------------------------------\n`)
        })
    }

    public petEspecifico(){
        let nome = this.entrada.receberTexto(`Nome: `)
        let pet = this.cliente.getPets.find((p => p.getNome === nome))
        console.log(`\nNome: ${pet?.getNome}`)
        console.log(`Raça: ${pet?.getRaca}`)
        console.log(`Gênero: ${pet?.getGenero}`)
        console.log(`Tipo: ${pet?.getTipo}`)
        console.log(`--------------------------------------\n`)
    }
}
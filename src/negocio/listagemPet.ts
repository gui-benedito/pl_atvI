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
        this.cliente.getPets.forEach((pet, i) => {
            console.log(`Id: ${i}`)
            console.log(`Nome: ${pet.getNome}`)
            console.log(`Raça: ${pet.getRaca}`)
            console.log(`Gênero: ${pet.getGenero}`)
            console.log(`Tipo: ${pet.getTipo}`)
            console.log(`--------------------------------------\n`)
        })
    }

    public petEspecifico(){
        let id = this.entrada.receberNumero(`Id: `)
        let pet = this.cliente.getPets[id]
        console.log(`\nNome: ${pet?.getNome}`)
        console.log(`Raça: ${pet?.getRaca}`)
        console.log(`Gênero: ${pet?.getGenero}`)
        console.log(`Tipo: ${pet?.getTipo}`)
        console.log(`--------------------------------------\n`)
    }
}
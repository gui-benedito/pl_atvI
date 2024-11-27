import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPet extends Listagem{
    private empresa: Empresa
    private entrada: Entrada
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
        this.entrada = new Entrada()
    }

    public listar(){
        const clientes = this.empresa.getClientes
        const pets: Pet[] = []
        clientes.forEach((c) => c.getPets.forEach((p) => pets.push(p)))
        pets.sort((a, b) => a.id - b.id)
        console.log(`Lista dos pets:`);
        pets.forEach((pet) => {
            console.log(`Id: ${pet.id}`)
            console.log(`Nome: ${pet.getNome}`)
            console.log(`Raça: ${pet.getRaca}`)
            console.log(`Gênero: ${pet.getGenero}`)
            console.log(`Tipo: ${pet.getTipo}`)
            console.log(`--------------------------------`)
        })
    }

    public petEspecifico() {
        let id = this.entrada.receberNumero(`Id: `);
        let pet = null;
        let clienteFound

        for (let cliente of this.empresa.getClientes) {
            pet = cliente.getPets.find((p) => p.id === id);
            clienteFound = cliente
            if (pet) break; 
        }

        if (pet) {
            console.log(`Nome: ${pet.getNome}`);
            console.log(`Raça: ${pet.getRaca}`);
            console.log(`Gênero: ${pet.getGenero}`);
            console.log(`Tipo: ${pet.getTipo}`);
            console.log(`Tutor: ${clienteFound?.nomeSocial}`)
            console.log(`--------------------------------`);
        } else {
            console.log(`Pet com ID ${id} não encontrado.`);
        }
    }
    
}
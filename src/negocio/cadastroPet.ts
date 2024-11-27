import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro{
    private empresa: Empresa
    private entrada: Entrada
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        const clientes = this.empresa.getClientes
        const pets: Pet[] = []
        clientes.forEach((c) => c.getPets.forEach((p) => pets.push(p)))
        let idCliente = this.entrada.receberNumero('Id cliente: ')
        const cliente = clientes.find((c) => c.id === idCliente)
        let nome = this.entrada.receberTexto(`Nome: `)
        let raca = this.entrada.receberTexto(`Raça: `)
        let genero = this.entrada.receberTexto(`Gênero: `)
        let tipo = this.entrada.receberTexto(`Tipo: `)
        let id = 0
        if(pets.length > 0){
            const ultimoId = pets[pets.length - 1]['id']
            id = ultimoId + 1
        }
        let pet = new Pet(id, nome, raca, genero, tipo)
        cliente?.getPets.push(pet)
        console.log(`Pet cadastrado com sucesso!`)
    }

    public deletar(): void{
        let id = this.entrada.receberNumero(`Id: `);
        let pet = null;

        for (let cliente of this.empresa.getClientes) {
            pet = cliente.getPets.find((p) => p.id === id);
            if(pet){
                const index = cliente.getPets.findIndex((p) => p.id == id)
                cliente.getPets.splice(index, 1)
                console.log('Pet deletado com sucesso')
            }
            if (pet) break; 
        }
    }

    public updatePet(): void{
        let id = this.entrada.receberNumero(`Id: `);
        let pet = null;

        for (let cliente of this.empresa.getClientes) {
            pet = cliente.getPets.find((p) => p.id === id);
            if(pet){
                console.log(`1 - Nome`)
                console.log(`2 - Raça`)
                console.log(`3 - Gênero`)
                console.log(`4 - Tipo`)
                console.log(`5 - Tudo`)
                let nome: string
                let raca: string
                let tipo: string
                let genero: string
                let opcao = this.entrada.receberNumero(`O que deseja atualizar: `)
                switch(opcao){
                    case 1:
                        nome = this.entrada.receberTexto(`Novo nome: `)
                        pet.setNome = nome
                        break
                    case 2:
                        raca = this.entrada.receberTexto(`Nova raça: `)
                        pet.setRaca = raca
                        break
                    case 3:
                        genero = this.entrada.receberTexto(`Novo gênero: `)
                        pet.setGenero = genero
                        break
                    case 4:
                        tipo = this.entrada.receberTexto(`Novo tipo: `)
                        pet.setTipo = tipo
                        break
                    case 5:
                        nome = this.entrada.receberTexto(`Novo nome: `)
                        raca = this.entrada.receberTexto(`Nova raça: `)
                        genero = this.entrada.receberTexto(`Novo gênero: `)
                        tipo = this.entrada.receberTexto(`Novo tipo: `)
                        pet.setNome = nome
                        pet.setRaca= raca
                        pet.setGenero = genero
                        pet.setTipo = tipo
                        break
                    default:
                        console.log(`Opção inválida!`)
                }
            }
            if (pet) break; 
        }
    }
}
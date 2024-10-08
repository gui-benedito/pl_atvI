import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroPet extends Cadastro{
    private cliente: Cliente
    private entrada: Entrada
    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`Cadastro de pet:`)
        let nome = this.entrada.receberTexto(`Nome: `)
        let raca = this.entrada.receberTexto(`Raça: `)
        let genero = this.entrada.receberTexto(`Gênero: `)
        let tipo = this.entrada.receberTexto(`Tipo: `)
        let pet = new Pet(nome, raca, genero, tipo)
        this.cliente.getPets.push(pet)
        console.log(`Pet cadastrado com sucesso!`)
    }

    public deletar(): void{
        let id = this.entrada.receberNumero('Id do pet a ser deletado: ')
        if (id >= 0 && id < this.cliente.getPets.length){
            this.cliente.getPets.splice(id, 1)
            console.log('Pet deletado com sucesso')
        }else {
            console.log(`ID inválido. Nenhum pet foi deletado.`)
        }
    }

    public updatePet(): void{
        let id = this.entrada.receberNumero('Id do pet a ser atualizado: ')
        let pet = this.cliente.getPets[id]
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
        }else{
            console.log(`Pet não encontrado`)
        }
    }
}
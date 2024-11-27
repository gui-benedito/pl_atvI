import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public id: number
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rg: RG
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(id: number, nome: string, nomeSocial: string, cpf: CPF, rg: RG, telefone: Telefone) {
        this.id = id
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rg = rg
        this.dataCadastro = new Date()
        this.telefones = []
        this.telefones.push(telefone)
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRg(): RG {
        return this.rg
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }
    public confirmaPets(): boolean{
        if(!this.getPets.length){
            console.log(`${this.nome} não tem pet cadastrado!`)
            return false
        }
        return true
    }
    public set setPets(newPets: Array<Pet>){
        this.pets = newPets
    }
    
    public updateCliente(nome: string, nomeSocial: string, cpf: CPF, rg: RG){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rg = rg
    } 
    
    public listarProduto(){
        let produtos: {[key: string]: number} = {}
        this.getProdutosConsumidos.forEach((p) => {
            if(!produtos[p.nome]){
                produtos[p.nome] = 0
            }
            produtos[p.nome] += 1
        })
        if(Object.keys(produtos).length === 0){
            console.log(`Sem produtos cadastrados`)
            return
        }
        console.log(`Lista de produtos de ${this.nome}`)
        Object.entries(produtos).forEach((p) => {
            console.log(`Produto: ${p[0]}, quantidade: ${p[1]}`)
        })
    }

    public listarServico(){
        let servicos: {[key: string]: number} = {}
        this.getServicosConsumidos.forEach((p) => {
            if(!servicos[p.nome]){
                servicos[p.nome] = 0
            }
            servicos[p.nome] += 1
        })
        if(Object.keys(servicos).length === 0){
            console.log(`Sem serviços cadastrados`)
            return
        }
        console.log(`Lista de serviços de ${this.nome}`)
        Object.entries(servicos).forEach((p) => {
            console.log(`Serviço: ${p[0]}, quantidade: ${p[1]}`)
        })
    }
    // função para filtrar por tipo OU raça
    public possuiPet(tipo: string | undefined, raca: string  | undefined) {
        return this.pets.filter(p => (p.getTipo == tipo && tipo != undefined) || (p.getRaca == raca && raca != undefined)).length > 0
    }
    // função para filtrar por tipo E raça
    public possuiPet2(tipo: string | undefined, raca: string  | undefined) {
        return this.pets.filter(p => (p.getTipo == tipo && tipo != undefined) && (p.getRaca == raca && raca != undefined)).length > 0
    }
}
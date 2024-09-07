import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rg: RG
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF, rg: RG, telefone: Telefone) {
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
}
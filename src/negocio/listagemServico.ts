import Empresa from "../modelo/empresa";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem{
    private empresa: Empresa
    constructor(empresa: Empresa){
        super()
        this.empresa = empresa
    }

    public listar(): void {
        console.log(`Servicos:`)
        this.empresa.getServicos.forEach((produto, i) => {
            console.log(`Id: ${i}`)
            console.log(`Nome: ${produto.nome}`)
            console.log(`Valor: ${produto.valor}`)
        })
    }
}
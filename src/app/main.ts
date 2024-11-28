const fs = require('fs')
const path = require('path')
import { findAncestor } from "typescript";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPet from "../negocio/listagemPet";
import ListagemProdutos from "../negocio/listagemProduto";
import ListagemServicos from "../negocio/listagemServico";
import { cincoMais, dezProdutosMaisConsumidos, dezServicosMaisConsumidos, produtosMaisConsumidos, servicosMaisConsumidos } from "../negocio/outros";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

interface bancoDB {
    [base: string]: any[]
}

const filePath = path.join(__dirname, './', 'cliente.json')
let banco: bancoDB = {}

try {
    const rawData = fs.readFileSync(filePath, 'utf-8')
    banco = JSON.parse(rawData)
} catch (error) {
}

for(const [key, values] of Object.entries(banco)){
    values.forEach((value) => {
        const clientes = empresa.getClientes
        const produtos = empresa.getProdutos
        const servicos = empresa.getServicos
        if(key === 'clientes'){
            let cpf = new CPF(value['cpf']['numero'], value['cpf']['dataEmissao'])
            let rg = new RG(value['rg']['numero'], value['rg']['dataEmissao'])
            let cliente = new Cliente(value['id'], value['nome'], value['nomeSocial'], cpf, rg, value['telefone'])
            const pets: any[] = value['pets']
            const clientePet = cliente.getPets
            pets.forEach(p => {
                const pet = new Pet(p['id'], p['nome'], p['raca'], p['genero'], p['tipo'])
                clientePet.push(pet)
            })
            clientes.push(cliente)
        }
        if(key === 'produtos'){
            let produto = new Produto(value['id'], value['nome'], value['valor'], value['quantidade'])
            produtos.push(produto)
        }
        if(key === 'servicos'){
            let servico = new Servico(value['id'], value['nome'], value['valor'])
            servicos.push(servico)
        }
    })
}

while (execucao) {
    console.log(`Bem vindo à PetLover! Escolha o menu desejado:`)
    console.log(`1 - Clientes`)
    console.log(`2 - Pets`)
    console.log(`3 - Produtos`)
    console.log(`4 - Serviços`)
    console.log(`5 - Cadastrar venda`)
    console.log(`6 - Outros`)
    console.log(`0 - Sair`)

    let entrada = new Entrada()
    console.log('\n')
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch(opcao){
        case 1:
            do{
                console.log('\n')
                console.log(`Opções:`)
                console.log(`1 - Cadastrar cliente`)
                console.log(`2 - Listar todos os clientes`)
                console.log(`3 - Deletar cliente`)
                console.log(`4 - Atualizar cliente`)
                console.log(`0 - Voltar`)

                entrada = new Entrada()
                console.log('\n')
                opcao = entrada.receberNumero(`Opção desejada: `)

                switch (opcao) {
                    case 1:
                        let cadastro = new CadastroCliente(empresa.getClientes)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        if(empresa.confirmaClientes()){
                            let listagem = new ListagemClientes(empresa.getClientes)
                            listagem.listar()
                        }
                        break
                    case 3:
                        if(empresa.confirmaClientes()){
                            empresa.deletar()
                        }
                        break
                    case 4:
                        if(empresa.confirmaClientes()){
                            empresa.updateCliente()
                        }
                        break
                    case 0:
                        break
                    default:
                        console.log('\n')
                        console.log(`Opção inválida!`)
                }
            }while(opcao !== 0)
            break
        case 2:
            if(!empresa.getClientes.length){
                console.log('\n')
                console.log(`Não há clientes cadastrados!`)
                break
            }
            console.log('\n')
                do{
                    console.log('\n')
                    console.log(`Opções:`)
                    console.log(`1 - Cadastrar pet`)
                    console.log(`2 - Listar todos os pets`)
                    console.log(`3 - Encontrar pet`)
                    console.log(`4 - Deletar pet`)
                    console.log(`5 - Editar pet`)
                    console.log(`0 - Voltar`)
                    
                    entrada = new Entrada()
                    console.log('\n')
                    opcao = entrada.receberNumero(`Opção desejada: `)
                    let id: number
                    let cliente
                    switch(opcao){
                        case 1:
                            let cadastro = new CadastroPet(empresa)
                                cadastro.cadastrar()
                            break
                        case 2:
                            let listagem = new ListagemPet(empresa)
                            listagem.listar()
                            break
                        case 3:
                            let listarPet = new ListagemPet(empresa)
                            listarPet.petEspecifico()
                            break
                        case 4:
                            let deletarPet = new CadastroPet(empresa)
                            deletarPet.deletar()
                            break
                        case 5:
                            let updatePet = new CadastroPet(empresa)
                            updatePet.updatePet()
                            break
                        case 0:
                            break
                        default:
                            console.log('\n')
                            console.log(`Operação não entendida :(`)
                    }
                }while(opcao !== 0)
            break
        case 3:
            do{
                entrada = new Entrada()
                console.log('\n')
                console.log(`Opções:`)
                console.log(`1 - Cadastrar produto`)
                console.log(`2 - Listar todos os produtos`)
                console.log(`3 - Editar produto`)
                console.log(`4 - Deletar produto`)
                console.log(`0 - Voltar`)
                console.log('\n')
                opcao = entrada.receberNumero(`Opção desejada: `)
                switch(opcao){
                    case 1:
                        let produto = new CadastroProduto(empresa)
                        produto.cadastrar()
                        break
                    case 2:
                        if(empresa.confirmaProduto()){
                            let listarProdutos = new ListagemProdutos(empresa)
                            listarProdutos.listar()
                        }
                        break
                    case 3:
                        if(empresa.confirmaProduto()){
                            let listarProdutos = new CadastroProduto(empresa)
                            listarProdutos.updateProduto()
                        }
                        break
                    case 4:
                        if(empresa.confirmaProduto()){
                            let listarProdutos = new CadastroProduto(empresa)
                            listarProdutos.deletarProduto()
                        }
                        break
                    case 0:
                        break
                    default:
                        console.log('\n')
                        console.log(`Operação não entendida :(`)
                }
            }while(opcao !== 0)
            break
        case 4:
            do{
                entrada = new Entrada()
                console.log('\n')
                console.log(`Opções:`)
                console.log(`1 - Cadastrar servico`)
                console.log(`2 - Listar todos os servicos`)
                console.log(`3 - Editar servico`)
                console.log(`4 - Deletar servico`)
                console.log(`0 - Voltar`)
                console.log('\n')
                opcao = entrada.receberNumero(`Opção desejada: `)
                switch(opcao){
                    case 1:
                        let servico = new CadastroServico(empresa)
                        servico.cadastrar()
                        break
                    case 2:
                        if(empresa.confirmaServico()){
                            let listarservicos = new ListagemServicos(empresa)
                            listarservicos.listar()
                        }
                        break
                    case 3:
                        if(empresa.confirmaServico()){
                            let listarservicos = new CadastroServico(empresa)
                            listarservicos.updateServico()
                        }
                        break
                    case 4:
                        if(empresa.confirmaServico()){
                            let listarservicos = new CadastroServico(empresa)
                            listarservicos.deletarServico()
                        }
                        break
                    case 0:
                        break
                    default:
                        console.log('\n')
                        console.log(`Operação não entendida :(`)
                }
            }while(opcao !== 0)
            break
        case 5:
            do{
                console.log('\n')
                console.log(`1 - Venda de produto`)
                console.log(`2 - Venda de serviço`)
                console.log(`0 - Voltar`)
                console.log('\n')
                opcao = entrada.receberNumero(`Opção desejada: `)
                switch(opcao){
                    case 1:
                        empresa.vendaProduto()
                        break
                    case 2:
                        empresa.vendaServico()
                        break
                    default:
                        console.log('\n')
                        console.log(`Opção inválida!`)
                }
            }while(opcao !== 0)
            break
        case 6:
            do{
                console.log('\n')
                console.log(`1 - Registro de consumo dos produtos ou serviços que cada cliente adquiriu.`)
                console.log(`2 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.`)
                console.log(`3 - Listagem geral dos serviços ou produtos mais consumidos.`)
                console.log(`4 - Listagem dos serviços ou produtos mais consumidos por tipo e raça de pets.`)
                console.log(`5 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.`)
                console.log(`0 - Voltar`)
                console.log('\n')
                opcao = entrada.receberNumero(`Opção desejada: `)
                switch(opcao){
                    case 1:
                        do{
                            console.log('\n')
                            console.log(`1 - Por produto`)
                            console.log(`2 - Por serviço`)
                            console.log(`0 - Voltar`)
                            console.log('\n')
                            opcao = entrada.receberNumero(`Opção desejada: `)
                            let id: number
                            switch(opcao){
                                case 1:
                                    console.log('\n')
                                    id = entrada.receberNumero(`Id do cliente: `)
                                    const cliente = empresa.getClientes.find((c) => c.id === id)
                                    if(cliente){
                                        cliente.listarProduto()
                                        break
                                    }
                                    console.log('Cliente não encontrado')
                                    break
                                case 2:
                                    console.log('\n')
                                    id = entrada.receberNumero(`Id do cliente: `)
                                    const clienteFound = empresa.getClientes.find((c) => c.id === id)
                                    if(clienteFound){
                                        clienteFound.listarServico()
                                        break
                                    }
                                    console.log('Cliente não encontrado')
                                    break
                                case 0:
                                    break
                                default:
                                    console.log('\n')
                                    console.log(`Operação não entendida :(`)
                            }
                        }while(opcao !== 0)
                        break
                    case 2:
                        do{
                            console.log('\n')
                            console.log(`1 - Por produto`)
                            console.log(`2 - Por serviço`)
                            console.log(`0 - Voltar`)
                            console.log('\n')
                            opcao = entrada.receberNumero(`Opção desejada: `)
                            switch(opcao){
                                case 1:
                                    dezProdutosMaisConsumidos(empresa.getClientes)
                                    break
                                case 2:
                                    dezServicosMaisConsumidos(empresa.getClientes)
                                    break
                                case 0:
                                    break
                                default:
                                    console.log('\n')
                                    console.log(`Operação não entendida :(`)
                            }
                        }while(opcao !== 0)
                        break
                    case 3:
                        do{
                            console.log('\n')
                            console.log(`1 - Por produto`)
                            console.log(`2 - Por serviço`)
                            console.log(`0 - Voltar`)
                            console.log('\n')
                            opcao = entrada.receberNumero(`Opção desejada: `)
                            switch(opcao){
                                case 1:
                                    produtosMaisConsumidos(empresa.getClientes)
                                    break
                                case 2:
                                    servicosMaisConsumidos(empresa.getClientes)
                                    break
                                case 0:
                                    break
                                default:
                                    console.log('\n')
                                    console.log(`Operação não entendida :(`)
                            }
                        }while(opcao !== 0)
                        break
                    case 4:
                        do{
                            console.log('\n')
                            console.log(`Filtrar por tipo, raça ou ambos?:`)
                            console.log(`1 - Tipo`)
                            console.log(`2 - Raça`)
                            console.log(`3 - Ambos`)
                            console.log(`0 - Voltar`)

                            let tipo
                            let raca
                            let opcaoFiltro
                            console.log('\n')
                            opcao = entrada.receberNumero(`Opção desejada: `)
                            switch (opcao){
                                case 1:
                                    console.log('\n')
                                    tipo = entrada.receberTexto('Digite o tipo do pet: ')
                                    break
                                case 2:
                                    console.log('\n')
                                    raca = entrada.receberTexto('Digite a raça do pet: ')
                                    break
                                case 3:
                                    console.log('\n')
                                    tipo = entrada.receberTexto('Digite o tipo do pet: ')
                                    raca = entrada.receberTexto('Digite a raça do pet: ')
                                    opcaoFiltro = true
                                    break
                                case 0:
                                    break
                                default:
                                    console.log('\n')
                                    console.log('Operação não entendida :(')
                            }
                            console.log('\n')
                            console.log(`Escolha a sua categoria:`)
                            console.log(`1 - Produtos`)
                            console.log(`2 - Serviços`)
                            console.log(`0 - Voltar`)
                            console.log('\n')
                            opcao = entrada.receberNumero(`Opção desejada: `)
                            switch (opcao){
                                case 1:
                                    let listClientesProdPet = new ListagemClientes(empresa.getClientes)
                                    listClientesProdPet.clientesProdutosMaisConsumidosPet(tipo, raca)
                                    break
                                case 2:
                                    let listClientesServPet = new ListagemClientes(empresa.getClientes)
                                    listClientesServPet.clientesServicosMaisConsumidosPet(tipo, raca, opcaoFiltro)
                                    break
                                case 0:
                                    break
                                default:
                                    console.log('\n')
                                    console.log('Operação não entendida :(')
                            }
                            break
                        }while(opcao !== 0)
                        break
                    case 5:
                        cincoMais(empresa.getClientes)
                        break
                    case 0:
                        break
                    default:
                        console.log('\n')
                        console.log(`Operação não entendida :(`)
                }
            }while(opcao !== 0)
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
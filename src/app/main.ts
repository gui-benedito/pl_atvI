import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPet from "../negocio/listagemPet";
import ListagemProdutos from "../negocio/listagemProduto";
import ListagemServicos from "../negocio/listagemServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Bem vindo à PetLover! Escolha o menu desejado:`)
    console.log(`1 - Clientes`)
    console.log(`2 - Pets`)
    console.log(`3 - Produtos`)
    console.log(`4 - Serviços`)
    console.log(`5 - Outros`)
    console.log(`6 - Cadastrar venda`)
    console.log(`0 - Sair`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch(opcao){
        case 1:
            do{
                console.log(`Opções:`)
                console.log(`1 - Cadastrar cliente`)
                console.log(`2 - Listar todos os clientes`)
                console.log(`3 - Deletar cliente`)
                console.log(`4 - Atualizar cliente`)
                console.log(`0 - Voltar`)

                entrada = new Entrada()
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
                        console.log(`Opção inválida!`)
                }
            }while(opcao !== 0)
            break
        case 2:
            if(!empresa.getClientes.length){
                console.log(`Não há clientes cadastrados!`)
                break
            }
            let cliente = empresa.findCliente(entrada.receberNumero('Digite o numero do id do cliente: '))            
            if(cliente) {
                do{
                    console.log(`Opções:`)
                    console.log(`1 - Cadastrar pet`)
                    console.log(`2 - Listar todos os pets`)
                    console.log(`3 - Encontrar pet`)
                    console.log(`4 - Deletar pet`)
                    console.log(`5 - Editar pet`)
                    console.log(`0 - Voltar`)
                    
                    entrada = new Entrada()
                    opcao = entrada.receberNumero(`Opção desejada: `)
                    switch(opcao){
                        case 1:
                            let cadastro = new CadastroPet(cliente)
                            cadastro.cadastrar()
                            break
                        case 2:
                            if(cliente.confirmaPets()){
                                let listagem = new ListagemPet(cliente)
                                listagem.listar()
                            }
                            break
                        case 3:
                            if(cliente.confirmaPets()){
                                let listarPet = new ListagemPet(cliente)
                                listarPet.petEspecifico()
                            }
                            break
                        case 4:
                            if(cliente.confirmaPets()){
                                let deletarPet = new CadastroPet(cliente)
                                deletarPet.deletar()
                            }
                            break
                        case 5:
                            if(cliente.confirmaPets()){
                                let updatePet = new CadastroPet(cliente)
                                updatePet.updatePet()
                            }
                            break
                        case 0:
                            break
                        default:
                            console.log(`Operação não entendida :(`)
                    }
                }while(opcao !== 0)

            }else{
                console.log(`Cliente não encontrado!`)
            }
            break
        case 3:
            do{
                entrada = new Entrada()
                console.log(`Opções:`)
                console.log(`1 - Cadastrar produto`)
                console.log(`2 - Listar todos os produtos`)
                console.log(`3 - Editar produto`)
                console.log(`4 - Deletar produto`)
                console.log(`0 - Voltar`)
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
                        console.log(`Operação não entendida :(`)
                }
            }while(opcao !== 0)
            break
        case 4:
            do{
                entrada = new Entrada()
                console.log(`Opções:`)
                console.log(`1 - Cadastrar servico`)
                console.log(`2 - Listar todos os servicos`)
                console.log(`3 - Editar servico`)
                console.log(`4 - Deletar servico`)
                console.log(`0 - Voltar`)
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
                        console.log(`Operação não entendida :(`)
                }
            }while(opcao !== 0)
            break
        case 5:
            break
        case 6:
            do{
                console.log(`1 - Venda de produto`)
                console.log(`2 - Venda de serviço`)
                console.log(`0 - Voltar`)
                opcao = entrada.receberNumero(`Opção desejada: `)
                let nome: string
                switch(opcao){
                    case 1:
                        nome = entrada.receberTexto(`Cliente: `)
                        let cliente = empresa.getClientes.find((c => c.nome === nome))
                        let id = entrada.receberNumero(`Id do produto: `)
                        let produto = empresa.getProdutos[id-1]
                        break
                    case 2:
                        break
                    default:
                        console.log(`Opção inválida!`)
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
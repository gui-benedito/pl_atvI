import Cliente from "../modelo/cliente";

export function dezProdutosMaisConsumidos(clientes: Cliente[]){
    const maisConsumiram = clientes.map((cliente) => {
        const nome = cliente.nome
        const qtd = cliente.getProdutosConsumidos.length 
        return {nome, qtd}
    })
    const dezMais = maisConsumiram.sort((a,b) => b.qtd - a.qtd).slice(0, 10)
    console.log(`clientes que mais consumiram produtos:`)
    dezMais.forEach((e) => {
        console.log(`${e.nome}`)
    })
}

export function dezServicosMaisConsumidos(clientes: Cliente[]){
    const maisConsumiram = clientes.map((cliente) => {
        const nome = cliente.nome
        const qtd =  cliente.getServicosConsumidos.length
        return {nome, qtd}
    })
    const dezMais = maisConsumiram.sort((a,b) => b.qtd - a.qtd).slice(0, 10)
    console.log(`clientes que mais consumiram serviços:`)
    dezMais.forEach((e) => {
        console.log(`${e.nome}`)
    })
}

export function produtosMaisConsumidos(clientes: Cliente[]){
    let lista: { [key: string]: number } = {}
    clientes.forEach((cliente) => {
        cliente.getProdutosConsumidos.forEach((p) => {
            if (!lista[p.nome]) {
                lista[p.nome] = 0
            }
            lista[p.nome] += 1
        })
    })
    const listaArray = Object.entries(lista)
    listaArray.sort((a, b) => b[1] - a[1])
    listaArray.forEach((e) => {
        console.log(`${e[0]} - ${e[1]}`)
    })
}

export function servicosMaisConsumidos(clientes: Cliente[]){
    let lista: { [key: string]: number } = {}
    clientes.forEach((cliente) => {
        cliente.getServicosConsumidos.forEach((s) => {
            if (!lista[s.nome]) {
                lista[s.nome] = 0
            }
            lista[s.nome] += 1
        })
    })
    const listaArray = Object.entries(lista)
    listaArray.sort((a, b) => b[1] - a[1])
    listaArray.forEach((e) => {
        console.log(`${e[0]} - ${e[1]}`)
    })
}

export function cincoMais(clientes: Cliente[]){
    let lista: { [key: string]: number } = {}
    clientes.forEach((cliente) => {
        if(!lista[cliente.nome]){
            lista[cliente.nome] = 0
        }
        cliente.getProdutosConsumidos.forEach((p) => {
            lista[cliente.nome] += p.valor
        })
        cliente.getServicosConsumidos.forEach((s) => {
            lista[cliente.nome] += s.valor
        })
    })
    const listaArray = Object.entries(lista)
    listaArray.sort((a,b) => b[1] - a[1]).slice(0, 5)
    console.log(`Clientes que mais consumiram:`)
    listaArray.forEach((e) => {
        console.log(`Nome: ${e[0]}, R$${e[1].toFixed(2)}`)
    })
}

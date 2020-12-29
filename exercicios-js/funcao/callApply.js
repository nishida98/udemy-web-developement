function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'XPTO',
    preco: 5666,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {
    nome: 'Ferrari',
    preco: 500000,
    desc: 0.15,
    getPreco
}
console.log(getPreco.call(carro, 0.5, 'US$')) //call passa o contexto e depois os parametroa
console.log(getPreco.apply(carro, [0.5, 'US$'])) //apply os parametros são passados por array
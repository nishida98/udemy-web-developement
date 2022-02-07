const produtos = [
    {nome: "Notebook", preco: 1233, fragil:true},
    {nome: "Monalisa", preco:4, fragil: true},
    {nome: "Escultura", preco:5555, fragil: true},
    {nome: "Carro", preco:372873, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil && p.preco > 1000
}))

const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
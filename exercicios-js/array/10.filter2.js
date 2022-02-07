Array.prototype.myFilter = function(callback) {

    const newArray = []

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: "Notebook", preco: 1233, fragil:true},
    {nome: "Monalisa", preco:4, fragil: true},
    {nome: "Escultura", preco:5555, fragil: true},
    {nome: "Carro", preco:372873, fragil: false}
]

console.log(produtos.myFilter(function(p){
    return p.fragil && p.preco > 1000
}))

const caro = produto => produto.preco >= 1000
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
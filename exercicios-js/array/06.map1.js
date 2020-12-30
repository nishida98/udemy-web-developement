const nuns = [1,2,3,4,5,6]

// map eh um for com proposito
const nunsDouble = nuns.map(num => num * 2)
console.log(nunsDouble)

const soma10 = num => num + 10
const triplo = num => num * 3
const paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.',',')}`

let resultado = nuns.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) 
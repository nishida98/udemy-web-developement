// Arrow function
const soma = (a, b) => a + b
console.log(soma(1,1))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
console.log(lexico1())

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log('Ola')
log()

// operador rest ou spread
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,5))
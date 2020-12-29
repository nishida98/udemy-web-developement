//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(121, 4545)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 3))

//retorno implicito
const subtracao = (a, b) => a - b

const imprimir2 = a => console.log(a)

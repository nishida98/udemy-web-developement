//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(50, 23)
imprimirSoma(2)//posso passar somente um valor, o segundo valor vai ser undefined
imprimirSoma(2,3,4,5,6,7,8,9)//passando mais parametros, o excedente é eliminado
imprimirSoma()//é possivel não passar nada

//Funcao com retorno
function soma(a, b = 0) { //por padraão o valor de b é 0
    return a + b
}

console.log(soma(2,3))
console.log(soma(5))
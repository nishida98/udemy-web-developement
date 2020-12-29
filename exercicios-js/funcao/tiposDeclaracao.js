console.log(soma(1, 2))
/*
 mesmo chamando a função antes dela estar escrita, pois o interpretador do JavaScript le primeiro as funções
 mas somente com as declarações normais
 */

//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}

//named function expression
const mult = function mult(x, y){
    return x * y
}


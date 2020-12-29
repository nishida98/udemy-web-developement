/*
Faça um algoritmo que calcule o fatorial de um número
*/

function calculaFatorial(numero) {

    let fatorial = numero

    for(let i = 1; i < numero; i++){
        fatorial *= numero - i
    }

    return fatorial

}

console.log(calculaFatorial(100))
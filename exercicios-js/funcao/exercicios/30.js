/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorMenor(numeros){

    let menor = numeros[0]
    let maior = numeros[0]

    for(let i = 1; i < numeros.length; i++){

        if(numeros[i] > maior)
            maior = numeros[i]
        else if(numeros[i] < menor)
            menor = numeros[i]
    }

    return [maior, menor]

}

console.log(maiorMenor([0,56,10,-2,-10]))
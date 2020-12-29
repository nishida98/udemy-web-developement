/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function numerosIntervalo(numeros){

    let contIntervalo = 0
    let contForaIntervalo = 0 

    for(let i = 0; i < numeros.length; i++){

        if(numeros[i] >= 10 && numeros[i] <= 20)
            contIntervalo++
        else
            contForaIntervalo++

    }

    console.log(`${contIntervalo} estão no intervalo e ${contForaIntervalo} estão fora`)

}

numerosIntervalo([1,10,12,20,36])
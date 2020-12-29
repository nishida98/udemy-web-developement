/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function separaParesImpares(vetorNumeros){

    let contPares = 0
    let contImpares = 0

    for(let i = 0; i < vetorNumeros.length; i++){

        if(vetorNumeros[i] % 2 == 0)
            contPares++
        else
            contImpares++

    }

    console.log(`${contPares} são pares e ${contImpares} são impares`)

}

separaParesImpares([1,2,3,4,5,6,7,8,9,10])
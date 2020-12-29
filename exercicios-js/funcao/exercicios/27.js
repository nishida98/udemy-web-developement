/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/
function taxaDeCrescimento(altura1, taxa1, altura2, taxa2){
    
    let menorAltura
    let maiorAltura
    let taxaCrescimentoMenor
    let taxaCrescimentoMaior

    if(altura1 != altura2){

        if(altura1 < altura2){
            menorAltura = altura1
            taxaCrescimentoMenor = taxa1
            maiorAltura = altura2
            taxaCrescimentoMaior = taxa2
        }else{
            menorAltura = altura2
            taxaCrescimentoMenor = taxa2
            maiorAltura = altura1
            taxaCrescimentoMaior = taxa1
        }

    }

    if(taxaCrescimentoMaior > taxaCrescimentoMenor)
        return 'A criança menor nunca vai passar a maior'
    else{

        let anos = 1

        while(menorAltura <= maiorAltura){

            menorAltura *= (1 + taxaCrescimentoMenor)
            maiorAltura *= (1 + taxaCrescimentoMaior)
            anos++
        
        }

        return `A criança menor ultrapassara a maior em ${anos} anos`

    }

}

console.log(taxaDeCrescimento(50, 0.10, 55, 0.05))
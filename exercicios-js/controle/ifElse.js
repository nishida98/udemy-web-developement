const imprimirResultado = function(nota) {

    if(typeof nota == Number){

        if(nota >= 7) {
            console.log('Aprovado')
        } else {
            console.log('Reprovado')
        }
    
    } else {
        throw new Error('Não é um número!!!')
    }

}

imprimirResultado(2)
imprimirResultado('Epa!')
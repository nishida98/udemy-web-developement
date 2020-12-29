const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9: //9 e 10 possuem o mesmo resultado
            console.log('Nota entre 9 e 10, muito bom!')
            break
        case 8: case 7: case 6:
            console.log('Nota entre 6 e 8, poderia ir melhor!')
            break
        case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Nota entre 0 e 5, estude mais!')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(5)
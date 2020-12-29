Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
 
    if(nota.entre(9, 10)) {
        console.log('Top')
    } else if (nota.entre(7, 8.99)) {
        console.log('Quase lá')
    } else {
        console.log('Estude mais')
    }

}

imprimirResultado(5)
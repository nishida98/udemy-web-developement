/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function verificaAnoBissexto(ano) {

    let regra1 = ano % 400
    let regra2 = ano % 100
    let regra3 = ano % 4
    
    if(ano <= 0)
        return false
    if(regra1 == 0)
        return true
    else if (regra2 == 0)
        return false
    else if (regra3 == 0)
        return true
    
     return false

}

console.log(verificaAnoBissexto(100))
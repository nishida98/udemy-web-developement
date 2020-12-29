/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function retornaDiaUltil(dia) {

    switch(dia){
        case 1:
            return 'Fim de semana'
        case 2:
            return 'Últil'
        case 3:
            return 'Últil'
        case 4:
            return 'Últil'
        case 5:
            return 'Últil'
        case 6:
            return 'Últil'
        case 7:
            return 'Fim de semana'
        default:
            return 'Dia inválido' 
    }

}

console.log(retornaDiaUltil(5))
console.log(retornaDiaUltil(1))
console.log(retornaDiaUltil(8))
var numero = 1
{
    let numero = 2 //let tem escopo apenas dentro de bloco, possui o escopo menor. O escopo do menor para o maior
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)
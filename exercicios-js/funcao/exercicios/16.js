/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/
function operacoes(num1, num2, operacao){
    switch(operacao){
        case '+':
            return `Resultado da soma: ${num1 + num2}`
        case '-':
            return `Resultado da subtração: ${num1 - num2}`
        case '*':
            return `Resultado da multiplicação: ${num1 * num2}`
        case '/':
            return `Resultado da divisão: ${num1 / num2}`
        default:
            return `Operação invaálida`
    }
}

console.log(operacoes(4,2,'+'))
console.log(operacoes(4,2,'-'))
console.log(operacoes(4,2,'*'))
console.log(operacoes(4,2,'/'))
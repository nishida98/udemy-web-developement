/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = (C, i, t) => {
    return C * i * t
}

const jurosComposto = (C, i, t) => {
    return C * Math.pow(1 + i, t)
}

console.log(jurosSimples(1000, 0.025, 1))
console.log(jurosComposto(2000, 0.04, 4).toFixed(2))
let num1 = 1
let num2 = 2

//forma pós-fixada
num1++ 
console.log(num1)

//forma pré-fixada
--num1
console.log(num1)

console.log(++num1 === num2--)
//expressão tem 3 etapas: adicao de num1, comparaçaõ e a subtração de num2. então da true, pq a comparação só acontece dps
console.log(num1 === num2)
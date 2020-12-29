const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna a letra de um determinado indice
console.log(escola.charCodeAt(3)) //valor na tabela unicode

console.log(escola.indexOf('r')) //retorna o indice do caracter

console.log(escola.substring(1))//retorna desse indice pra frente
console.log(escola.substring(0, 1))//retorna uma string de um indice inicial até o (indice final - 1)

console.log(escola.concat(" !"))// concatena strings
console.log(escola.replace(3, 'e'))//faz o replace do primerio argumento pelo segundo

console.log('Ana,Maria,Pedro'.split(',')) //gera um array separando os elementos por virgulas

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //valida se uma variável é inteira

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//função para determinar o número de casas decimais do número
console.log(media.toString())//função para transformar em uma String
console.log(media.toString(2))//função que transforma o valor em binario
console.log(typeof media)
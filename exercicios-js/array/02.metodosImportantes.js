const pilotos = ['Vettel', 'Hemilton', 'Russel', 'Perez']

pilotos.pop() //Retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento
console.log(pilotos)

pilotos.shift() //Retira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Tsunoda')//Adiciona na primeira posicao do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas') //No indice 2, não remove ninguem, e adiciona um elemento
console.log(pilotos)

pilotos.splice(3, 1)//No indice 3 vamos remover um elemento
console.log(pilotos)

const novosPilotos = pilotos.slice(2) //gera um novo array a partir do indice informado
console.log(novosPilotos)

const algunsPilots = pilotos.slice(0, 3) //gera um array do indice 0 até 2
console.log(algunsPilots)
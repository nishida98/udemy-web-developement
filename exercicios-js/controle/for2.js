const notas = [1, 2, 3, 4, 5]

for(let i in notas) {
    console.log(`Index ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Oliveira',
    idade: 54,
    peso: 56
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
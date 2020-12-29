const nome = 'Leo'
const concatenacao = 'Olá' + nome + '!'

const template = `
    Olá
    ${nome}!
    ` // suporta quebra de linha e deve ficar entre crases (`)
console.log(template)

//expressões

console.log(`1+1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`) //é possivel chamar funções dentro de expressões
//Object.preventExtensions
//Previne o cenario de aumentar a quantidade de atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.00,
    tag: 'Promo'
})

console.log('Extensivel: ', Object.isExtensible(produto))
produto.nome = 'papel'
produto.descricao = 'papel toalha'
delete produto.tag
console.log(produto)

//Object.seal
//nao pode acrescentar novos campos e nem deletar
const pessoa = {nome: 'Juliana', idade: 50}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.nome = 'Ana'
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 98
console.log(pessoa)

//Object.freeze = selado + valores constante


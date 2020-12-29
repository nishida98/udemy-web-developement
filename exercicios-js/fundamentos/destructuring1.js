//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 55,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 526
    }
}

const { nome, idade} = pessoa //tire do objeto pessoa o nome e a idade
console.log(nome, idade)

const {nome: name, idade: age} = pessoa
console.log(name, age)

const {sobrenome, humor = 'Neutro(a)'} = pessoa //colocando valores padrão caso a variavel não seja definida
console.log(sobrenome, humor)

const {endereco : {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, numero}} = pessoa
console.log(ag, numero)
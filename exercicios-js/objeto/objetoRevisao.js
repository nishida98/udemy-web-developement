//Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor:  89000,
    proprietario: {
        nome: 'Raul',
        idade: 46,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    } ,
    condutores:[{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){

    }
}

console.log(carro.proprietario.endereco.logradouro)
console.log(carro['proprietario']['endereco']['numero'])
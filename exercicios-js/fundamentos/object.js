const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 5000.00
prod1['desconto legal'] = 0.40//pratica não aconselhavel...

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    materiais: {
        algodao: 0.7,
        seda: 0.3
    }
}

console.log(prod2)
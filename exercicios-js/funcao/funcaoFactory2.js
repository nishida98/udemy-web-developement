function criarProduto(nome = 'Sem nome', preco = '0.00') {
    return {
        nome, //como estou passando como parametro e não vou trocar o nome do atributo, não preciso declarar o nome
        preco,
        desconto: 5
    }
}

console.log(criarProduto('Alvejante', 3.00))
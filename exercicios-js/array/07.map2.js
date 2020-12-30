const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.45}',
    '{"nome": "Kit Lapis", "preco": 20.45}',
    '{"nome": "Caneta", "preco": 1.45}'
]

//Retornar um array com os preços
const precos = carrinho.map(item => JSON.parse(item).preco)
console.log(precos)
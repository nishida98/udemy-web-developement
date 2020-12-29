/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function valorDoPedido(codigo, quantidade) {
    switch(codigo){
        case 100:
            return `O valor do(s) cachorro(s) quente é(são) R$${(quantidade * 3.00).toFixed(2).replace('.', ',')}`
        case 200:
            return `O valor do(s) hamburguer(es) simples é(são) R$${(quantidade * 4.00).toFixed(2).replace('.', ',')}`
        case 300:
            return `O valor do(s) chesseburguer(es) é(são) R$${(quantidade * 5.50).toFixed(2).replace('.', ',')}`
        case 400:
            return `O valor do(s) baurus(s) é(são) R$${(quantidade * 7.50).toFixed(2).replace('.', ',')}`
        case 500:
            return `O valor do(s) refrigerantes(s) é(são) R$${(quantidade * 3.50).toFixed(2).replace('.', ',')}`
        case 600:
            return `O valor do(s) sucos(s) quente é(são) R$${(quantidade * 2.80).toFixed(2).replace('.', ',')}`
        default:
            return 'Produto não existe no cardápio'
    }
}

console.log(valorDoPedido(100, 5))
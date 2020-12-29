const a = {name: 'Teste'} // a constante tem o endereço do objeto
const b = a //b está recebendo o mesmo endereco de memoria
b.name = 'Leo' // vai alterar o nome de a também, pois é o mesmo endereço de memoria

console.log(a)
console.log(b)

let c = 3 //valor primitivo
let d = c //valor primitivo passado de c para d, não é uma atribuição por referencia
d++

console.log(c)
console.log(d)


let valor //variavel não definida, não inicializada
console.log(valor)

valor = null //ausencia de valor, inicializada, mas não aponta pra nenhum local de memoria
console.log(valor)

const produto = {}
console.log(produto.preco)//produto está definido, mas o preço não está
//console.log(produto.preco.a) //produto está definido, mas o preço não está então não podemos acessar "a"
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //não fazer isso, deixar o processamento interno fazer isso, para limpar a variavel usar null, 0, ''...
console.log(!!produto.preco)
console.log(produto)


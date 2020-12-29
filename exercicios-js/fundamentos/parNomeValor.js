const saudacao = 'Olá!' //contexto lexico 1 -> local no código que a variavel foi definido (raiz do arquivo)

function exec() {
    const saudacao = 'Hello!' //contexto lexico 2 -> contexto da funcao
    return saudacao
}

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 45,
    peso: 70.5,
    endereco: {
        logradouro: 'Rua XPTO',
        numero: 45,
        complemento: 'Apto 128'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
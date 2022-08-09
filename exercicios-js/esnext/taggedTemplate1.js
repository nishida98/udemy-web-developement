//processa o template dentro da funcao

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Luiz'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)
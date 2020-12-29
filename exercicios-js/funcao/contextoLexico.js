const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

//contexto de "minhaFuncao" é a raiz do arquivo não a função onde ela é chamada
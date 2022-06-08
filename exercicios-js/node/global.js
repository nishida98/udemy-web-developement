//console.log(global)
global.myApp = Object.freeze({
    saudacao() {
        return 'Olá!'
    },
    nome: 'Teste global!'
})
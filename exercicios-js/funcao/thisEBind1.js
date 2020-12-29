const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //o this não aponta mais para a pessoa

const falarDePessoa = pessoa.falar.bind(pessoa) //passo o objeto que this será resolvido
falarDePessoa()
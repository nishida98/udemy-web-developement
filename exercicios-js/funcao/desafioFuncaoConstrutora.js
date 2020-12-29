class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jéssica')
p1.falar()

//Função construtora
function construirPessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p2 = new construirPessoa('Lucas')
p2.falar()
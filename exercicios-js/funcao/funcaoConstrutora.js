function carro(velocidadeMaximo = 300, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo public
    this.acelerar = function() {
        
        if(velocidadeAtual + delta <= velocidadeMaximo)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaximo
    }

    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 50)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
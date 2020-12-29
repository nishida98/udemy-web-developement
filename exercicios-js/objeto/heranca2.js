//Cadeia de prototipo (prototype chain)
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr0)

Object.prototype.attr0 = '0'
console.log(filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: '458',
    velMax: 340 //shadowing
}

const volvo = {
    modelo: 'XC60',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(300)
console.log(ferrari.status())
console.log(volvo.status())
console.log(Math.ceil(6.1))
const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola 2' //mesma coisa que a linha de cima
console.log(obj1.nome) 

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('colher')
console.log(obj2.nome)

const obj3 = new Obj('garfo')
console.log(obj3.nome)
obj3.exec()
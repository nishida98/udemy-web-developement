function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula1 = new Aula('Aula 1', 1)
const aula2 = new Aula('Aula 2', 2)
console.log(aula1, aula2)

//simulando o new

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)

    return obj
}

console.log(novo(Aula, 'Aula 123', 123))
console.log(novo(Aula, 'Aula 123', 123).__proto__ === Aula.prototype)

 
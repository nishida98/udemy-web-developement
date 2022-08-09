//let e const
//let tem escopo de bloco
{
    var a = 2 //var nao tem escopo de bloco
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é
caro!`)

// Destructuring
// Desestruturar as coisas
const [l,e,o, ...nardo] = "Leonardo"
console.log(l,e,o,nardo)

const [x, y] = [1,2,3]
console.log(x, y)

const [c, ,b] = [1,2,3]
console.log(c, b)

const {name1, age} = {name1:'Leo', age:23}
console.log(name1, age)
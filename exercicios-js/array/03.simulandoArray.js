const quaseArray = {0: 'Rafael', 1: 'Leo', 3: 'Matheus'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Leo', 'Matheus']
console.log(meuArray.toString())
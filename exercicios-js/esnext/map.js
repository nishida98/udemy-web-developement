const tecnologias = new Map()
tecnologias.set('react', {framework:false})
tecnologias.set('angular', {framework:true})

console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function(){}, 'funcao'],
    [{}, 'obj'],
    [123, 'numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

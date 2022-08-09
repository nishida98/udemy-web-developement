//nao aceita repeticao
//nao indexado

const times = new Set()
times.add('Santos').add('Sao Paulo')
times.add('Palmeiras')

console.log(times)
console.log(times.size)
console.log(times.has('Santos'))
times.delete('Palmeiras')

const timesPL = new Set(
    ['Arsenal', 'Liverpool']
)

console.log(timesPL)
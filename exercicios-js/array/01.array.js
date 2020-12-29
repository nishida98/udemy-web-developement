console.log(typeof Array, typeof new Array, typeof [])

let aprovados =  new Array('Ana', 'Amanda', 'Aline')
console.log(aprovados)

aprovados = ['Carlos', 'Claudio', 'Claudinei']
console.log(aprovados)
console.log(aprovados[1])

aprovados[3] = 'Claudemir'
aprovados.push('Caio')
console.log(aprovados.length)

aprovados[9] = 'Caue'
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Carlos', 'Claudio', 'Claudinei']
aprovados.splice(1, 1)
console.log(aprovados)

aprovados = ['Carlos', 'Claudio', 'Claudinei']
aprovados.splice(1, 2)
console.log(aprovados)

aprovados = ['Carlos', 'Claudio', 'Claudinei']
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2')
console.log(aprovados)
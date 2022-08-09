//spread com objeto
const funcionario = {nome:'Maria', salario: 1234.56}
const clone = {ativo: true, ...funcionario}

console.log(funcionario)
console.log(clone)

//spread com array
const grupoA = ['Leo', 'Pedro', 'Lucas']
const grupoB = ['Gloria', ...grupoA, 'Amanda']
console.log(grupoB)
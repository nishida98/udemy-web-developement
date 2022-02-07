const alunos = [
    {nome: 'Leo', nota: 10, bolsista: false},
    {nome: 'Andre', nota: 9, bolsista: true},
    {nome: 'Ana', nota: 5, bolsista: false}
]

//Todos os alunos são bolsistas?
const result1 = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(result1))
//Tem algum aluno bolsista?
const result2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(result2))
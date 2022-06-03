const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 7
    },{
        nome: 'Ana',
        nota: 8
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Leo',
        nota: 10
    },{
        nome: 'Amanda',
        nota: 10
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
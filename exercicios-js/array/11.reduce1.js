 const alunos = [
     {nome: 'Leo', nota: 10, bolsista: false},
     {nome: 'Andre', nota: 9, bolsista: true},
     {nome: 'Ana', nota: 5, bolsista: false}
 ]

 const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {

    console.log(acumulador, atual) 
    return acumulador + atual

}) 

console.log(resultado)
const aprovados = ['Ana', 'Bruno', 'Renato', 'Felipe']

//primeiro parametro é o objeto sendo lido, segundo - indice, terceiro o array propriamente dito
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1} / ${array.length}) ${nome} `)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)
//implementacao de um foreach
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Bruno', 'Renato', 'Felipe']

//primeiro parametro é o objeto sendo lido, segundo - indice, terceiro o array propriamente dito
aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1} / ${array.length}) ${nome} `)
})

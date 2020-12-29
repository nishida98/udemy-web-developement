const sequencia = {
    
    _valor: 1, //convencao de variavel privada, mas isso nao proibe de ser acessada
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        
        if(valor > this._valor){
            this._valor = valor
        }
        
    }

}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
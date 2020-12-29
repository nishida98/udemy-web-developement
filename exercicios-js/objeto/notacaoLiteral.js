const a = 1
const b = 2
const c = 3

//não é necessário criar dessa forma, se o nome das variaveis for igual ao nome da variavel que vc quer atribuir
const obj1 = {
    a: a,
    b: b,
    c: c
}

const obj2 = {
    a,
    b,
    c
}

const nome = 'nota'
const valor = 7.87
const obj3 = {}
obj3[nome] = valor

const obj4 = {
    [nome]: valor
}

const obj5 = {
    funcao1: function() {

    },
    funcao2(){
        
    }
}
// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {

}

// Armazenar em uma variavel
const fun2 = function() {

}

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() {return 'Olá'}
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}
run(fun1)

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)
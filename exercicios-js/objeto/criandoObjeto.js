//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
//nome está publico, preco e desconto não

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Caneca', 30, 0.5)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
 
//Função factory
function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 8000, 4)
const f2 = criarFuncionario('Maria', 18000, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
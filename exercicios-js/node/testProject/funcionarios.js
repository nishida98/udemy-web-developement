const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filterMulherChinesa = f => f.genero === 'F' && f.pais === 'China'
const reduceMenorSalario = (func, funcAtual) => {
   return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulherChinesaComMenorSalario = funcionarios.filter(filterMulherChinesa)
                                                     .reduce(reduceMenorSalario)

    console.log(mulherChinesaComMenorSalario)
})
/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function sacarDinheiro(valor) {

    let retornoValores = []

    while(valor != 0){

        if(valor >= 100){

            retornoValores.push(`${Math.floor(valor/100)} nota(s) de R$100. `)
            valor = valor % 100
            
        }else if(valor >= 50){

            retornoValores.push(`${Math.floor(valor/50)} nota(s) de R$50. `)
            valor = valor % 50

        }else if(valor >= 10){

            retornoValores.push(`${Math.floor(valor/10)} nota(s) de R$10. `)
            valor = valor % 10

        }else if(valor >= 5){

            retornoValores.push(`${Math.floor(valor/5)} nota(s) de R$5. `)
            valor = valor % 5

        }else if(valor >= 1){

            retornoValores.push(`${Math.floor(valor/1)} nota(s) de R$1. `)
            valor = valor % 1

        }

    }

    return retornoValores

}

let valoresResposta = sacarDinheiro(953)
let stringResposta = ''

for(s in valoresResposta){

    stringResposta += valoresResposta[s]

}

console.log(stringResposta)
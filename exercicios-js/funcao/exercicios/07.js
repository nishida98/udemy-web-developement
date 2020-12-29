/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

const bhaskara = (a, b, c) => {

    const delta = Math.pow(b, 2) - 4 * a * c
    const resultados = []    

    if(delta < 0)
        return 'Delta negativo'
    else{
        x1 = (-b + Math.sqrt(delta))/2 * a
        resultados.push(x1)
        x2 = (-b - Math.sqrt(delta))/2 * a
        resultados.push(x2)
    }

    return resultados
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
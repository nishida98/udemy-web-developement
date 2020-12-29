/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

const tipoTriangulo = (lado1, lado2, lado3) => {

    if(lado1 == lado2 == lado3)
        return 'Triangulo equilátero'
    else if(lado1 != lado2 != lado3)
        return 'Triangulo escaleno'
    else
        return 'Triangulo isósceles'

}

console.log(tipoTriangulo(1,1,1))
console.log(tipoTriangulo(1,2,1))
console.log(tipoTriangulo(1,2,3))

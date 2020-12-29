/* 
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function calculaMedia(codigoAluno, nota1, nota2, nota3){

    let media = nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3
    console.log(`    Aluno ${codigoAluno} teve as seguintes notas:
        Nota 1: ${nota1}
        Nota 2: ${nota2}
        Nota 3: ${nota3}
        Média Final: ${media}
        Situação: ${media >= 5 ? 'Aprovado' : 'Reprovado'}`)

}

calculaMedia(1, 5, 6, 4)
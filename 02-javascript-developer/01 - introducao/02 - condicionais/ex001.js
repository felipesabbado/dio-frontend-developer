/* Faça um algoritmo que, dado as 3 notas tiradas por um aluno em um semestre
 * da faculdade, calcule e imprima a sua média e a sua classificação conforme
 * conforme a tabela abaixo.
 * 
 * Média = (nota 1 + nota 2 + nota 3) / 3;
 * 
 * Classificação:
 * - Média menor que 5, reprovado;
 * - Média entre 5 e 7, em recuperação;
 * - Média acima de 7, aprovado no semestre.
 */

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function calcularClassificacao(media) {
    if (media < 5) {
        return "REPROVADO";
    } else if (media < 7) {
        return "RECUPERAÇÃO";
    } else {
        return "APROVADO";
    }
}

(function () {
    const nota1 = 7.5;
    const nota2 = 8.3;
    const nota3 = 6.4;

    const mediaNotasSemestre = calcularMedia(nota1, nota2, nota3);
    const statusAluno = calcularClassificacao(mediaNotasSemestre);

    console.log(`Com a média ${mediaNotasSemestre.toFixed(1)} você está ${statusAluno}`)
})();

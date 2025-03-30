/* Elabore um algoritmo que, dado o peso e a altura de um adulto, calcule seu IMC e
 * mostre sua condição de acordo com a tabela abaixo.
 *
 * Fórmula do IMC: IMC = peso / (altura * altura)
 * 
 * IMC em adultos:
 * - Menor que 18.5 -> Abaixo do peso;
 * - Entre 18.5 e 25 -> Peso normal;
 * - Entre 25 e 30 -> Acima do peso;
 * - Entre 30 e 40 -> Obeso;
 * - Acima de 40 -> Obsidade grave;
 */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function calcularCondicao(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Acima do peso";
    } else if (imc < 40) {
        return "Obesidade";
    } else {
        return "Obesidade Grave";
    }
}

(function () {
    const peso = 100.4;
    const altura = 1.50;
    
    const imc = calcularImc(peso, altura);
    const condicao = calcularCondicao(imc);

    console.log(`IMC = ${imc.toFixed(1)} - ${condicao}`);
})();    

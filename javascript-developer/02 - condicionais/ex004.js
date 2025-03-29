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

const peso = 100.4;
const altura = 1.50;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(`IMC = ${imc.toFixed(1)} - Abaixo do peso`);
} else if (imc < 25) {
    console.log(`IMC = ${imc.toFixed(1)} - Peso normal`);
} else if (imc < 30) {
    console.log(`IMC = ${imc.toFixed(1)} - Acima do peso`);
} else if (imc < 40) {
    console.log(`IMC = ${imc.toFixed(1)} - Obesidade`);
} else {
    console.log(`IMC = ${imc.toFixed(1)} - Obesidade Grave`)
}

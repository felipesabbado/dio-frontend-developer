/* Faça um programa que receba N (quantidade de números) e seus respectivos valores.
 * Imprima o maior número par e o menor número impar.
 * 
 * Exemplo:
 *      Entrada:
 *          5
 *          3
 *          4
 *          1
 *          10
 *          8
 * 
 *      Saída:
 *          Maior número par: 10
 *          Menor número impar: 1
 */

const { gets, print } = require('./ex002-funcoes-auxiliares');

const size = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < size; i++) {
    const proximoNumero = gets();
    
    if (proximoNumero % 2 === 0) {
        if (maiorNumeroPar === null || proximoNumero > maiorNumeroPar) {
            maiorNumeroPar = proximoNumero;
        }
    } else {
        if (menorNumeroImpar === null || proximoNumero < menorNumeroImpar) {
            menorNumeroImpar = proximoNumero;
        }
    }
}

print("Maior número par: " + maiorNumeroPar);
print("Menor número ímpar: " + menorNumeroImpar);

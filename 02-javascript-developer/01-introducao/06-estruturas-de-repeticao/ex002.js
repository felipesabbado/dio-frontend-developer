/* Crie um programa que seja capaz de percorrer uma lista de números e imprimir
 * cada número PAR encontrado
 */

const numeros = [7, 12, 25, 48, 55, 60];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i] + " é par");
    }
}

/* Faça um programa para calcular o valor de uma viagem
 * 
 * Você terá as seguintes variáveis:
 * 1 - Preço do etanol;
 * 2 - Preço da gasolina;
 * 3 - O tipo de combustível utilizado pelo automóvel;
 * 4 - Gasto médio de combustível do automóvel em Km/L;
 * 5 - Distância em Km da viagem;
 * 
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoGasolina = 6.35;
const precoEtanol = 4.36;
const kmPorLitroGasolina = 14.9;
const kmPorLitroEtanol = 10.3;
const distanciaKm = 350;
const tipoCombustivel = "Etanol" // Gasolina ou Etanol
let precoFinal = "O preço final será R$";

if (tipoCombustivel === "Gasolina") {
    precoFinal += (precoGasolina * (distanciaKm / kmPorLitroGasolina)).toFixed(2);
} else if (tipoCombustivel === "Etanol") {
    precoFinal += (precoEtanol * (distanciaKm / kmPorLitroEtanol)).toFixed(2);
} else {
    precoFinal = "Combustível inválido";
}

console.log(precoFinal);

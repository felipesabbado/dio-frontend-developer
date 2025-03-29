/* Faça um programa para calcular o valor de uma viagem
 * 
 * Você terá 3 variáveis, sendo elas:
 * 1 - Preço do combustível;
 * 2 - Gasto médio de combustível do carro por KM;
 * 3 - Distância em KM da viagem;
 * 
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoCombustivel = 6.35;
const kmPorLitro = 14.9;
const distanciaKm = 350;

const precoFinal = precoCombustivel * (distanciaKm / kmPorLitro);

console.log(precoFinal.toFixed(2)); // Transforma um número em string e arrendonda para o número de casas decimais informado

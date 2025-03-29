/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço
 * normal de etiqueta e a escolha da condição de pagamento.
 * Utilize os códigos da tabela abaixo para ler qual a condição de pagamento e efetuar o
 * cálculo adequado.
 * 
 * Código da condição de pagamento:
 * - (10) À vista no débito, recebe 10% de desconto;
 * - (11) À vista em dinheiro, recebe 15% de desconto;
 * - (12) Em 2x, preço normal da etiqueta sem juros;
 * - (13) Acima de 2x, preço normal da etiqueta mais juros de 10%.
 */

const preco = 100;
const tipoPagamento = 13;
let valorFinal;

if (tipoPagamento === 10) {         // Débito à vista
    valorFinal = preco * 0.9;
} else if (tipoPagamento === 11) {  // Pagamento em dinheiro
    valorFinal = preco * 0.85;
} else if (tipoPagamento === 12) {  // 2x sem juros
    valorFinal = preco;
} else {                            // Acima de 2x
    valorFinal = preco * 1.1;
}

console.log(`Preço final R$${valorFinal.toFixed(2)}`)

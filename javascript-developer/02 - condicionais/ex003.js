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

function calcularDesconto(preco, taxa) {
    return preco * (1 - taxa / 100);
}

function calcularJurosSimples(preco, taxa) {
    return preco * (1 + taxa / 100);
}

function calcularPrecoFinal(tipoPagamento, preco) {
    if (tipoPagamento === 10) {         // Débito à vista
        return calcularDesconto(preco, 10);
    } else if (tipoPagamento === 11) {  // Pagamento em dinheiro
        return calcularDesconto(preco, 15);
    } else if (tipoPagamento === 12) {  // 2x sem juros
        return preco;
    } else {                            // Acima de 2x
        return calcularJurosSimples(preco, 10);
    }
}

(function () {
    const preco = 100;
    const tipoPagamento = 10; // 10 - Débito à vista, 11 - Dinheiro, 12 - 2x sem juros, 13 - Acima de 2x
    const valorFinal = calcularPrecoFinal(tipoPagamento, preco);
    
    console.log(`Preço final R$${valorFinal.toFixed(2)}`)
})();

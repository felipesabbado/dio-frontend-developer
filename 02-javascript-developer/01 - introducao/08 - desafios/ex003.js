/* Faça um programa que calcule e imprima o salário a ser transferido para um funcionário
 * Para realizar o cálculo, receba o valor bruto do salário e o adicional dos benefícios.
 * O salário a ser tranferido é calculado da seguinte maneira:
 * valor bruto do salário - percentual de impostos mediante a faixa salarial +
 * adicional dos benefícios
 * 
 * Para calcular o percentual de imposto segue as alíquotas:
 * 
 *      De R$ 0.00 a R$ 1100.00 = 5.00%
 *      De R$ 1100.01 a R$ 2500.00 = 10.00%
 *      Maior que R$ 2500.00 = 15.00%
 * 
 *      Exemplo:
 *          Entrada:
 *              2000
 *              250
 * 
 *        Saída:
 *              2050.00
 */

const { gets, print } = require('./ex003-funcoes-auxiliares')

function descontarImposto(salario, aliquota) {
    return salario - (salario * (aliquota / 100))
}

const salarioBruto = gets();
const beneficios = gets();
let salarioLiquido;

if (salarioBruto <= 1100) {
    salarioLiquido = descontarImposto(salarioBruto, 5);
} else if (salarioBruto <= 2500) {
    salarioLiquido = descontarImposto(salarioBruto, 10);
} else {
    salarioLiquido = descontarImposto(salarioBruto, 15);
}

const salarioFinal = salarioLiquido + beneficios;

print(salarioFinal);

/* Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
 * Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e
 * peça ao José para dizer o valor do seu IMC
 */

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularImc();
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        if (this.imc < 18.5) {
            return "abaixo do peso";
        } else if (this.imc < 25) {
            return "com peso normal";
        } else if (this.imc < 30) {
            return "acima do peso";
        } else if (this.imc < 40) {
            return "com obesidade";
        } else {
            return "com obesidade Grave";
        }
    }

    dizerImc() {
        console.log(`Meu nome é ${this.nome}, o meu IMC é ${this.imc.toFixed(2)} e estou ${this.classificarImc()}.`);
    }
}

const pessoa = new Pessoa("José", 70, 1.75);

pessoa.dizerImc();

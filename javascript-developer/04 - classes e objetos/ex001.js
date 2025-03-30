/* Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível em Km/l.
 * Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percurso.
 */

class Carro {
    constructor(marca, cor, consumoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }

    calcularValorViagem(kmPercorrido, precoCombustivel) {
        return precoCombustivel * (kmPercorrido / this.consumoMedioPorKm);
    }
}

const precoCombustivel = 6.3;
const kmPercorrido = 300;

const carro1 = new Carro("Mercedes", "preto", 8.9);

console.log(carro1);

console.log(carro1.calcularValorViagem(kmPercorrido, precoCombustivel));

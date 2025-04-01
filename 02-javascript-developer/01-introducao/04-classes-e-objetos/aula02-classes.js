class Pessoa {
    constructor(nome, idade, altura, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.sexo = sexo;
        this.anoNascimento = new Date().getFullYear() - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)
    }
}

const joao = new Pessoa("Joao", 22, 1.68, 'M');
const maria = new Pessoa("Maria", 35, 1.86, 'F');

joao.peso = 90.5;

joao.descrever();
maria.descrever();

const pessoas = [joao, maria];

for (let i in pessoas) {
    for (let atributo in pessoas[i]) {
        console.log(atributo + ": " + pessoas[i][atributo]);
    }
}

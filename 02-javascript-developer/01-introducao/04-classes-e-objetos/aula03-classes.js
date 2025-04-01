class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = new Date().getFullYear() - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)
    }
}

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`);
    } else if (pessoa1.idade < pessoa2.idade) {
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`);
    } else {
        console.log(`${pessoa1.nome} tem a mesma idade de ${pessoa2.nome}`);
    }
}

const renan = new Pessoa("Renan", 30);
const vitor = new Pessoa("Vitor", 25);

compararPessoas(renan, vitor);
compararPessoas(vitor, renan);

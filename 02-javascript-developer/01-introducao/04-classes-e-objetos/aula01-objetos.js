// Um objeto, em JavaScript, é uma coleção dinâmica de chave/valor
// Uma função dentro de um objeto é chamada de método

const pessoa = {
    nome: "João",
    idade: 25,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

console.log(pessoa);

// adicionar uma nova variável dentro do objeto
pessoa.altura = 1.75

// apagar um elemento (chave/valor) do objeto
// delete pessoa.altura

pessoa.descrever();

delete pessoa.descrever;

// Outra forma de acessar os valores de um objeto
const atributo = "idade";

console.log("Idade: " + pessoa[atributo]);

for (let atributo in pessoa) {
    console.log(atributo + ": " + pessoa[atributo])
}

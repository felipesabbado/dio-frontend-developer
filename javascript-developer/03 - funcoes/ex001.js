// Crie uma função que escreva seu nome

function escreverNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

escreverNome("João");
escreverNome("Maria");

// Crie uma função para verificar se uma pessoa é maior de idade

function verificarIdade(idade) {
    if(idade >= 18) {
        console.log("Maior de Idade");
    } else {
        console.log("Menor de Idade");
    }
}

verificarIdade(16);
verificarIdade(18);
verificarIdade(25);

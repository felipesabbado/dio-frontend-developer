// Strings funcionam como arrays, sendo possível iterar pelos caracteres

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log("A média das notas é: " + soma / notas.length);

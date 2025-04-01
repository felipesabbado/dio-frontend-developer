// Formas de importar as funções de outro arquivo

/* const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets());
funcoes.print(funcoes.gets()); */

const { gets, print } = require('./funcoes-auxiliares').default;

print(gets());

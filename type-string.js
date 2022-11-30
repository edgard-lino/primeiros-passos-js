const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";
const citacao = 'O Edgard disse "oi!".'
console.log(citacao);

// concatenação (+)

const citacao2 = 'Meu nome é ';
const meuNome = 'Edgard';
console.log(citacao2 + meuNome); 

// template string ou template literal

// alguns exemplos de Unicode ("\u" no início)

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// comparando strings

const cidade = "Curitiba";
const input = "curitiba";
console.log(cidade === input);

// transformando em minúsculo

const cidadeMinusculo = "belo horizonte";
const inputMaiusculo = "Belo Horizonte";

const inputMinusculo = inputMaiusculo.toLowerCase();

console.log(cidadeMinusculo === inputMinusculo);

// length - quantidade de caracteres

const minhaSenha = "minhaSenha123";

console.log(minhaSenha.length);
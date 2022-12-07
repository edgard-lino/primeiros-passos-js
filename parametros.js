// parametros de função
function soma(num1, num2) {
  return num1 + num2;
};

console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// Parâmetros x Argumentos (é a mesma coisa)

// Ordem dos parâmetros 

function nomeIdade (nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}.`
};

console.log(nomeIdade(44, "Edgard"));

function multiplica (num1, num2) {
  return num1 * num2;
};

console.log(multiplica(soma(2, 3), soma(4, 4)));

// único parâmetro? NaN
console.log(multiplica(soma(2, 3)));

// define um número padrão para o caso de um único parâmetro
function multiplica2(num1 = 1, num2 = 2) {
  return num1 * num2;  
}


// declaração de função

function minhaFuncao(param) {
    // bloco de código
};

minhaFuncao ("param");

// Expressão de função
const soma = function (num1, num2) {return num1 + num2};
console.log(soma(1, 1));

// Diferença principal: HOISTING
// Funções e Var são "listadas" no topo

console.log(apresentar());
function apresentar() {
  return "Olá!";
};

// no caso abaixo a const deve ser iniciada antes pra não dar erro


const soma2 = function(num1, num2) {return num1 + num2};
console.log(soma2(2, 2));
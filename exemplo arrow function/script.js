// while
var letraCerta = prompt("Digite a letra a");
while (letraCerta !== "a") {
  letraCerta = prompt('Por favor, digite a letra "a"');
};
alert("Obrigado!");

var total = 0;
while(total < 5) {
  console.log (total);
  total++;
};
console.log("saiu do while " + total);

// for
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var listaNumeros = [1, 2, 3, 4, 5];
for (var i = 0; i < listaNumeros.length; i++) {
  if (listaNumeros[i] === 3) {
    console.log("número encontrado");
  }
  console.log("não é o número")
}
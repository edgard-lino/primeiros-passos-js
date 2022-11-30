var lista = [ 10, 1, 5, 9, 8, 12, 15 ];

// usando sort() -> [ 1, 10, 12, 15, 5, 8, 9 ] - 

const ordenado = lista.sort()

console.log(ordenado);

// implementando comparação
// se for 0 indica que são iguais
// se for -1 indica que o primeiro é menor
// se for 1 indica que o segundo é menor 

function comparaNumeros (a, b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1 };

console.log(lista.sort(comparaNumeros));

// Simplificando a ordenação

console.log(lista.sort((a, b) => a - b));
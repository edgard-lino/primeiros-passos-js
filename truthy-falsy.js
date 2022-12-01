// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null ==> vazio ou nada
// undefined

let minhaVar; // ainda não foi definido => undefined
let varNull = null; // null

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull); // erro, bug do js, foi criado como objeto
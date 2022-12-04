// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";
console.log(numero === numeroString);
console.log(numero == numeroString);
console.log(numero + numeroString);

// conversão explícita
// Number()

console.log(numero + Number(numeroString));

// String()

let telefone = 12341234;
console.log("O telefone é " + String(telefone));

// ou então: 
console.log("O telefone é " + telefone.toString());

let usuarioConectado = false;
console.log(String(usuarioConectado));
usuarioConectado = true;
console.log(String(usuarioConectado));

// Number()
// área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura)*Number(altura));

// Podemos usar o operador de soma (+)
console.log( + largura * + altura);

// Casos que retorna NaN
let meuNome = "Leonardo";
console.log(Number(meuNome));
console.log( + meuNome);


console.log(Number(usuarioConectado));
usuarioConectado = false;
console.log(Number(usuarioConectado));
// var - primeira variável criada no JS, pode dar bugs. Ela é muito livre.
// let - é mais segura que a var, pode ter valores reatribuídos.
// const - valor constante, não altera valor.
// recomendado uso do let e const.


// var
// var altura = 5;
// var comprimento = 7;
// area = altura * comprimento;
// console.log(area);
// var area;

// let
// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// };

// console.log(area);

// const
const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area);

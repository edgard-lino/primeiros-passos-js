function ganhoPorHora (salarios, horasTrabalhadas) {
  const salarioHora = (salarios / horasTrabalhadas);
  return salarioHora;
};

console.log(ganhoPorHora(3000, 176));

// usando Math.round() -> arredonda para o inteiro mais próximo

function ganhoPorHoraArredondado (salarios, horasTrabalhadas) {
  const salarioHora = (salarios / horasTrabalhadas);
  return Math.round(salarioHora);
};

console.log(ganhoPorHoraArredondado(3000, 176));

// usando o metodo toFixed() -> arredonda para cima -> resultado em string

function ganhoPorHoraToFixed (salarios, horasTrabalhadas) {
  const salarioHora = (salarios / horasTrabalhadas);
  return salarioHora.toFixed(2);
}

console.log(ganhoPorHoraToFixed(3000, 176));

// formatando resultado para Real

function ganhoPorHoraReal (salarios, horasTrabalhadas) {
  const salarioHora = (salarios / horasTrabalhadas);
  const formatado = salarioHora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  return formatado;
}

console.log(ganhoPorHoraReal(3000, 176));
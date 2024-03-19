function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1; // O fatorial de 0 e 1 é sempre 1
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  const numeroParaCalcular = 8; 
  
  const resultado = calcularFatorial(numeroParaCalcular);
  
  console.log(`O fatorial de ${numeroParaCalcular} é ${resultado}`);

  module.exports = {calcularFatorial};

      
const { calcularFatorial } = require('./calculadora'); 

describe('Calculadora de Fatorial', () => {
  it('Deve calcular o fatorial de 5 corretamente', () => {
    expect(calcularFatorial(5)).toBe(120);
  });

  it('Deve calcular o fatorial de 0 corretamente', () => {
    expect(calcularFatorial(0)).toBe(1);
  });

  it('Deve calcular o fatorial de 1 corretamente', () => {
    expect(calcularFatorial(1)).toBe(1);
  });

});

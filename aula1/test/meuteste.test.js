const {somar, subtrair, multiplicar, dividir} = require("../calculadora")
describe("Iremos testar os caclulos do nosso sistema", ()=>{
    it("Vai realizar a soma de dois numeros", () => {
        //TESTE de Unidade
        expect(somar(5,5)).toBe(10)
    })
    it("Vai realizar a subtracao de dois numeros", () => {
        //TESTE de Unidade
        expect(subtrair(5,5)).toBe(0)
    })
    it("Vai realizar a multiplicacao de dois numeros", () => {
        //TESTE de Unidade
        expect(multiplicar(5,5)).toBe(25)
    })
    it("Vai realizar a divisao de dois numeros", () => {
        //TESTE de Unidade
        expect(dividir(5,0)).toBe()
    })
    it("Vai realizar a divisao2 de dois numeros", () => {
        //TESTE de Unidade
        expect(() => {
            dividir(5,0);
        }).toThrow('NAO PODE DIVIDIR POR ZERO');
    })
})
const express = require("express")
const {somar} = require("./calculadora")
const {subtrair, multiplicar, dividir} = require("./calculadora")
const app = express()
const porta = 3000;


app.get("/rota", (requisicao, resposta)=> {
    const respostaDaSoma = somar(2,3)
    resposta.send("A resposta do cálculo é: " + respostaDaSoma)

} )

app.get("/rota", (requisicao, resposta)=> {
    const respostaDaSubtracao = subtrair(4,3)
    resposta.send("A resposta do cálculo é: " + respostaDaSubtracao)

} )

app.get("/rota", (requisicao, resposta)=> {
    const respostaDaMultiplicacao = multiplicar(2,4)
    resposta.send("A resposta do cálculo é: " + respostaDaMultiplicacao)

} )

app.get("/rota", (requisicao, resposta)=> {
    const respostaDaDivisao = dividir(2,3)
    resposta.send("A resposta do cálculo é: " + respostaDaDivisao)

} )

app.listen(porta, () => {
    console.log('Opa, nosso servidor levantou ' + porta)

})
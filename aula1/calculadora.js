const somar = (valor1, valor2) => {
    return valor1 + valor2;
}

const subtrair = (valor1, valor2) => {
    return valor1 - valor2;
}

const multiplicar = (valor1, valor2) => {
    return valor1 * valor2;
}

const dividir = (valor1, valor2) => {
    if(valor2 == 0) {
        throw new Error("NAO PODE DIVIDIR POR ZERO")
    }
    return valor1 / valor2
}

module.exports = {
    somar,
    dividir,
    subtrair,
    multiplicar
}
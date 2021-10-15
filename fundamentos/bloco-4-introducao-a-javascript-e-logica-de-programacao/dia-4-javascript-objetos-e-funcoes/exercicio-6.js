function obterSomatorio(numero) {
    let somatorio = 0;
    for (let i = 1; i < (numero + 1); i++) {
        somatorio += i;
    }

    return somatorio;
}

console.log(obterSomatorio(5));
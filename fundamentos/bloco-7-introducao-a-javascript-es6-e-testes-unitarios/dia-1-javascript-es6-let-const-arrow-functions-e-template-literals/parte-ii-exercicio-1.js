const fatorial = numero => {
    let resultado = 1;

    for (let i = 1; i <= numero; i += 1) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(0));
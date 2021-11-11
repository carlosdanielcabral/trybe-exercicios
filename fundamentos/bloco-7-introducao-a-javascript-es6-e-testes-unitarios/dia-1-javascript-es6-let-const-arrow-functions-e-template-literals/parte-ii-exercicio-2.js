const maiorPalavra = frase => {
    const array = frase.split(' ');
    let maior;
    for (let i = 0; i < array.length; i += 1) {
        maior = array[i];

        for (let palavra of array) {
            if (palavra.length > maior.length) {
                maior = palavra;
            }
        }
    }

    return maior;
}

console.log(maiorPalavra('Olá como está seu ANTONININI'))
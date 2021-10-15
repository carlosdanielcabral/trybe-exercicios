function retornarIndiceDoMaiorValor(arrayInteiros) {
    let maiorValor = arrayInteiros[0];

    for (let index of arrayInteiros) {
        if (index > maiorValor) {
            maiorValor = index;
        }
    }

    return arrayInteiros.indexOf(maiorValor);
}

console.log(retornarIndiceDoMaiorValor([2,3,6,7,10,1]))
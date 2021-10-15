function retornarOIndiceDoMenorValor(arrayDeInteiros) {

    let menorValor = arrayDeInteiros[0];

    for (let index of arrayDeInteiros) {
        if (index < menorValor) {
            menorValor = index;
        }
    }

    return arrayDeInteiros.indexOf(menorValor);
}

console.log(retornarOIndiceDoMenorValor([2,4,6,7,10,0,-3]))
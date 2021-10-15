function obterMaiorNome(arrayDeNomes) {
    let maiorNome = '';

    for (let index of arrayDeNomes) {
        if (index.length > maiorNome.length) {
            maiorNome = index;
        }
    }

    return maiorNome;
}

console.log(obterMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
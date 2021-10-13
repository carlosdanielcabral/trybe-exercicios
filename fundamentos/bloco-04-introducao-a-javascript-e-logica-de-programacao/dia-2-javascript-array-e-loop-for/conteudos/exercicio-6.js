let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroDeImpares = 0;

for (let i = 0; i < numbers.length; i += 1) {
    let modulo = numbers[i] % 2;
    if (modulo !== 0) {
        numeroDeImpares += 1;
    }
}

if (numeroDeImpares !== 0) {
    console.log(numeroDeImpares);
} else {
    console.log("Nenhum valor ímpar encontrado");
}
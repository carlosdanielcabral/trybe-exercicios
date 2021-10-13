let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let tamanhoArray = numbers.length;
let soma = 0;

for (let i = 0; i < tamanhoArray; i += 1) {
    soma += numbers[i];
}

let mediaAritmetica = soma / tamanhoArray;

console.log(mediaAritmetica);
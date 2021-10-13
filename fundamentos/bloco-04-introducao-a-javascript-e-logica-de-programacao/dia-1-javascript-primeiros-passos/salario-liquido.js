const salarioBruto = 2980.50
let salarioLiquido;
let aliquotaInss;
let impostoDeRenda;

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09; 
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88;
}

let salarioDeduzidoInss = salarioBruto - aliquotaInss;

if (salarioDeduzidoInss <= 1903.98) {
    impostoDeRenda = 1;
} else if (salarioDeduzidoInss >= 1903.99 && salarioDeduzidoInss <= 2826.65) {
    impostoDeRenda = (salarioDeduzidoInss * 0.075) - 142.80;
} else if (salarioDeduzidoInss >= 2826.66 && salarioDeduzidoInss <= 3751.05) {
    impostoDeRenda = (salarioDeduzidoInss * 0.15) - 354.80;
} else if (salarioDeduzidoInss >= 3751.06 && salarioDeduzidoInss <= 4664.68) {
    impostoDeRenda = (salarioDeduzidoInss * 0.225) - 636.13;
} else {
    impostoDeRenda = (salarioDeduzidoInss * 0.275) - 869.36;
}

salarioLiquido = salarioBruto - impostoDeRenda;

console.log(salarioLiquido);
// Criar uma função que retorna a soma dos elementos passados como parametros - o número de elementos é variável

const sum = (...numbers) => numbers.reduce((acc, value) => acc + value);

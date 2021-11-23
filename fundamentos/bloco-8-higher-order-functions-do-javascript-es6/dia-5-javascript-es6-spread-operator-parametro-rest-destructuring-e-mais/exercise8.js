// Função que recebe o nome de alguém e retorna uma mensagem de cumprimento - o cumprimento default é 'Hi', mas pode ser passado como argumento também.

const greet = ( nome, cumprimento = 'Hi' ) => `${cumprimento}, ${nome}`;

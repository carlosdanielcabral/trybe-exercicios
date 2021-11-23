// Função recebe um objeto que representa um navio e retorno o comprimento dele, assim como a unidade de comprimento

const { ships } = require('./data');

const shipLength = ( { length, measurementUnit } ) => `Length: ${length} ${measurementUnit}`;

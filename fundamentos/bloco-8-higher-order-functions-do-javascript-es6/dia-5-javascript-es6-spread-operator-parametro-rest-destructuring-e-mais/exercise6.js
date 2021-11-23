//Converte um array em um objeto

const { palio, shelbyCobra, chiron } = require('./data');

const toObject = ( [ modelo, marca, ano ] ) => ({ modelo, marca, ano });

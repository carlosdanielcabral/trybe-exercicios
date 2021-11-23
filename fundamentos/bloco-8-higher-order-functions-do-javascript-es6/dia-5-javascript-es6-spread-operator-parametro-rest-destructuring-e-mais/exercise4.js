// Criar uma função que recebe uma lista de pessoas e retorna as da Austrália que nasceram no século XX

const { people } = require('./data');

const filterPeople = (peoples) => 
  peoples.filter(({ bornIn, nationality }) => 
    (bornIn >= 1901 && bornIn <= 2001 && nationality === 'Australian')
  );

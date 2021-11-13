const { expect } = require('@jest/globals');
const searchEmployee = require('./bonus.js');

test('1 - Verifica se a função existe', () => {
  expect(searchEmployee).toBeDefined();
});

test('2 - Verifica se a informação recebida está correta', () => {
  expect(searchEmployee('4456-4', 'firstName')).toBe('ID: 4456-4 | firstName: Leila');
  expect(searchEmployee('8579-6', 'lastName')).toBe('ID: 8579-6 | lastName: Gates');
  expect(searchEmployee('1256-4', 'specialities')).toBe('ID: 1256-4 | specialities: Hooks,Context API,Tailwind CSS');
});
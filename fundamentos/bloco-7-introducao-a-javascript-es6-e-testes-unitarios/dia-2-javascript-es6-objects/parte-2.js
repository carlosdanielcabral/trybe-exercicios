const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addNightShift = (object, key, value) => {
  object[key] = value;
};
 
const toListKeys = object => Object.keys(object);

const printObjectLength = object => Object.keys(object).length;

addNightShift(lesson2, 'turno',  'noite');

console.log(printObjectLength(lesson1));
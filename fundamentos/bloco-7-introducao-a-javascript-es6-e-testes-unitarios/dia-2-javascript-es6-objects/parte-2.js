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

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3), 
};

const toListKeys = object => Object.keys(object);

const printObjectLength = object => Object.keys(object).length;

const printKey = (object, position) => Object.keys(object)[position];

const printObjectValues = object => Object.values(object);

const addNightShift = (object, key, value) => {
  object[key] = value;
};

addNightShift(lesson2, 'turno',  'noite');

const totalNumberOfStudents = object => {
  let total = 0;
  for (let key in object) {
    total += object[key].numeroEstudantes; 
  }
  return total;
};

const verifyKeyValue = (object, key, value) => {
  let exists = false;
  for (let k in object) {
    if (k === key) {
      if (object[key] === value) {
        exists = true;
      }
    }
  }

  return exists;
};


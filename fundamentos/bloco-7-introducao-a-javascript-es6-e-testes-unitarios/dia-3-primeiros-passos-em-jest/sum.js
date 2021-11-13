// Retorna a soma dos numeros passados como parametro
const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
};

// Remove o valor passado como parametro do array
const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

// Retorna fizzbuzz e o parametro é divisivel por 5 e 3; fizz se é divisível por 3 e buzz e se é divisível por 5.
const myFizzBuzz = (num) => {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
};

const encoding = { a: 1, e: 2, i: 3, o: 4, u: 5 };

// Codifica a string passada como parametro de acordo com o encoding acima
const encode = (string) => {
  let newString = string;
  for (let chave in encoding) {
    if (newString.includes(chave)) {
      const valor = new RegExp(chave, "g");
      newString = newString.replace(valor, encoding[chave]);
    }
  }

  return newString;
};

// Decodifica a string passada como parametro de acordo com o encoding acima
const decode = (string) => {
  let newString = string;
  for (let chave in encoding) {
    if (newString.includes(encoding[chave])) {
      newString = newString.replace(encoding[chave], chave);
    }
  }

  return newString;
};

// Para construir essa função foi consultado: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const ordenarArray = (array) => {
  const objectList = array.sort((a, b) => {
    if (a.tech < b.tech) return -1;
    if (a.tech > b.tech) return 1;
    return 0;
  });

  return objectList;
};

// Recebe um array de tecnologias e um nome e retorna um array de objetos no formato {tech: tecnologia, name: nome}
const techList = (array, nome) => {
  let objectList;

  if (array.length < 1) {
    objectList = "Vazio!";
  } else {
    objectList = [];

    for (let tecnologia of array) {
      const object = {
        tech: tecnologia,
        name: nome,
      };

      objectList.push(object);
    }

    objectList = ordenarArray(objectList);
  }

  return objectList;
};

// Recebe uma string no formato "numero bebida" e retorna o número copos de água necessários para se hidratar
const hydrate = (string) => {
  const array = string.split(" ");
  let coposDeAgua = 0;
  for (let valor of array) {
    const valorInteiro = parseInt(valor, 10);
    if (!isNaN(valorInteiro)) {
      coposDeAgua += parseInt(valor, 10);
    }
  }

  const retorno =
    coposDeAgua > 1
      ? `${coposDeAgua} copos de água`
      : `${coposDeAgua} copo de água`;
  return retorno;
};

console.log(encode("Sara é bela"));

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};

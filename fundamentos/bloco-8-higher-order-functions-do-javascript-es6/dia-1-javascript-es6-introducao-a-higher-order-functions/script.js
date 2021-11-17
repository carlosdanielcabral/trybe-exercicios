const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const returnPersonData = (fullname) => {
  const email = `${fullname.replace(/ /g, '').toLowerCase()}@trybe.com`;
  return {fullname, email};
};

const winDraw = (number) => {
  const randomNumber = Math.floor(Math.random() * 5);
  return number === randomNumber;
};

const drawing = (number, callback) => {
  const result = callback(number);
  return result ? 'Parabéns, você ganhou!' : 'Tente novamente!';
};

const checkAnswers = (answerKey, studentAnswer) => {
  let total = 0;
  for (let i = 0; i < answerKey.length; i += 1) {
    if (answerKey[i] === studentAnswer[i]) {
      total += 1;
    } else if (answerKey[i] !== studentAnswer[i]) {
      total -= 0.5;
    }
  }

  return total;
};

const returnTestResult = (answerKey, studentAnswer, callback) => {
  return callback(answerKey, studentAnswer);
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

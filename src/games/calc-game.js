import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'What is the result of the expression?';
const calculate = (randomNumber, randomNumber2, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return randomNumber + randomNumber2;
    case '-':
      return randomNumber - randomNumber2;
    case '*':
      return randomNumber * randomNumber2;
    default:
      throw Error;
  }
};

const operators = ['+', '-', '*'];

const generateGameVariables = () => {
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const randomNumber = randomNum(1, 100);
  const randomNumber2 = randomNum(1, 100);
  const mainQuestion = `${randomNumber} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculate(randomNumber, randomNumber2, randomOperator));
  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, generateGameVariables);
};

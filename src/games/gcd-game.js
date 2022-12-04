import engine from '../index.js';
import randomNum from '../helpers.js';

const mainRule = 'Find the greatest common divisor of given numbers.';
const calculateGcd = (randomNumber, randomNumber2) => {
  randomNumber = Math.abs(randomNumber);
  randomNumber2 = Math.abs(randomNumber2);
  if (randomNumber2 > randomNumber) {
    const temp = randomNumber;
    randomNumber = randomNumber2;
    randomNumber = temp;
  }
  const x = true;
  while (x) {
    if (randomNumber2 === 0) return randomNumber;
    randomNumber %= randomNumber2;
    if (randomNumber === 0) return randomNumber2;
    randomNumber2 %= randomNumber;
  }
};
const verify = () => {
  const randomNumber = randomNum();
  const randomNumber2 = randomNum();
  const mainQuestion = `${randomNumber} ${randomNumber2}`;
  const correctAnswer = String(calculateGcd(randomNumber, randomNumber2));
  return [correctAnswer, mainQuestion];
};

export default () => {
  engine(mainRule, verify);
};

const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};

let highGuess = 100;
let lowGuess = 1;

start();
async function start() {
const currentGuess = Math.floor(Math.random() * (highGuess - lowGuess + 1) + lowGuess);
  //cheat detector: if lowGuess >= highGuess; cheater cheater pumpkin eater
if (lowGuess + 1 >= highGuess) {
  console.log('CHEATER, CHEATER, CHEATER!!!!!!');
  process.exit();
}
else {
//ask 'is your number (guess) Y/N?' between two values.
  let answer = await ask('Is your number...' + currentGuess + ' Y/N? ')
  if (answer.toLowerCase() === 'y') {
    console.log('I am a victorious computer!');
    process.exit()
  }
  else if (answer.toLowerCase() === 'n') {
  //modifies range according to user input (H/L)
    let highLow = await ask('Is my number high or low (H/L)? ')
    if (highLow.toLowerCase() === 'h') {
    //if computer's number is high modify highGuess
      highGuess = currentGuess;
      start()
    }
    else if (highLow.toLowerCase() === 'l') {
    //if computer's number is low modify lowGuess
      lowGuess = currentGuess;
      start()
    }
    else {
      console.log('Error. Invalid input.');
      start()};
}
  else {
    console.log('Error. Invalid input.')
    start()};
  }};

//to be implemented:

  //smarter guess algorithm
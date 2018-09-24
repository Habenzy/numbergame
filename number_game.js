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

let highRange = 100;
let lowRange = 1;

humanNum(highRange, lowRange);
async function humanNum() {
const currentGuess = Math.floor((highRange + lowRange)/2);
  //cheat detector: if lowGuess >= highGuess; cheater cheater pumpkin eater
if (lowRange + 1 >= highRange) {
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
      highRange = currentGuess;
      humanNum()
    }
    else if (highLow.toLowerCase() === 'l') {
    //if computer's number is low modify lowGuess
      lowRange = currentGuess;
      humanNum()
    }
    else {
      console.log('Error. Invalid input.');
      humanNum()};
}
  else {
    console.log('Error. Invalid input.')
    humanNum()};
  }};

//to be implemented:

  //make loops instead of restarting the function

//add guess_num in
  //pass highguess/lowguess into start on edit and put initial highguess/loweguess inside function
  //name async functions
  //add in an initialize function for each game with user range setability
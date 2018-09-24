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

init();
async function init(){
  let startUp = await ask('Would you like to play a game where I guess your number(1) or you guess my number(2)? ')
  if (startUp === '1') {
    humanNumInit();
  }
  else if(startUp === '2') {
    compNumInit();
  }
  else {
    console.log('Invalid input.')
    init();
  };
};

function humanNumInit(){
  highRange = 100;
  lowRange = 1;
  humanNum();
};

function compNumInit(){
  computerNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log('I am thinking of a number between 1 and 100.');
  compNum();
};

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
  
  async function compNum(){
    //console.log(computerNum)
    userNum = await ask ('Guess my number (1-100)?' )
    if (userNum > computerNum){
        console.log('Your guess is too high')
    compNum()}
    else if (parseInt(userNum, 10) === computerNum){
        console.log('You are a WINNER!!!')
    process.exit()}
    else if (userNum < computerNum){
        console.log('Your number is too low')
    compNum()}
    else{console.log('Invalid input!!!')
    compNum()}    

    };
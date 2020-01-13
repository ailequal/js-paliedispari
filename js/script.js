// isPalindroma
var i = 0;
var name = '';
var reverse = '';

alert('Welcome to palindroma checker');

do {
  name = prompt('Insert a word and I\'ll tell you if it\'s palindroma (the checker is case sensitive). Stop it by typing \'stop\'');
  console.log(isPalindroma(name));
} while (name !== 'stop');

function isPalindroma(word) {
  for (i = word.length - 1; i >= 0; i--) {
    reverse += word.charAt(i);
  }
  if (word === reverse) {
    i = 0;
    reverse = '';
    return true;
  } else {
    i = 0;
    reverse = '';
    return false;
  }
}


// odd or even
var userPick = '';
var userNumber = 0;
var botNumber = 0;
var total = 0;

alert('Welcome to odd or even');

do {
  userPick = prompt('Pick \'odd\' or \'even\'');
} while (userPick !== 'odd' && userPick !== 'even');
console.log('User picked ' + userPick);

if (userPick === 'even') {
  console.log('Bot picked odd')
} else {
  console.log('Bot picked even')
}

do {
  userNumber = parseInt(prompt('Pick a number between 1 and 5'));
} while (userNumber < 1 || userNumber > 5);
console.log('User picked ' + userNumber);

botNumber = getRandomInt(1, 6);
console.log('Bot picked ' + botNumber);

total = userNumber + botNumber;
if (total % 2 === 0 && userPick === 'even') {
  console.log('User wins!!');
} else if (total % 2 === 0 && userPick === 'odd') {
  console.log('Bot wins...');
} else if (total % 2 !== 0 && userPick === 'even') {
  console.log('Bot wins...');
} else {
  console.log('User wins!!');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //The maximum is exclusive and the minimum is inclusive
}

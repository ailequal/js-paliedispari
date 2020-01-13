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
// var userPick;
// do {
//   userPick = prompt('Pick \'odd\' or \'even\'');
// } while (userPick !== 'odd' && userPick !== 'even');

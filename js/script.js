// isPalindroma
var name = prompt('Insert a word and I\'ll tell you if it\'s palindroma');
var reverse = '';
console.log(isPalindroma(name));

function isPalindroma(word) {
  for (var i = name.length - 1; i >= 0; i--) {
    reverse += name.charAt(i);
  }
  if (word === reverse) {
    return true;
  } else {
    return false;
  }
}

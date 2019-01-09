'use strict';


var words = [];

var word = 'soupnazi'.split('');

var wordBlanksElement = 
document.getElementById('word-blanks');

console.log(wordBlanksElement);

var wordPlaceHolder = [];

for (var i=0; i < word.length; i++) {
    wordPlaceHolder[i] = '_';
}
console.log(word)
//console.log(wordPlaceHolder)

wordBlanksElement.textContent = wordPlaceHolder.join(' ');
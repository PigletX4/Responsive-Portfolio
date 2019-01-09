var words = ['babka', 'sponge', 'regifter', 'manhands', 'mimbo', 'shrinkage', 'shiksappeal', 'festivus', 'giddyup', 'bro', 'manzier', 'shmoopie', 'antidentite', 'moops', 'newman', 'kramer', 'elaine', 'george',];

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' , 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var score = document.getElementById("score");
var prevGuess = document.getElementById("guesses");
var youClicked = document.getElementById("input");
var tries = 10;
var wordSpace = document.getElementById('wordSpace');

var stringLength = 0;
var points = 0;
var currentWord = [];
var hiddenWord = [];
var placeHolder = '';
var answer = 0;

function wordRandomizer(array) {
    let wordNumber = Math.floor(Math.random()*words.length);
    currentWord = words[wordNumber].split('');


    console.log(currentWord + " is the current word");


}


function newWord(array) {

    document.getElementById('guesses').innerHTML = "";
    document.getElementById('wordSpace').innerHTML = "";


    for (i = 0; i < currentWord.length; i++){
        
        hiddenWord[i] = "_";

    }

    var placeHolder = hiddenWord.join(' ');
    document.getElementById('wordSpace').innerText = placeHolder;

}



document.onkeydown = function(x) {
    playerGuess(x.key);    
    console.log (x);
    document.getElementById('whatYouClicked').innerText = x.key;
    document.getElementById('guesses').innerHTML = document.getElementById('guesses').innerText + " " + x.key;
    
}


function playerGuess(guess){

    tries--;
    document.getElementById('tries').innerText = tries;
    
    currentWord.forEach(function(char, idx){
        
        if (char === guess) {
            hiddenWord[idx] = guess;
            placeHolder = hiddenWord.join(' ');
            document.getElementById('wordSpace').innerHTML = placeHolder;
            console.log(hiddenWord);
        }
    })

    if (currentWord.join('') === hiddenWord.join('')){
        hiddenWord = [];
        win();
        document.getElementById('score').innerHTML = points;
    }

    if(tries < 1){

        lose();
    }

}



function win(){
    points++;
    tries = 10;
    var placeHolder = [];
    var currentWord = [];
    document.getElementById('tries').innerHTML = tries;
    document.getElementById('wordSpace').innerHTML = '';
    document.getElementById('whatYouClicked').innerHTML = '';
    wordRandomizer(words);
    newWord(currentWord);
}


function lose(){
    document.getElementById("wordSpace").innerHTML = 'You Lose! Click to start again!';
    
}

document.onclick = function startGame(){
    placeHolder = [];
    tries = 10;
    currentWord = [];
    document.getElementById('tries').innerHTML = tries;
    document.getElementById('wordSpace').innerHTML = '';
    document.getElementById('whatYouClicked').innerHTML = '';
    wordRandomizer(words);
    newWord(currentWord);
}


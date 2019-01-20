const questionList = [
    
    {
        question: "Who is the main character of the original Metal Gear Solid?",

        answers: {

            a: "Liquid Snake",
        
            b: "Solid Snake",

            c: "Venom Snake",

            d: "Solidus Snake"

        },

    correctAnswer: "b"
    },

    {
        question: "In Metal Gear Solid 2 which word does Raiden believe to hear when the Colonol says \"Node\"?",

        answers: {

            a: "Knob",
        
            b: "Nerd",

            c: "Toad",

            d: "Mode"

        },

    correctAnswer: "b"
    },

    {
        question: "Solid Snake, Liquid Snake and Solidus Snake are all clones of ____ ?",

        answers: {

            a: "The Boss",
        
            b: "The Sorrow",

            c: "Venom Snake",

            d: "Big Boss"

        },

    correctAnswer: "d"
    },

    {
        question: "Which of the following is the fighting style devoloped by Naked Snake and The Boss?",

        answers: {

            a: "CQC",
        
            b: "JKD",

            c: "XOF",

            d: "Kenjutsu"

        },

    correctAnswer: "a"
    },

    {
        question: "What is the name of the infamous IBS suffering soldier?" ,

        answers: {

            a: "Akira Toshiyo",
        
            b: "Johnny Sasaki",

            c: "Ricky Montoya",

            d: "Emmett Graves"

        },

    correctAnswer: "b"
    },

    {
        question: "Venom Snake is the ____ of Big Boss.",

        answers: {

            a: "Brother",
        
            b: "Grandfather",

            c: "Clone",

            d: "Doppelganger"

        },

    correctAnswer: "d"
    },

    {
        question: "The catchphrase of Revolver Ocelot is what?",

        answers: {

            a: "Smell ya later!",
        
            b: "You're pretty good.",

            c: "I'm the best there is at what I do.",

            d: "Lets duel!"

        },

    correctAnswer: "b"
    },

    {
        question: "What is the codename of the partner of Solid Snake?",

        answers: {

            a: "Ocelot",
        
            b: "Robotron",

            c: "Otacon",

            d: "Drebin"

        },

    correctAnswer: "c"
    },

    {
        question: "What is the weapon weilded by all itterations of the Cyborg Ninja?",

        answers: {

            a: "High Frequency Blade",
        
            b: "Stun Staff",

            c: "M1911",

            d: "Particle Beam Sword"

        },

    correctAnswer: "a"
    },

    {
        question: "What is the name of the retrovirus used to kill targets by identifying their DNA and nanomachines?",

        answers: {

            a: "WOLFEND",
        
            b: "HOUNDKILL",

            c: "FOXDIE",

            d: "NANOSTOP"

        },

    correctAnswer: "c"
    }

]

const container = $('#container');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

var correct = 0;

var incorrect = 0;

var unanswered = 0;

function timerStart(){
    
    var number = 50;

    var intervalID = setInterval(decrement, 1000);

    function decrement(){

        number--;

        $("#timer").html("<h3 id=\'h3\'>" + number + "</h3>");

        if (number === 0){

            checkResults();
            stop();
        }

        

    }

    function stop() {

        clearInterval(intervalID);
      
    }


}

function makeQuiz(){

    $('#startGame').attr("style", "display:none")
    timerStart();
    var gameReady = [];

    questionList.forEach(
        
        (thisQuestion, arrVal) => {
            
            const answers = [];

            for(letter in thisQuestion.answers){
                answers.push(
                    `<label>
                    
                    <input type="radio" name="question${arrVal}" value="${letter}">
                    
                    ${letter} :
                    
                    ${thisQuestion.answers[letter]}
                  
                    </label>`
                );
            }
            
            gameReady.push(
                `<div class="question"> ${thisQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    $('#container').append(gameReady.join(''));

    $('#container').append($('<button id="submitAnswers" onclick="checkResults()" style="display:block">Submit!</button>'));

}




function checkResults(){
    
    questionList.forEach( (thisQuestion, arrVal) => {
        const selector = `input[name=question${arrVal}]:checked`;
        const userAnswer = (document.querySelector(selector) || {}).value;
        if(userAnswer===thisQuestion.correctAnswer){
          correct++;
        }

        else{
            incorrect++;
        }

    });

    resultPage();

}

function resultPage(){

    $('#container').text('');

    $('#timer').attr('style', 'display:none');

    var gE = $('<div id= \'gameEnd\'>' + 'Game End!' + '</div>');
    var cA = $('<div id= \'correctAnswer\'>' + 'Correct Answers:' + correct + '</div>');
    var iA = $('<div id= \'incorrectAnswer\'>' + 'Incorrect Answers:' + incorrect + '</div>');
    $('#container').append(gE, cA, iA);
}






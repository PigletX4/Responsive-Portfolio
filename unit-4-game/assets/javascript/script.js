
var wins = 0;
var losses = 0;
var target = 0;


$(document).ready(reset());



function setGoal(){
    target = randomint(19,120);
    document.getElementById("goalNum").innerText = target;
}

function crystalShuffle(){
 
    var arr = [];
  
    for( i = 0; i <= 3; i++){
   
        arr[i] = Math.ceil(Math.random()*12);
    }
  
    crystals = arr;
    return arr 

}

function randomint(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}



function crystalPoints(valU) {

    $("#scorenum").text(Number($("#scorenum").text()) + crystals[valU]);
    currentScore = currentScore + crystals[valU];
    checkResults(currentScore, target);

}

function reset(){
    setGoal();
    crystals = crystalShuffle();
    currentScore = 0;
    $("#scorenum").text(currentScore);
}

function checkResults(currentScore, target) {
    
    if(currentScore === target){
        wins++;
        $("#winsnum").text(wins);
        crystalShuffle(crystals);
        target = randomint(19,120);
        reset();
        $("#prevResult").text("You won!");
    }

    else if(currentScore >= target){
        losses++;     
        $("#lossnum").text(losses);
        crystalShuffle(crystals);
        target = randomint(19,120);
        reset();
        $("#prevResult").text("You lost!");
    }

}

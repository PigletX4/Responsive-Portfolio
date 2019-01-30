var topics = ["Hunter x Hunter", "Tom Waits", "Dragonball Z", "Hideo Kojima", "Metal Gear Solid", "Seinfield", "Yojimbo", "Spaghetti Western", "Dark Souls", "Super Smash Brothers: Melee"];
var newBtnAmount = 0;

window.onload = function(){

    for(i=0; i<topics.length; i++){
    var searchTopic = topics[i].trim();
    var searchReadyTopic = searchTopic.replace(/\s/g, "+"); 
    console.log(searchReadyTopic);
    var newButton = $("<button " + "type=\"button\"" + " class= \"btn\" " + "data-topic=" + searchReadyTopic +  ">");
    newButton.text(searchTopic);
    $(".buttons").append(newButton);
    };


};

$(document).ready(function(){

    $("#gifs").on("click", "img", function stateToggler(){
        var state = $(this).attr("data-state");
        if(state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }

        else if(state === "animate"){
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

        return


    });
});

$(document).ready(function(){

$(".buttons").on("click", ".btn", function(event){
    event.preventDefault();
    console.log("Clicked");
    $("#gifs").empty();
    var topic = $(this).attr('data-topic');
    console.log(topic);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=ZiQALtxvl54XzJYbuEu6YrLJj41L1wWz&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
         results = response.data;

        for (var i = 0; i < results.length; i++) {
            
           let newDiv = $("<div style=\"width: fit-content;\">");

           let rating = results[i].rating;

           let p = $("<p>").text("Rating:" + rating);

           let newGif = $("<img>");
           
           newGif.attr("src", results[i].images.original_still.url);
           newGif.attr("data-animate", results[i].images.original.url);
           newGif.attr("data-still", results[i].images.original_still.url);
           newGif.attr("data-state", "animate");

           newDiv.prepend(p);
           newDiv.prepend(newGif);

           $("#gifs").prepend(newDiv);


        }

    });
});



});


    
function buttonCreate() {
    
    var searchTopic = $("#searchBar").val().trim();
    var searchReadyTopic = searchTopic.replace(/\s/g, "+"); 
    console.log(searchReadyTopic);
    var newButton = $("<button " + "type=\"button\"" + " class= \"btn\" " + "data-topic=" + searchReadyTopic +  ">");
    newButton.text(searchTopic);
    $(".buttons").append(newButton);
               
};



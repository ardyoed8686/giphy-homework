$(document).ready(function(){

    // array of movies

    var topics = ["Avengers: Infinity War",
    "The Dark Knight",
    "The Dark Night Rises",
    "Guardians of the Galaxy",
    "Dead Pool",
    "Dead Pool 2",
    "X-Men: Apocalypse",
    "Iron Man",
    "The Avengers",
    "Thor"];

    //  generate buttons for items in movies array
    function renderButtons() {

//     Your app should take the topics in this array and create buttons in your HTML.
//    * Try using a loop that appends a button for each string in the array.

    $("#movie-buttons-view").text("");

    for (let i = 0; i < topics.length; i++) {
        // create a button
        var movieButton = $("<button>");

        movieButton.addClass("topics");

        movieButton.attr("data-search", topics[i]);

        movieButton.text(topics[i]);

        $("#movie-buttons-view").append(movieButton);
        console.log(topics[i]);
        }


    }



});
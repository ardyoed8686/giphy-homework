$(document).ready(function() {

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

    function displayMovieGif() {

        var inputText = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "The+Dark+Knight" + "&apikey=UIrioujrYNuoTPwZbtRtWOGp4prBx4Rs";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // YOUR CODE GOES HERE!!!
            console.log(response);
            // Add a movie div to the #movie-view div
            // var inputTextDiv = $('<div class="movie-display">');

            // Add a poster to our movie div
            // var image = $("<img>").attr("src", response.Poster);
            // inputTextDiv.append(image);

            // Add release date
            // var releaseDate = $("<p>").text(response.Released);
            // inputTextDiv.append(releaseDate);

            // Add rating
            // var rating = $("<p>").text(JSON.stringify(response.Ratings));
            // inputTextDiv.append(rating);

            // Add plot
            // var plot = $("<p>").text(response.Plot);
            // inputTextDiv.append(plot);

            // Add the movie to the top of the movies view
            // $("#movies-view").prepend(inputTextDiv);



        });

    }



      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#movie-buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Dynamicaly generate buttons for each movie in the array.
          
          var a = $("<button>");
          // Adding a class
          a.addClass("movie");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#movie-buttons-view").append(a);
        }
      }

      //adding new buttons
    $("#add-movie-btn").on("click", function(event) { 
    event.preventDefault();

        //grab html from what is typed into box
        var inputText = $("#movie-input").val().trim();
        topics.push(inputText);
        renderButtons();
        console.log(topics);
    });


});
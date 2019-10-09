$(document).ready(function() {

    // array of movies

    var topics = ["Avengers: Infinity War",
    "The Dark Knight",
    "The Dark Knight Rises",
    "Guardians of the Galaxy",
    "Deadpool",
    "Deadpool 2",
    "X-Men: Apocalypse",
    "Iron Man",
    "The Avengers",
    "Thor"];


     // Function for displaying movie data
     function renderButtons() {

      // Deleting the movie buttons prior to adding new movie buttons
      // (this is necessary otherwise we will have repeat buttons)
      $(".movie-buttons-view").empty();

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
        $(".movie-buttons-view").append(a);
        // console.log(topics[i]);
      }
    }
    renderButtons();

  
$(document).on("click", ".movie", function() {
  var inputText = $(this).attr("data-name");
        console.log("You entered: ", inputText);

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UIrioujrYNuoTPwZbtRtWOGp4prBx4Rs&q=" + inputText + "&limit=10&offset=0&rating=G&lang=en";
        console.log(queryURL);

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // YOUR CODE GOES HERE!!!
            console.log("we're looking at response from ajax", response.data);
            var data = response.data;

            for (let i = 0; i < response.data.length; i++) {
              var movieGiphy = $('<div class="giphyDiv">');

              var rating = $("<p>").text("Rating: " + data[i].rating);
              movieGiphy.append(rating);

              var image = $("<img>").attr("src", data[i].images.fixed_height_still.url);
              image.attr("data-animate", data[i].images.fixed_height.url);
              movieGiphy.append(image);

            $("#giphyDiv").prepend(movieGiphy);  
            }

        });
  console.log("we're inside on.click", this);
});


      //adding new buttons
    $("#add-movie").on("click", function(event) { 
    event.preventDefault();

        //grab html from what is typed into box
        var inputText = $("#movie-input").val().trim();
        topics.push(inputText);
        renderButtons();
        console.log(topics);
    });

    $(".images").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }  else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});
// create code for animate function
    // Calling the renderButtons function to display the initial list of movies
    
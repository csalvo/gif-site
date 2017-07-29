$( document ).ready(function() {
var gifCategories = ["cheeseburger", "donuts", "pizza", "potato", "dino nuggets", "tacos", "spaghetti", "ice cream", "pancakes", "bacon", "cheese", "hot dogs"];
var apiKey = "9a7fa4fcadec44039b9827a6100853a9"
var userSearch = $("#newSearch").val();

for (var i = 0; i < gifCategories.length; i++) {
	$("#buttons").append("<button class='btn btn-secondary' id='gifFilter' value='" + gifCategories[i] + "'>" + gifCategories[i] + "</button>");
};

$("#gifFilter").click()

$.ajax({
  		  url: "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + userSearch,
  		  method: "GET"
        }).done(function(response) {
          
        	// Print out Gifs!
        	appendGifs(response);
 

        });
    	

    function appendGifs(response) {
    	var gifs = response.data; // array of gifs
        for(var i=0; i < gifs.length; i++) {
          var img = gifs[i].images.preview_gif.url;
          // List them on the page
        	 $("#gif-list").append("<li><img src='" + img + "'></img></li>");
         }
    }

//connect each button to an api search call 
//make the search box term make a search api call
	//also add it to the list of buttons
//create a gif display function that displays the api call results in line
}
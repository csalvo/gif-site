
var gifCategories = ["cheeseburger", "donuts", "pizza", "potato", "dino nuggets", "tacos", "spaghetti", "ice cream", "pancakes", "bacon", "cheese", "hot dogs"];
var apiKey = "9a7fa4fcadec44039b9827a6100853a9"
var rating = "g"
var searchTerm;

for (var i = 0; i < gifCategories.length; i++) {
	$("#buttons").append("<button class='btn btn-secondary' id='gifFilter' value='" + gifCategories[i] + "'>" + gifCategories[i] + "</button>");
};

$(".btn-secondary").on("click",function(){
		$("#gifs").html("");

	searchTerm = this.value;
	  	$.ajax({
  		  url: "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm + "&rating=" + rating,
  		  method: "GET"
        }).done(function(response) {
          
        	appendStillGifs(response);
 

        });
    });
function appendStillGifs(response){
var gifs = response.data; // array of gifs
        for(var i=0; i < gifs.length; i++) {
          var img = gifs[i].images.fixed_height_still.url;
          // List them on the page
        	$("#gifs").append("<div id='gif'><img src='" + img + "'></img></div");
         }
	};


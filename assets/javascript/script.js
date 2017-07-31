
var gifCategories = ["cheeseburger", "donuts", "pizza", "potato", "dino nuggets", "tacos", "spaghetti", "ice cream", "pancakes", "bacon", "cheese", "hot dogs"];
var apiKey = "9a7fa4fcadec44039b9827a6100853a9"
var rating = "pg"
var searchTerm;
var newSearchTerm;

for (var i = 0; i < gifCategories.length; i++) {
	$("#buttons").append("<button class='btn btn-secondary' id='gifFilter' value='" + gifCategories[i] + "'>" + gifCategories[i] + "</button>");
};

$(".btn-secondary").on("click",function(){
    $("#gifs").html("");
	   searchTerm = this.value;
     getData();
    });

$(".btn").on("click",function(){
  $("#gifs").html("");
  appendSearchTerm();
  searchTerm = newSearchTerm;
  getData();
  $("#newSearchBox").val("");
});

function appendStillGifs(response){
        var gifs = response.data; // array of gifs
        for(var i=0; i < gifs.length; i++) {
          var img = gifs[i].images.fixed_width_still.url;
          var rating = gifs[i].rating.toUpperCase();
          // List them on the page
        	$("#gifs").append("<div class='col-lg-2' id='gif'> <img src='" + img + "'> </img> <p> Rating: " + rating + "</p> </div> " );
         }
	};

function appendSearchTerm() {
  newSearchTerm = $("#newSearchBox").val();
    $("#buttons").append("<button class='btn btn-secondary' id='gifFilter' value='" + newSearchTerm + "'>" + newSearchTerm + "</button>");
}

function getData() {
        $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm + "&rating=" + rating,
        method: "GET"
        }).done(function(response) {
          
          appendStillGifs(response);

        });
}




//Kode her
$.getJSON("https://api.nytimes.com/svc/topstories/v2/home.json", {'api-key': "f3c4bbf22afb432c8d446b1f13bbc89b"},
		function (data){
	var results = data.results; 
  console.log(results);
  for (var i = 0; i < results.length; i++) {
    var article = results[i];
    var url = article.url;
    var abstract = article.abstract;
    var title = article.title;
    var byline = article.byline;
    //Loop og kode der laver artikel-posts.

    if (article.multimedia != ""){
      var multimedia="";
      if(article.multimedia[3].width == 210){
        multimedia = article.multimedia[3].url;
      }
       var billede = $(
                        '<section>' +
                        '<article>' +
                        '<h2>' + title + '</h2>' +
                        '<p class="byline">' + byline + '</p>' +
                        '<p>' + abstract + '</p>' +
                        '<img src=' + multimedia + '>' +
                        '<a href=' + url +'> View full article</a>' + 
         //For at få vores kommentar ind bruger vi javascript til at lave vores felt og knap.
         //På den måde får vi under hver vores artikel et kommentarfelt ind. 
                        '<input class="comment" placeholder="Lav en kommentar her..">' +
                        '<button class = "commentKnap" >Tryk!</button>' +
         
                        '<div class ="commentDiv">' + '</div>'+
                        '</article>' +
                        '</section>');
         $('#articles').append(billede);
         } else {
          var video = $(
                        '<section>' +
                        '<article>' +
                        '<h2>' + title + '</h2>' +
                        '<p class="byline">' + byline + '</p>' +
                        '<p>' + abstract + '</p>' +
                        '<a href=' + url + '> View full article</a>' +
                        '<input class="comment" placeholder="Lav en kommentar her..">' +
                        '<button class = "commentKnap" >Tryk!</button>' +
                        '<div class="commentDiv">' + '</div>'+
                        '</article>' +
                        '</section>');
        
         $('#articles').append(video);
         }//If sætningen her er til artikler der ikke har billeder, men video i stedet for. 
    //Vi bruger innerHTML og jQuery til at skabe elementerne.
    //Øverste er med billede, nederste er uden
   }
	});



//ready betyder at den først løber koden når dokumentet er klar.
//Denne funktion gør at hver gang vi skriver en kommentar bliver den postet under den pågældende artikel. 
$(document).ready(function() {
  
  $('.commentKnap').on('click', function (e) {
          var comment = ($(this).prev('input').val());
          var div = ($(this).next("div").append(comment));        
          ($(this).prev('input').val(''));

        } );
                             
     //                        
 $('#searchButton').on('click', function(e){
  console.log("hej");
 var searchTerm = $('#search').val();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "465f4748c1ec4bb4bac452c5af7411b4",
  'q': searchTerm
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
	//var results = data.result; 
  $('#articles').html("");
  var results = data.response.docs;
      console.log(results);

  for (var i = 0; i < results.length; i++) {
    var article = results[i];
    var url = article.web_url;
    var snippet = article.snippet;
    var main = article.headline.main;
    var byline = article.byline.original;
    var multimedia = article.multimedia[2].legacy;
    //Loop og kode der laver artikel-posts.
    console.log(byline);
    if (article.multimedia.url != ""){
      var multimedia="";
      //if(article.multimedia[3].width == 210){
        //multimedia = article.multimedia[3].url;
      //}
       var billede = $(
                        '<section>' +
                        '<article>' +
                        '<h2>' + main + '</h2>' +
                        '<p class="byline">' + byline + '</p>' +
                        '<p>' + snippet + '</p>' +
                        '<img src=' + multimedia + '>' +
                        '<a href=' + url +'> View full article</a>' + 
         //For at få vores kommentar ind bruger vi javascript til at lave vores felt og knap.
         //På den måde får vi under hver vores artikel et kommentarfelt ind. 
                        '<input class="comment" placeholder="Lav en kommentar her..">' +
                        '<button class = "commentKnap" >Tryk!</button>' +
         
                        '<div class ="commentDiv">' + '</div>'+
                        '</article>' +
                        '</section>');
         $('#articles').append(billede);
         } else {
          var video = $(
                        '<section>' +
                        '<article>' +
                        '<h2>' + main + '</h2>' +
                        '<p class="byline">' + byline + '</p>' +
                        '<p>' + snippet + '</p>' +
                        '<a href=' + url + '> View full article</a>' +
                        '<input class="comment" placeholder="Lav en kommentar her..">' +
                        '<button class = "commentKnap" >Tryk!</button>' +
                        '<div class="commentDiv">' + '</div>'+
                        '</article>' +
                        '</section>');
        
         $('#articles').append(video);
        }
    
    
	};
}).fail(function(err) {
  throw err;
});
});                            
                             
                          
   });






//tager overskriften væk når siden er indlæst
//$("h1").slideUp(200);


//value tager værdien inden i boksen.
/*var search = $('search');
search.addEventListener('submit', function(event) {
  event.preventDefault;
var title = $("title").value;	
var byline = $("byline").value;
var abstract = $("abstract").value;
  
  //if (search.value == )
  
  
}, false);

*/
/*To do:
Lav søgefunktion

Lav kommentarer

Kommentarer på hvert artikel-element (but how???)
*/








//ordentlig styling! 






//Kode til dropdown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = $("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

/*function Blog(titel){
	this.titel = titel ;
	
	this.posts = [];
	
	this.addPost = function(postAdd){
	this.posts.push(postAdd);
};
};

function Post(titel, billede, tekst){
	this.titel = titel;
	this.billede = billede;
	this.tekst = tekst;
	this.dato = new Date();
}*/



var formular = $("#formular") ; 

formular.on('submit', function(e){
	e.preventDefault();
	console.log("Hej");
		var title = document.getElementById("overskrift").value;
		var tekst = document.getElementById("tekst").value;
		var setIn = $('<h3>' + title + '</h3>'
				+ '<h2>' + tekst + '</h2>');
$('#commentDiv').prepend(setIn);		
		
});


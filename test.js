
function Post (title, byline, articleH, date, summary, link, picture, rating){
    this.title = title;
    this.byline = byline;
    this.articleH = articleH;
    this.date = date;
    this.summary = summary;
    this.link   = link;
    this.picture = picture;
    this.rating = 0;
    
    
    
    
    
    
    
    function Blog (name){
    	  this.name = name;
    	  this.array = [];
    	  this.addBlog = function (post) {
    	    this.array.push(post);
    	  }
    	}

    	var lokationer = new Blog();

    	var postSamlet = [];
    	console.log(postSamlet);

    	console.log(postSamlet.title);

    	var form = document.getElementById("form");
    	form.addEventListener('submit', function (e){
    	  e.preventDefault();
    	  
    	  var nameVal = document.getElementById("name").value;
    	  var textVal = document.getElementById("text").value;
    	  
    	  var collect1 = $('<span class="comment">'+ '<h4>' + nameVal + '</h4>'
    	              +  '<p class="commentText">'+ textVal + '</p>'
    	              +   '</span>');
    	  $("#commentField").prepend(collect1);
    	})
    	
    	
    	 $.getJSON("https://api.nytimes.com/svc/movies/v2/reviews/search.json", {'api-key':"3cab252d9bf94339976a208a1e9ce1ea"}, function(data) {
  var results = data.results; // data.results samler alt data fra vores API

  
  for (var i = 0; i < results.length; i++){
    
    var article = results[i];
    var title = article.display_title;
    var byline = article.byline;
    var articleH = article.headline;
    var date = article.publication_date;
    var summary = article.summary_short;
    var link = article.link.url;
    var picture = article.multimedia.src;
    
    
    var addAPIS = new Post(title, byline, articleH, date, summary, link, picture);
    
    
    
     var collect = $('<div class="stars">' + '<div class="col-lg-8"'
    + '<h2 class="title">' + title + '</h2>'
    + '<p class="byline">' + '<em>' + byline + '</em>' + '</p>'
    + '<h3 class="articleH">' + articleH + '</h3>'
    + '<p class="date">' + date + '</p>'
    + '<p class="summary">' + summary + '</p>' + '</div>'                
    + '<div class="container" class="col-lg-4">' 
    + '<img class="image" src='+ picture + '>'                  
    + '<span>  <a class="link" href=' + link + '> Watch trailer</a></span>'
    + '</div>');
     $('#articles').append(collect); 
    
    postSamlet.push(addAPIS); 
    
    // Voting Menu Top 3
    var topVoting = $('<div class="topVoting">'
    + '<img class="topImage" src=' + picture + '>'
    + '<h2 class="topTitle">' + title + '</h2>'
    + '</div>' 
   
    )
    
if (i < 3){

    $('.votingMenu').append(topVoting)
   
console.log(topVoting)};
}

    });


var showImage  = function(idClick){
	var target = document.getElementById("img"+idClick);
	var mainComponent = document.getElementById("imgPrincipal");
	mainComponent.src = target.src;
}

window.onload = function(e){

	for(var key in relatedMovies[idMovie]){
    	related.innerHTML += '<a href="./movie.html?'+relatedMovies[idMovie][key]+'"><img src="'+movies[relatedMovies[idMovie][key]-1][5]+'"></a>';
    }
}

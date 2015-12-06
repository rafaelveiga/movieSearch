(function() {
	var button = document.getElementById('search'),
		input = document.getElementById('search_input'),
		returnSearch = document.getElementById('returnSearch');

	var searchBox = document.getElementById("search-box"),
		searchResult = document.getElementById("search-result");

	var moviePoster = document.getElementById("moviePoster"),
		movieTitle = document.getElementById("movieTitle"),
		movieYear = document.getElementById("movieYear"),
		movieImdb = document.getElementById("movieImdb");

	button.addEventListener('click', function() {
		//Gets API stuff
		var searchTerm = input.value;
		searchTerm = searchTerm.replace(" ", "+");

		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://www.omdbapi.com/?s=" + searchTerm, true);
		xhr.send(null);

		xhr.onreadystatechange = function() {

		    if (xhr.readyState == 4) {
		        response = xhr.responseText;
		        response = JSON.parse(response);
		        response = response.Search;

		        moviePosterResponse = response[0].Poster;
		        movieTitleResponse = response[0].Title;
		        movieYearResponse = response[0].Year;
		        movieImdbIDResponse = response[0].imdbID;

		        moviePoster.src = moviePosterResponse;
		        movieTitle.innerHTML = movieTitleResponse;
		        movieYear.innerHTML = "Year: " + movieYearResponse;
		        movieImdb.href = "http://www.imdb.com/title/" + movieImdbIDResponse;

		        document.body.style.backgroundImage = "url('" + moviePosterResponse + "')";
		    }
		}

		//Changes Screen
		searchBox.style.display = "none";
		searchResult.style.display = "flex";
	});	

	returnSearch.addEventListener('click', function() {
		searchBox.style.display = "flex";
		searchResult.style.display = "none";
		document.body.style.backgroundImage = "url('img/bg.jpg')";
	});
})();

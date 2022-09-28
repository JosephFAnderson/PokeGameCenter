var getPokemon = function(pokeName) {    
  var poke = "Pikachu".toLowerCase();
  fetch("https://pokeapi.co/api/v2/pokemon/" + poke)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var pokeID = data.id;
    var name = data.name;
    var pokeHeight = data.height;
    var nameHeader = document.querySelector("#pokename");
    var heightText = document.querySelector("#height")
    nameHeader.textContent = name + " #" + pokeID;
    heightText.textContent = pokeHeight
    var idSearch = "https://pokeapi.co/api/v2/pokemon-species/" + pokeID
    fetch(idSearch)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var pokeEntry = data.flavor_text_entries[0].flavor_text;
    console.log(pokeEntry)
    var dexEntry = document.querySelector("#pokeentry")
    dexEntry.textContent = pokeEntry
  });
  });
}

// Take in the users pokemon name and fetch the TCG cards for that pokemon
function getTCG(pokeName) {
    // Create variable to add header to fetch call
    var options = {
	method: 'GET',
	headers: {
		'X-API-Key': '2d0d487d-d62c-4cbd-a2a0-fe8c74e6ce13'
    }};

    // Fetch pokemone cards from Pokemotcg API
    fetch('https://api.pokemontcg.io/v2/cards?q=name:' + pokeName, options)
	    .then(function (response) {
            return response.json()
        } )
	    .then(function (data) {
            // Create Array containing the img objects
            var pokeImg = data.data
            var carouselList = document.querySelector('.carousel-indicators');
            var innerCarousel = document.querySelector('.carousel-inner');           

            // Iterate through the array. Creating carousel elements and adding iamges to them
            for(var i = 0; i < pokeImg.length; i++) {               
                var carouselLi = document.createElement('li');
                carouselLi.setAttribute('data-type', '#carouselExampleIndicators');
                carouselLi.setAttribute('data-slide-to', i);
                carouselList.appendChild(carouselLi);

                var singleCarDiv = document.createElement('div');
                singleCarDiv.classList.add('carousel-item');
                
                // Set first carousel image as active
                if(i === 0) {
                    singleCarDiv.classList.add('active');
                }

                var img = document.createElement('img');
                img.setAttribute('src', pokeImg[i].images.small);
                img.classList.add('d-block');
                img.classList.add('w-100');

                singleCarDiv.appendChild(img);
                innerCarousel.appendChild(singleCarDiv);                
            }
        })
}



var searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchPoke);

function searchPoke(event){
    event.preventDefault();
    var initialSearch = document.getElementById("searcher");
    var pokeName = initialSearch.value;
    initialSearch.value = "";
    getPokemon(pokeName);
}


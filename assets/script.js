var getPokemon = function(pokeName) {
  var poke = pokeName.toLowerCase()
  fetch("https://pokeapi.co/api/v2/pokemon/" + poke + "/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    var pokeID = data.id;
    var name = data.name;
    var pokeHeight = (data.height*.328084);
    var pokeHeight1 = Math.round(pokeHeight * 10)/10
    var pokeWeight =data.weight*.220462;
    var pokeWeight1 = Math.round(pokeWeight * 10)/10;
    var nameHeader = document.querySelector("#pokename");
    var heightText = document.querySelector("#height");
    var weightText = document.querySelector("#weight");
    var typesText = document.querySelector("#types")
    var poketype = data.types
    var pokeImage = data.sprites.front_default
    console.log(typesText.textContent)
    nameHeader.textContent = name + " #" + pokeID;
    heightText.textContent = pokeHeight1 + " feet";
    weightText.textContent = pokeWeight1 + " lbs";
    if(typesText.textContent != ""){
      typesText.textContent = ""
    }
    for(var i = 0; i < poketype.length; i++){
      var typeLi = document.createElement("li")
      typeLi.textContent = data.types[i].type.name
      typesText.appendChild(typeLi)
    };
    document.getElementById("pokeImg").src = pokeImage;
    var idSearch = "https://pokeapi.co/api/v2/pokemon-species/" + pokeID + "/"
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
            carouselList.replaceChildren();
            var innerCarousel = document.querySelector('.carousel-inner');    
            innerCarousel.replaceChildren();       

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


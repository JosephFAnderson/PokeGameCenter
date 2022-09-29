var versions; 
var moveKit;
var pokeType;

var getPokemon = function(pokeName) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName + "/")
    .then(function (response) {
      return response.json();
  })
    .then(function (data) {
      versions = data.game_indices;
      moveKit = data.moves;
      var pokeID = data.id;
      var pokeHeight = (data.height*.328084);
      var pokeHeightRounded = Math.round(pokeHeight * 10)/10
      var pokeWeight =data.weight*.220462;
      var pokeWeightRounded = Math.round(pokeWeight * 10)/10;
      var nameHeader = document.querySelector("#pokename");
      var heightText = document.querySelector("#height");
      var weightText = document.querySelector("#weight");
      var typesText = document.querySelector("#types")
      pokeType = data.types
      var pokeImage = data.sprites.front_default
      nameHeader.textContent = pokeName + " #" + pokeID;
      heightText.textContent = "Height: " + pokeHeightRounded + " feet";
      weightText.textContent = "Weight: " + pokeWeightRounded + " lbs";
      if(typesText.textContent != ""){
        typesText.textContent = ""
    }
      for(var i = 0; i < pokeType.length; i++){
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
         
          var dexEntry = document.querySelector("#pokeentry")
          for(var i = 0; i < data.flavor_text_entries.length; i++){
            if(data.flavor_text_entries[i].language.name === "en"){
              var pokeEntry = data.flavor_text_entries[i].flavor_text;
              dexEntry.textContent = pokeEntry};
  }});
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
        console.log(data);
            // Create Array containing the img objects
            var pokeImg = data.data
            var carouselList = document.querySelector('.carousel-indicators');
            carouselList.replaceChildren();
            var innerCarousel = document.querySelector('.carousel-inner');    
            innerCarousel.replaceChildren();                
            var modalBod = document.querySelector('.modal-body');
            modalBod.replaceChildren();
           
            // Iterate through the array. Creating carousel elements and adding images to them
            for(var i = 0; i < pokeImg.length; i++) {     
                var addImg = false;          
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

                var modalImg = document.createElement('img');
                var img = document.createElement('img');
                
                var imgUrl = pokeImg[i].images.small;
               
                //Check if img url returns 404 error              
                function urlExists(url) {
                  var http = new XMLHttpRequest();
                  http.open('HEAD', url, false);
                  http.send();
                  if (http.status != 404) {
                    addImg = true;
                  } 
                }                   

                urlExists(imgUrl);

                // If no error message detected then add image to html
                if (addImg){
                  modalImg.setAttribute('src', pokeImg[i].images.small);
                  modalImg.classList.add('p-1');
                  modalImg.classList.add('modImg');
                  
                  
                  img.setAttribute('src', pokeImg[i].images.small);                
                  img.classList.add('d-block');
                  img.classList.add('w-100');

                  modalBod.appendChild(modalImg);
                  singleCarDiv.appendChild(img);               
                  innerCarousel.appendChild(singleCarDiv);                
                }                                 
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
    getTCG(pokeName);
}


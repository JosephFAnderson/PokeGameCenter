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
    nameHeader.textContent = name + " #" + pokeID;
    heightText.textContent = pokeHeight1 + " feet";
    weightText.textContent = pokeWeight1 + " lbs";
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


var searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchPoke);

function searchPoke(event){
    event.preventDefault();
    var initialSearch = document.getElementById("searcher");
    var pokeName = initialSearch.value;
    initialSearch.value = "";
    getPokemon(pokeName);
}


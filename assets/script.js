var getPokemon = function(pokeName) {
  var poke = "Pikachu".toLowerCase();
  fetch("https://pokeapi.co/api/v2/pokemon/" + poke + "/")
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
var pokemonVGC = function(gameInfo) {
    var game = "Console Games"();
    fetch("https://pokeapi.co/api/v2/version-group/" + name + "/")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
      var gameNames = data.version_groups;
      fetch("https://pokeapi.co/api/v2/move-target/" + name + "/")  
      .then (this(response.json();))
      var pokeType = function(getType) {
        fetch("https://pokeapi.co/api/v2/type/" + name + "/")
      .then(this(response.json();))
      };
      var betterThan = function(superEffective) {
        fetch("https://pokeapi.co/api/v2/type/" + name + "/")
        .then (this(response.json){double_damage_to};))
      };
      var weakerThan = function(callNurseJoy) {
        fetch("https://pokeapi.co/api/v2/type/" + name + "/")
        .then (this(response.json){double_damage_from};))
      };

vgc.onclick = function(gameInfo);

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
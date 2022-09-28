var getPokemon = function(pokeName) {
  var poke = "pikachu".toLowerCase();
  fetch("https://pokeapi.co/api/v2/pokemon/" + poke + "/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var pokeID = data.id;
    var name = data.name;
    var pokeHeight = data.height;
    var pokeWeight = data.weight/4.53846154;
    var nameHeader = document.querySelector("#pokename");
    var heightText = document.querySelector("#height")
    var weightText = document.querySelector("#weight")
    nameHeader.textContent = name + " #" + pokeID;
    heightText.textContent = pokeHeight;
    weightText.textContent = pokeWeight;
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

getPokemon();
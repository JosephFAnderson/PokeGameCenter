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
    console.log(name);
    var nameHeader = document.querySelector("#pokename");
    console.log(nameHeader)
    nameHeader.textContent = name;
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

getPokemon()
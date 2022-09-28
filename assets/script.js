var searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchPoke);

function searchPoke(event){
    event.preventDefault();
    console.log("ello mate!");
    var initialSearch = document.getElementById("searcher");
    var pokeName = initialSearch.value;
    console.log(pokeName);
    initialSearch.value = "";
}
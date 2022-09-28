function getTCG(pokeName) {
    var options = {
	method: 'GET',
	headers: {
		'X-API-Key': '2d0d487d-d62c-4cbd-a2a0-fe8c74e6ce13'
	}
    };

    fetch('https://api.pokemontcg.io/v2/cards?q=name:' + pokeName, options)
	    .then(function (response) {
            return response.json()
        } )
	    .then(function (data) {
            console.log(data.data)
            pokeImg = data.data
            console.log(pokeImg[0].images.small);

            //Add images somewhere
        }) 
	    .catch(err => console.error(err));
}
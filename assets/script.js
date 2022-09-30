var versions; 
var moveKit;
var pokeType;
var pokeName;
var pokeID;
var favoritedArray = JSON.parse(localStorage.getItem("favorited poke")) || [];

var pokeString = "Bulbasaur,Ivysaur,Venusaur,Charmander,Charmeleon,Charizard,Squirtle,Wartortle,Blastoise,Caterpie,Metapod,Butterfree,Weedle,Kakuna,Beedrill,Pidgey,Pidgeotto,"
+ "Pidgeot,Rattata,Raticate,Spearow,Fearow,Ekans,Arbok,Pikachu,Raichu,Sandshrew,Sandslash,Nidoran♀,Nidorina,Nidoqueen,Nidoran♂,Nidorino,Nidoking,Clefairy,Clefable,Vulpix,Ninetales,Jigglypuff,Wigglytuff,Zubat,Golbat,Oddish,Gloom,Vileplume,Paras,Parasect,Venonat,Venomoth,Diglett,Dugtrio,Meowth,Persian,Psyduck,Golduck,Mankey,Primeape,Growlithe,Arcanine,Poliwag,Poliwhirl,Poliwrath,Abra,Kadabra,Alakazam,Machop,Machoke,Machamp,Bellsprout,Weepinbell,Victreebel,Tentacool,Tentacruel,Geodude,Graveler,Golem,Ponyta,Rapidash,Slowpoke,Slowbro,Magnemite,Magneton,Farfetch’d,"
+ "Doduo,Dodrio,Seel,Dewgong,Grimer,Muk,Shellder,Cloyster,Gastly,Haunter,Gengar,Onix,Drowzee,Hypno,Krabby,Kingler,Voltorb,Electrode,Exeggcute,Exeggutor,Cubone,Marowak,Hitmonlee,Hitmonchan,Lickitung,Koffing,Weezing,Rhyhorn,Rhydon,Chansey,Tangela,Kangaskhan,Horsea,Seadra,Goldeen,Seaking,Staryu,Starmie,Mr. Mime,Scyther,Jynx,Electabuzz,Magmar,Pinsir,Tauros,Magikarp,Gyarados,Lapras,Ditto,Eevee,Vaporeon,Jolteon,Flareon,Porygon,Omanyte,Omastar,Kabuto,Kabutops,Aerodactyl,Snorlax,Articuno,Zapdos,Moltres,Dratini,Dragonair,Dragonite,Mewtwo,Mew,Chikorita,Bayleef,Meganium,Cyndaquil,Quilava,Typhlosion,Totodile"
+ ",Croconaw,Feraligatr,Sentret,Furret,Hoothoot,Noctowl,Ledyba,Ledian,Spinarak,Ariados,Crobat,Chinchou,Lanturn,Pichu,Cleffa,Igglybuff,Togepi,Togetic,Natu,Xatu,Mareep,Flaaffy,"
+ "Ampharos,Bellossom,Marill,Azumarill,Sudowoodo,Politoed,Hoppip,Skiploom,Jumpluff,Aipom,Sunkern,Sunflora,Yanma,Wooper,Quagsire,Espeon,Umbreon,Murkrow,Slowking,Misdreavus,Unown,"
+ "Wobbuffet,Girafarig,Pineco,Forretress,Dunsparce,Gligar,Steelix,Snubbull,Granbull,Qwilfish,Scizor,Shuckle,Heracross,Sneasel,Teddiursa,Ursaring,Slugma,Magcargo,Swinub,Piloswine,"
+ "Corsola,Remoraid,Octillery,Delibird,Mantine,Skarmory,Houndour,Houndoom,Kingdra,Phanpy,Donphan,Porygon2,Stantler,Smeargle,Tyrogue,Hitmontop,Smoochum,Elekid,Magby,Miltank,"
+ "Blissey,Raikou,Entei,Suicune,Larvitar,Pupitar,Tyranitar,Lugia,Ho-Oh,Celebi,Treecko,Grovyle,Sceptile,Torchic,Combusken,Blaziken,Mudkip,Marshtomp,Swampert,Poochyena,Mightyena,"
+ "Zigzagoon,Linoone,Wurmple,Silcoon,Beautifly,Cascoon,Dustox,Lotad,Lombre,Ludicolo,Seedot,Nuzleaf,Shiftry,Taillow,Swellow,Wingull,Pelipper,Ralts,Kirlia,Gardevoir,Surskit,"
+ "Masquerain,Shroomish,Breloom,Slakoth,Vigoroth,Slaking,Nincada,Ninjask,Shedinja,Whismur,Loudred,Exploud,Makuhita,Hariyama,Azurill,Nosepass,Skitty,Delcatty,Sableye,Mawile,"
+ "Aron,Lairon,Aggron,Meditite,Medicham,Electrike,Manectric,Plusle,Minun,Volbeat,Illumise,Roselia,Gulpin,Swalot,Carvanha,Sharpedo,Wailmer,Wailord,Numel,Camerupt,Torkoal,Spoink,"
+ "Grumpig,Spinda,Trapinch,Vibrava,Flygon,Cacnea,Cacturne,Swablu,Altaria,Zangoose,Seviper,Lunatone,Solrock,Barboach,Whiscash,Corphish,Crawdaunt,Baltoy,Claydol,Lileep,Cradily,"
+ "Anorith,Armaldo,Feebas,Milotic,Castform,Kecleon,Shuppet,Banette,Duskull,Dusclops,Tropius,Chimecho,Absol,Wynaut,Snorunt,Glalie,Spheal,Sealeo,Walrein,Clamperl,Huntail,Gorebyss,"
+ "Relicanth,Luvdisc,Bagon,Shelgon,Salamence,Beldum,Metang,Metagross,Regirock,Regice,Registeel,Latias,Latios,Kyogre,Groudon,Rayquaza,Jirachi,Deoxys,Turtwig,Grotle,Torterra,"
+ "Chimchar,Monferno,Infernape,Piplup,Prinplup,Empoleon,Starly,Staravia,Staraptor,Bidoof,Bibarel,Kricketot,Kricketune,Shinx,Luxio,Luxray,Budew,Roserade,Cranidos,Rampardos,"
+ "Shieldon,Bastiodon,Burmy,Wormadam,Mothim,Combee,Vespiquen,Pachirisu,Buizel,Floatzel,Cherubi,Cherrim,Shellos,Gastrodon,Ambipom,Drifloon,Drifblim,Buneary,Lopunny,Mismagius,"
+ "Honchkrow,Glameow,Purugly,Chingling,Stunky,Skuntank,Bronzor,Bronzong,Bonsly,Mime Jr.,Happiny,Chatot,Spiritomb,Gible,Gabite,Garchomp,Munchlax,Riolu,Lucario,Hippopotas,"
+ "Hippowdon,Skorupi,Drapion,Croagunk,Toxicroak,Carnivine,Finneon,Lumineon,Mantyke,Snover,Abomasnow,Weavile,Magnezone,Lickilicky,Rhyperior,Tangrowth,Electivire,Magmortar,"
+ "Togekiss,Yanmega,Leafeon,Glaceon,Gliscor,Mamoswine,Porygon-Z,Gallade,Probopass,Dusknoir,Froslass,Rotom,Uxie,Mesprit,Azelf,Dialga,Palkia,Heatran,Regigigas,Giratina,Cresselia,"
+ "Phione,Manaphy,Darkrai,Shaymin,Arceus,Victini,Snivy,Servine,Serperior,Tepig,Pignite,Emboar,Oshawott,Dewott,Samurott,Patrat,Watchog,Lillipup,Herdier,Stoutland,Purrloin,Liepard,"
+ "Pansage,Simisage,Pansear,Simisear,Panpour,Simipour,Munna,Musharna,Pidove,Tranquill,Unfezant,Blitzle,Zebstrika,Roggenrola,Boldore,Gigalith,Woobat,Swoobat,Drilbur,Excadrill,"
+ "Audino,Timburr,Gurdurr,Conkeldurr,Tympole,Palpitoad,Seismitoad,Throh,Sawk,Sewaddle,Swadloon,Leavanny,Venipede,Whirlipede,Scolipede,Cottonee,Whimsicott,Petilil,Lilligant,"
+ "Basculin,Sandile,Krokorok,Krookodile,Darumaka,Darmanitan,Maractus,Dwebble,Crustle,Scraggy,Scrafty,Sigilyph,Yamask,Cofagrigus,Tirtouga,Carracosta,Archen,Archeops,Trubbish,"
+ "Garbodor,Zorua,Zoroark,Minccino,Cinccino,Gothita,Gothorita,Gothitelle,Solosis,Duosion,Reuniclus,Ducklett,Swanna,Vanillite,Vanillish,Vanilluxe,Deerling,Sawsbuck,Emolga,"
+ "Karrablast,Escavalier,Foongus,Amoonguss,Frillish,Jellicent,Alomomola,Joltik,Galvantula,Ferroseed,Ferrothorn,Klink,Klang,Klinklang,Tynamo,Eelektrik,Eelektross,Elgyem,Beheeyem,"
+ "Litwick,Lampent,Chandelure,Axew,Fraxure,Haxorus,Cubchoo,Beartic,Cryogonal,Shelmet,Accelgor,Stunfisk,Mienfoo,Mienshao,Druddigon,Golett,Golurk,Pawniard,Bisharp,Bouffalant,"
+ "Rufflet,Braviary,Vullaby,Mandibuzz,Heatmor,Durant,Deino,Zweilous,Hydreigon,Larvesta,Volcarona,Cobalion,Terrakion,Virizion,Tornadus,Thundurus,Reshiram,Zekrom,Landorus,Kyurem,"
+ "Keldeo,Meloetta,Genesect,Chespin,Quilladin,Chesnaught,Fennekin,Braixen,Delphox,Froakie,Frogadier,Greninja,Bunnelby,Diggersby,Fletchling,Fletchinder,Talonflame,Scatterbug,"
+ "Spewpa,Vivillon,Litleo,Pyroar,Flabébé,Floette,Florges,Skiddo,Gogoat,Pancham,Pangoro,Furfrou,Espurr,Meowstic,Honedge,Doublade,Aegislash,Spritzee,Aromatisse,Swirlix,Slurpuff,"
+ "Inkay,Malamar,Binacle,Barbaracle,Skrelp,Dragalge,Clauncher,Clawitzer,Helioptile,Heliolisk,Tyrunt,Tyrantrum,Amaura,Aurorus,Sylveon,Hawlucha,Dedenne,Carbink,Goomy,Sliggoo,"
+ "Goodra,Klefki,Phantump,Trevenant,Pumpkaboo,Gourgeist,Bergmite,Avalugg,Noibat,Noivern,Xerneas,Yveltal,Zygarde,Diancie,Hoopa,Volcanion,Rowlet,Dartrix,Decidueye,Litten,Torracat,"
+ "Incineroar,Popplio,Brionne,Primarina,Pikipek,Trumbeak,Toucannon,Yungoos,Gumshoos,Grubbin,Charjabug,Vikavolt,Crabrawler,Crabominable,Oricorio,Cutiefly,Ribombee,Rockruff,"
+ "Lycanroc,Wishiwashi,Mareanie,Toxapex,Mudbray,Mudsdale,Dewpider,Araquanid,Fomantis,Lurantis,Morelull,Shiinotic,Salandit,Salazzle,Stufful,Bewear,Bounsweet,Steenee,Tsareena,"
+ "Comfey,Oranguru,Passimian,Wimpod,Golisopod,Sandygast,Palossand,Pyukumuku,Type: Null,Silvally,Minior,Komala,Turtonator,Togedemaru,Mimikyu,Bruxish,Drampa,Dhelmise,Jangmo-o,"
+ "Hakamo-o,Kommo-o,Tapu Koko,Tapu Lele,Tapu Bulu,Tapu Fini,Cosmog,Cosmoem,Solgaleo,Lunala,Nihilego,Buzzwole,Pheromosa,Xurkitree,Celesteela,Kartana,Guzzlord,Necrozma,Magearna,"
+ "Marshadow,Poipole,Naganadel,Stakataka,Blacephalon,Zeraora,Meltan,Melmetal,Grookey,Thwackey,Rillaboom,Scorbunny,Raboot,Cinderace,Sobble,Drizzile,Inteleon,Skwovet,Greedent,"
+ "Rookidee,Corvisquire,Corviknight,Blipbug,Dottler,Orbeetle,Nickit,Thievul,Gossifleur,Eldegoss,Wooloo,Dubwool,Chewtle,Drednaw,Yamper,Boltund,Rolycoly,Carkol,Coalossal,Applin,"
+ "Flapple,Appletun,Silicobra,Sandaconda,Cramorant,Arrokuda,Barraskewda,Toxel,Toxtricity,Sizzlipede,Centiskorch,Clobbopus,Grapploct,Sinistea,Polteageist,Hatenna,Hattrem,"
+ "Hatterene,Impidimp,Morgrem,Grimmsnarl,Obstagoon,Perrserker,Cursola,Sirfetch'd,Mr. Rime,Runerigus,Milcery,Alcremie,Falinks,Pincurchin,Snom,Frosmoth,Stonjourner,Eiscue,"
+ "Indeedee,Morpeko,Cufant,Copperajah,Dracozolt,Arctozolt,Dracovish,Arctovish,Duraludon,Dreepy,Drakloak,Dragapult,Zacian,Zamazenta,Eternatus,Kubfu,Urshifu,Zarude,Regieleki,"
+ "Regidrago,Glastrier,Spectrier,Calyrex,Wyrdeer,Kleavor,Ursaluna,Basculegion,Sneasler,Overqwil,Enamorus"

pokeString.toLowerCase();
var autoPoke = pokeString.split(',');


var getPokemon = function(pokeName) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName + "/")
    .then(function (response) {
      return response.json();
  })
    .then(function (data) {
      versions = data.game_indices;
      moveKit = data.moves;
      pokeID = data.id;
      var pokeHeight = (data.height*.328084);
      var pokeHeightRounded = Math.round(pokeHeight * 10)/10
      var pokeWeight =data.weight*.220462;
      var pokeWeightRounded = Math.round(pokeWeight * 10)/10;
      var nameHeader = document.querySelector("#pokename");
      var heightText = document.querySelector("#height");
      var weightText = document.querySelector("#weight");
      var typesText = document.querySelector("#types")
      var typesHeader = document.querySelector("#typestext")
      pokeType = data.types
      var pokeImage = data.sprites.front_default
      nameHeader.textContent = pokeName + " #" + pokeID;
      heightText.textContent = "Height: " + pokeHeightRounded + " feet";
      weightText.textContent = "Weight: " + pokeWeightRounded + " lbs";
      typesHeader.textContent = "Types:"
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
              }
          // Creating buttons for increment and decrement  
          pokeID += 1;
            if(pokeID <= 905){
              fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokeID)
                .then(function (response) {
                  return response.json();
              })
                .then(function (data) {
                  nextPokemon.setAttribute("style", "display: inline-block")
                  nextPokemon.value = data.name;
                  nextPokemon.textContent = data.name + " #" + data.id + " >";
              })}else{
                  nextPokemon.setAttribute("style", "display: none")
            };

            pokeID -= 2;
            if(pokeID > 0){
            fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokeID)
              .then(function (response) {
              return response.json();
            })
              .then(function (data) {
                prevPokemon.setAttribute("style", "display: inline-block")
                prevPokemon.value = data.name;
                prevPokemon.textContent = "< #" + data.id + " " + data.name;    
            })
          }else{
            prevPokemon.setAttribute("style", "display: none")
          };
        
});
   });
};

// Functionality for increment and decrement buttons
var nextPokemon = document.querySelector("#incrementpokemon") 
nextPokemon.addEventListener("click", function(event){
 var incrementPokemom = event.target.value;
  getPokemon(incrementPokemom); 
  getTCG(incrementPokemom);
  });

var prevPokemon = document.querySelector("#decrementpokemon") 
prevPokemon.addEventListener("click", function(event){
  var decrementPokemom = event.target.value;
  getPokemon(decrementPokemom); 
  getTCG(decrementPokemom);
  });



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
                var price = document.createElement('p');
                

                // Uncomment lines 103-131 to error handle backward cards
                // var imgUrl = pokeImg[i].images.small;
               
                //Check if img url returns 404 error              
                // function urlExists(url) {
                //   var http = new XMLHttpRequest();
                //   http.open('HEAD', url, false);
                //   http.send();
                //   if (http.status != 404) {
                //     addImg = true;
                //   } 
                // }                   

                // urlExists(imgUrl);

                // If no error message detected then add image to html
                // if (addImg){
                  modalImg.setAttribute('src', pokeImg[i].images.small);
                  modalImg.classList.add('p-1');
                  modalImg.classList.add('modImg');
                  
                  
                  img.setAttribute('src', pokeImg[i].images.small);                
                  img.classList.add('d-block');
                  img.classList.add('w-100');

                  modalBod.appendChild(modalImg);
                  singleCarDiv.appendChild(img);               
                  innerCarousel.appendChild(singleCarDiv);                
                // }                                 
            }
        })
}

// Show Pokemon video game info not already displayed in defualt search

var vgc = document.getElementById("vgc");

vgc.addEventListener("click", function(pokemonVGC) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName) 
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log();
      var versions = data.game_indices;
      console.log(versions);
      var gamesIn = document.querySelector("#catchEmIn");
      gamesIn.replaceChildren();
      gamesIn.setAttribute("style", "display: block")
      for (var i = 0; i < versions.length; i++){
        var inGames = document.createElement("li")
        inGames.textContent = versions[i].version.name;
        gamesIn.append(inGames)
      }
      var moveKit = data.moves;
      var pokeMoves = document.querySelector("#gameMoves");
      pokeMoves.replaceChildren();
      pokeMoves.setAttribute("style", "display: block")
      for (var i = 0; i < moveKit.length; i++){
        var moveLi = document.createElement("li")
        moveLi.textContent = moveKit[i].move.name;
        pokeMoves.append(moveLi)
      }
    })
});

var searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchPoke);

function searchPoke(event){
    event.preventDefault();
    var initialSearch = document.getElementById("searcher");
    pokeName = initialSearch.value.toLowerCase();
    initialSearch.value = "";
    getPokemon(pokeName);
    getTCG(pokeName);
    vgc.setAttribute("style", "display: block")
}

// add to favorites button & local storage
var addFavorites = document.createElement("h4");
addFavorites.textContent = "Add to Favorites";
addFavorites.addEventListener("click", getThoseFavs);
function getThoseFavs(){
  favoritedArray.push(pokeName);
  localStorage.setItem("favorited poke", JSON.stringify(favoritedArray));
}
// var favStuff = document.getElementById("fav-sec");
// favStuff.appendChild(addFavorites);


// search function content
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
var input = document.getElementById('searcher');
autocomplete(input, autoPoke);

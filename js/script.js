const pkmnApiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.getElementById('pokemons');

function fetchPokemon(){
    fetch(pkmnApiUrl)
    .then(response => response.json())
    .then(data => {


        const pokemons = data.results;

        // Affichage uniquement dans la console

        // for (let i = 0; i < data.count; i++) {
        //     console.log(data.results[i].name)
        // }    



        // Affichage dans le HTML grâce à une div "pokemons"

        pokemons.forEach(pokemon => {
                const a = document.createElement('A');
                a.innerText = pokemon.name
                a.href = pokemon.url

                target.append(a)
        });

      
    })
}


// fetchPokemon()


function jQueryPokemon(){
    $.ajax({
        url: pkmnApiUrl,

        timeout: 10000,

        success: function (data){

            // Affichage uniquement dans la console

            // for (let i = 0; i < data.count; i++) {

            //     console.log(data.results[i].name)
            // } 



            // Affichage dans le HTML grâce à une div "pokemons"

            const pokemons = data.results;

            pokemons.forEach(pokemon => {
                    const a = document.createElement('A');
                    a.innerText = pokemon.name
                    a.href = pokemon.url

                    target.append(a)
            });   
        },

        error: function (){
            console.log('Erreur lors du chargement de l\'API Pokémon')
        }
    })
}


// jQueryPokemon()


function xhrPokemon(){
let xhr = new XMLHttpRequest();

    xhr.open('GET', pkmnApiUrl);

    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = function(){
        let data = xhr.response;

        // Affichage uniquement dans la console

        // for (let i = 0; i < data.count; i++) {
        //     console.log(data.results[i].name)
        // }   

        

        // Affichage dans le HTML grâce à une div "pokemons"


        const pokemons = data.results;

        pokemons.forEach(pokemon => {
                const a = document.createElement('A');
                a.innerText = pokemon.name
                a.href = pokemon.url

                target.append(a)
        });


    }
}


xhrPokemon()


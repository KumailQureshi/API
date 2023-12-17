document.querySelector('search').addEventListener("click", getPokemon);

function getPokemon() {
const name = document.querySelector("findPokemon").value;

    fetch('https://pokeapi.co/api/v2/pokemon/${name}')
    .then((response) => response.json())
    .then((data) => {
    document.querySelector(".pokemonBox").innerHTML ='';

   })
    .catch((err) => {
    console.log("Pokemon not found", err);
   });

e.preventDefault();
}
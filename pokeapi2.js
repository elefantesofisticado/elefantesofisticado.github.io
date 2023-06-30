console.log("start run script pokeapi2")

fetch('https://pokeapi.co/api/v2/pokemon/${idPokemon}')
  .then(function(response) {
    if (response.ok) {
      return response.json(); 
    }
    throw new Error('Error en la solicitud de la API: ' + response.status);
  })
  .then(function(data) {
    document.addEventListener("DOMContentLoaded", function() {
      console.log(data);
      console.log(data.name);
      console.log(data.types);
    });

    // Hacer algo con los datos obtenidos
  })
  .catch(function(error) {
    console.error('Error:', error);
  });




const numeroAleatorio = Math.floor(Math.random() * 1010) + 1;
const idPokemon = numeroAleatorio;
obtenerInformacionPokemon(idPokemon);


console.log("end run script pokeapi2")

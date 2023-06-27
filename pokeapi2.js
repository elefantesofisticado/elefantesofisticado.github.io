fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(function(response) {
    if (response.ok) {
      return response.json(); // Convertir la respuesta en formato JSON
    }
    throw new Error('Error en la solicitud de la API: ' + response.status);
  })
  .then(function(data) {
    console.log(data); // Hacer algo con los datos obtenidos
  })
  .catch(function(error) {
    console.error('Error:', error);
  });

console.log("pokeapi")
console.log(idPokemon)





fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(function(response) {
    if (response.status === 200) {
      return response.json(); 
      const datosPokemon = response.data;
      const nombre = datosPokemon.name;
      const urlImagen = datosPokemon.sprites.front_default;
      const nombre = datosPokemon.name;
      const id = datosPokemon.id;
      const tipos = datosPokemon.types.map(tipo => tipo.type.name);

      console.log(nombre)
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


function cambiarTitulo() {
  var parrafoElemento = document.getElementById("descripcion2");
  parrafoElemento.innerHTML = "Nuevo Título";
}

console.log("start run script pokeapi2")

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(function(response) {
    if (response.ok) {
      return response.json(); 
    }
    throw new Error('Error en la solicitud de la API: ' + response.status);
  })
  .then(function(data) {
    console.log(data);
    console.log(data.name)
    // Hacer algo con los datos obtenidos
  })
  .catch(function(error) {
    console.error('Error:', error);
  });


function cambiarTitulo() {
  var parrafoElemento = document.getElementById("descripción1");
    parrafoElemento.innerHTML = "Nuevo Título and blablablablablabla";
}

console.log("end run script pokeapi2")

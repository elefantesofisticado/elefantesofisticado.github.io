console.log("start run script pokeapi2")

function cambiarTitulo() {
  var tituloElemento = document.getElementById("sub-title");
  tituloElemento.textContent = "Reto: Acierta los typos de este Pokemon";
}
cambiarTitulo();

function llamarAPI() {
  fetch('https://pokeapi.co/api/v2/pokemon/254')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error al llamar a la API.');
    })
    .then(function(data) {
      // Haz algo con los datos recibidos
      const tipo = data.types;
      var nombresTipos = tipo.map(function(tipo) {
        return tipo.type.name;
        });
      console.log(nombresTipos);
      console.log(tipo);
      function nombrePokemon() {
      var tituloElemento = document.getElementById("descripcion1");
      tituloElemento.textContent = data.name + " " + nombresTipos;
        }
      nombrePokemon();
    
      var imagenURL = data.sprites.front_default;
      var imagenPokemon = document.getElementById('imagenPokemon2');
      imagenPokemon.src = imagenURL;
      imagenPokemon.document.body.appendChild(imagenPokemon);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Llama a la función para hacer la solicitud
llamarAPI();

console.log("end run script pokeapi2")

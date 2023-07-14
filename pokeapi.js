function obtenerNumeroAleatorio() {
  const min = 1;
  const max = 1010;
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroAleatorio;
}

const numeroAleatorio = obtenerNumeroAleatorio();
const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`;

async function obtenerDatosPokemon(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener los datos del Pokémon:', error);
  }
}

async function mostrarTipoPrincipalPokemon(url) {
  try {
    const pokemon = await obtenerDatosPokemon(url);
    const tipoPrincipal = pokemon.types[0].type.name;
    console.log('Tipo principal del Pokémon:', tipoPrincipal);
    const nombrePokemon = pokemon.name;
    console.log("Su nombre es: ", nombrePokemon);
    var mostrarNombre = document.getElementById("descripcion1");
    mostrarNombre.textContent = nombrePokemon.toUpperCase();
    //FOTO
    console.log('Imagen del Pkmn:', pokemon.sprites.front_default);
    var imagenContainer = document.getElementById('imagenPokemon');
    var imagen = document.createElement('img');
    imagen.src = pokemon.sprites.front_default;
    imagen.alt = 'Imagen del Pokémon';
    imagen.id = 'imagen-pokemon';
    imagenContainer.appendChild(imagen);
    return tipoPrincipal;
  } catch (error) {
    console.log('Error al mostrar el tipo principal del Pokémon:', error);
  }
}

url = urlPokemon;
mostrarTipoPrincipalPokemon(url);

var listaSelect = document.getElementById("miMenu");
listaSelect.addEventListener("change", mostrarSeleccion);

function mostrarSeleccion() {
  var tipoSeleccionado = listaSelect.value;
  console.log("Tipo seleccionado:", tipoSeleccionado);
  procesarDatosPokemon(url, tipoSeleccionado);
}

function procesarDatosPokemon(url, tipoSeleccionado) {
  obtenerDatosPokemon(url)
    .then(data => {
      const tipoPrincipal = data.types[0].type.name;
      if (tipoPrincipal == tipoSeleccionado) {
        var resultado = document.getElementById("resultado");
        resultado.textContent = "ACERTADO!";
        console.log("ACERTADO!");
      } else {
        var resultado = document.getElementById("resultado");
        resultado.textContent = "No es ese tipo";
        console.log("Ahora no");
      }
      // Aquí puedes procesar los datos obtenidos antes de pasarlo a otra función
      console.log('Tipo principal del Pokémon:', tipoPrincipal);
    })
    .catch(error => {
      console.log('Error al procesar los datos del Pokémon:', error);
    });
}

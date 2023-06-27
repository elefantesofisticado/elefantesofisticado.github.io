
const axios = require('axios');
const { createCanvas, loadImage } = require('canvas');

async function obtenerInformacionPokemon(idPokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;

  try {
    const respuesta = await axios.get(url);

    // Verificar el código de respuesta
    if (respuesta.status === 200) {
      const datosPokemon = respuesta.data;

      // Obtener información específica del Pokémon
      const urlImagen = datosPokemon.sprites.front_default;
      const nombre = datosPokemon.name;
      const id = datosPokemon.id;
      const tipos = datosPokemon.types.map(tipo => tipo.type.name);

      // Obtener la imagen del Pokémon
      const imagenResponse = await axios.get(urlImagen, {
        responseType: 'arraybuffer'
      });
      const imagenBuffer = Buffer.from(imagenResponse.data);
      const imagen = await loadImage(imagenBuffer);

      // Imprimir la información
      console.log('Nombre:', nombre);
      console.log('Tipos:', tipos);
      console.log('ID:', id);
      console.log('Cantidad de Tipos:', tipos.length);

      // Mostrar la imagen (opcional)
      const canvas = createCanvas(imagen.width, imagen.height);
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imagen, 0, 0);
      canvas.createPNGStream().pipe(require('fs').createWriteStream('pokemon.png'));
    } else {
      console.log('No se pudo obtener información del Pokémon');
    }
  } catch (error) {
    console.log('Error al hacer la solicitud a la API de Pokémon:', error.message);
  }
}

console.log("pokeapi")
console.log(idPokemon)

// Llamar a la función para obtener información del Pokémon
const numeroAleatorio = Math.floor(Math.random() * 1010) + 1;
const idPokemon = numeroAleatorio;
obtenerInformacionPokemon(idPokemon);

var myElement = document.getElementById("sub-title2");
myElement.textContent = idPokemon;




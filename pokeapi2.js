console.log("start run script pokeapi2")

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(function(response) {
    if (response.ok) {
      return response.json(); 
    }
    throw new Error('Error en la solicitud de la API: ' + response.status);
  })
  .then(function(data) {
    document.addEventListener("DOMContentLoaded", function() {
      console.log(data);
      console.log(data.name)
      var nameElement = document.getElementById("descripcion1");
      nameElement.textContent = "Nombre: ";
      nameElement.textContent = data.name;
      document.body.appendChild(newElement);
    });

    // Hacer algo con los datos obtenidos
  })
  .catch(function(error) {
    console.error('Error:', error);
  });




console.log("end run script pokeapi2")

// mi_script.js

// Función para saludar
function saludar() {
  console.log("¡Hola desde el archivo JavaScript externo!");
}

// phytonshell
const { PythonShell } = require('python-shell');

PythonShell.run('pokeapi.py', null, function (err) {
  if (err) throw err;
  console.log('Módulo de Python ejecutado exitosamente.');
});
// Llamada a la función de saludo
saludar();

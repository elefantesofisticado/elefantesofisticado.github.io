# Hacer una solicitud a la API de Pokémon
import requests
import random
#para no descargar la imagen
from PIL import Image
from io import BytesIO

def obtener_informacion_pokemon(id_pokemon):
    url = f"https://pokeapi.co/api/v2/pokemon/{id_pokemon}"
    respuesta = requests.get(url)

    # Verificar el código de respuesta
    if respuesta.status_code == 200:
        datos_pokemon = respuesta.json()

        # Obtener información específica del Pokémon
        # Obtener la URL de la imagen frontal del Pokémon
        url_imagen = datos_pokemon['sprites']['front_default']
        nombre = datos_pokemon['name']
        id = datos_pokemon['id']
        tipos = [tipo['type']['name'] for tipo in datos_pokemon['types']]
        response = requests.get(url_imagen)

        # Imprimir la información
        capitalizado = nombre.capitalize()
        print("Nombre:", capitalizado)
        print("Tipos:", tipos)
        imagen = Image.open(BytesIO(response.content))
        imagen.show()
        print(len(tipos))

    else:
        print("No se pudo obtener información del Pokémon")
        

# Llamar a la función para obtener información del Pokémon
numero_aleatorio = random.randint(1, 1010)
id_pokemon = numero_aleatorio
obtener_informacion_pokemon(id_pokemon)

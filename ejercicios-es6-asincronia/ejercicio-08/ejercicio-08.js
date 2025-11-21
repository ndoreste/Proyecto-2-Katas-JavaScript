/* Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así: */

//Os aportamos el HTML sobre el que haremos el ejercicio:

/* Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters */

// URL de la API de Juego de Tronos
const API_URL = "https://thronesapi.com/api/v2/Characters";

// Referencias a los elementos del DOM
const characterSelect = document.getElementById("character-list");
const characterImage = document.querySelector(".character-image");

// Función para obtener los personajes de la API
async function fetchCharacters() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const characters = await response.json();
    populateSelect(characters);
  } catch (error) {
    console.error("Error:", error);
    characterSelect.innerHTML = "<option>Error al cargar personajes</option>";
  }
}

// Función para poblar el select con los personajes
function populateSelect(characters) {
  // Añadir opción por defecto
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Selecciona un personaje...";
  characterSelect.appendChild(defaultOption);

  // Añadir cada personaje como opción
  characters.forEach((character) => {
    const option = document.createElement("option");
    option.value = character.imageUrl;
    option.textContent = `${character.fullName}`;
    option.dataset.image = character.imageUrl;
    characterSelect.appendChild(option);
  });
}

// Función para mostrar la imagen del personaje seleccionado
function displayCharacterImage(event) {
  const selectedImageUrl = event.target.value;

  if (selectedImageUrl) {
    characterImage.src = selectedImageUrl;
    characterImage.alt = event.target.options[event.target.selectedIndex].text;
    characterImage.style.display = "block";
  } else {
    characterImage.style.display = "none";
  }
}

// Event listener para el cambio en el select
characterSelect.addEventListener("change", displayCharacterImage);

// Inicializar la aplicación
fetchCharacters();

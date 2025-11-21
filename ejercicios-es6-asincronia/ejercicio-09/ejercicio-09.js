/* Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste. */

/* Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

Documentación: https://pokeapi.co/

URL: https://pokeapi.co/api/v2/pokemon/1

Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites. */

//?  El ejercicio no lo pide pero voy a mostrar mas información como por ejemplo nombre, número, tipo, altura y habilidades:

const MIN_ID = 1;
const MAX_ID = 151;

function getRandomPokemonId() {
  return Math.floor(Math.random() * (MAX_ID - MIN_ID + 1)) + MIN_ID;
}

function getPreferredImageFromSprites(sprites) {
  const candidates = [
    sprites.other?.["official-artwork"]?.front_default,
    sprites.other?.dream_world?.front_default,
    sprites.front_default,
    sprites.front_shiny,
  ];

  return candidates.find((url) => !!url) || "";
}

async function loadRandomPokemon() {
  const imgElement = document.querySelector(".random-image");
  const nameElement = document.querySelector(".pokemon-name");
  const idElement = document.querySelector(".pokemon-id");
  const typesElement = document.querySelector(".pokemon-types");
  const physicalElement = document.querySelector(".pokemon-physical");
  const abilitiesList = document.querySelector(".pokemon-abilities");

  const randomId = getRandomPokemonId();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener el Pokémon");
    }

    const data = await response.json();

    // Imagen
    const imageUrl = getPreferredImageFromSprites(data.sprites);
    if (!imageUrl) throw new Error("No se encontró una imagen válida");
    imgElement.src = imageUrl;
    imgElement.alt = data.name;

    // Nombre (capitalizado)
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    nameElement.textContent = name;

    // ID de Pokédex
    idElement.textContent = `N.º ${data.id}`;

    // Tipos
    const types = data.types
      .map((t) => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1))
      .join(" / ");
    typesElement.textContent = `Tipo: ${types}`;

    // Altura y peso (la API los da en decímetros y hectogramos)
    const heightMeters = data.height / 10; // decímetros → metros
    const weightKg = data.weight / 10; // hectogramos → kg
    physicalElement.textContent = `Altura: ${heightMeters} m | Peso: ${weightKg} kg`;

    // Habilidades
    abilitiesList.innerHTML = ""; // limpiar por si recargas con SPA
    data.abilities.forEach((abilityObj) => {
      const li = document.createElement("li");
      const abilityName = abilityObj.ability.name;
      li.textContent =
        abilityName.charAt(0).toUpperCase() + abilityName.slice(1);
      abilitiesList.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadRandomPokemon);

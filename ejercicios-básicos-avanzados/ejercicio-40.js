//? EJERCICIO 40:

/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

function findArrayIndex(array, text) {
  return array.indexOf(text);
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos y comprobaciones
console.log("=== Ejemplos con el array mainCharacters ===");

// Ejemplo 1: Buscar "Luke"
console.log(`Posición de "Luke": ${findArrayIndex(mainCharacters, "Luke")}`);
// Resultado esperado: 0

// Ejemplo 2: Buscar "Rey"
console.log(`Posición de "Rey": ${findArrayIndex(mainCharacters, "Rey")}`);
// Resultado esperado: 4

// Ejemplo 3: Buscar "Obi-Wan"
console.log(
  `Posición de "Obi-Wan": ${findArrayIndex(mainCharacters, "Obi-Wan")}`
);
// Resultado esperado: 6

// Ejemplo 4: Buscar un personaje que no existe
console.log(
  `Posición de "Darth Vader": ${findArrayIndex(mainCharacters, "Darth Vader")}`
);
// Resultado esperado: -1 (no encontrado)

// Ejemplo 5: Buscar con mayúsculas/minúsculas diferentes
console.log(`Posición de "luke": ${findArrayIndex(mainCharacters, "luke")}`);

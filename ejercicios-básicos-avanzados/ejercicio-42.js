//? EJERCICIO 42:

/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Verificar que los índices sean válidos
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    console.log("Índices fuera del rango del array");
    return array;
  }

  // Crear una copia del array para no modificar el original
  const result = [...array];

  // Intercambiar los elementos
  [result[index1], result[index2]] = [result[index2], result[index1]];

  return result;
}

console.log("Array original:", fantasticFour);

// Intercambiar posición 0 con posición 2
const swapped1 = swap(fantasticFour, 0, 2);
console.log("Intercambio índices 0 y 2:", swapped1);

// Intercambiar posición 1 con posición 3
const swapped2 = swap(fantasticFour, 1, 3);
console.log("Intercambio índices 1 y 3:", swapped2);

// Verificar que el array original no se modificó
console.log("Array original después de los intercambios:", fantasticFour);

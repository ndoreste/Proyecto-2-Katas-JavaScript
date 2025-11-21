//? EJERCICO 11:

/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función: */

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let total = 0; // Variable acumuladora para guardar la suma

  // Recorremos cada elemento del array

  for (let item of list) {
    // Si es número, lo añadimos a la suma
    if (typeof item === "number") {
      total += item;
      // Si es string, sumamos su longitud
    } else if (typeof item === "string") {
      total += item.length;
    }
  }
  // Dividimos la suma total entre el número de elementos del array
  return total / list.length;
}

console.log(averageWord(mixedElements));

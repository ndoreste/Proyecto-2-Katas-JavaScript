//? EJERCICIO 18:

/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.

Puedes usar este array: */

const placesToTravel = [
  { id: 5, name: "Japan" }, // 0
  { id: 11, name: "Venecia" }, // 1
  { id: 23, name: "Murcia" }, // 2
  { id: 40, name: "Santander" }, // 3
  { id: 44, name: "Filipinas" }, // 4
  { id: 59, name: "Madagascar" }, // 5
];

// Recorro el array de atrás hacia adelante para evitar problemas con los índices
for (let i = placesToTravel.length - 1; i >= 0; i--) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
  }
}

console.log(placesToTravel);

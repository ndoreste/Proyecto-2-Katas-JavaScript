//? EJERCICIO 10:

/* Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

Puedes usar este array para probarla: */
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Promedio: Suma de valores / Cantidad de valores
  return numberList.reduce((acc, num) => acc + num, 0);
}

promedio = average(numbers) / numbers.length;

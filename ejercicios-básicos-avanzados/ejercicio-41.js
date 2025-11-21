//? EJERCICIO 41:

/* Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */

// Función para simular una tirada de dado
function rollDice(faces) {
  // Math.random() genera un número decimal entre 0 (incluido) y 1 (excluido)
  // Lo multiplicamos por el número de caras
  // Math.floor() redondea hacia abajo para obtener un entero
  // Sumamos 1 porque queremos números del 1 al número de caras
  return Math.floor(Math.random() * faces) + 1;
}

console.log("Dado de 6 caras:", rollDice(6));
console.log("Dado de 20 caras:", rollDice(20));
console.log("Dado de 4 caras:", rollDice(4));

// Simulando varias tiradas
console.log("\n--- Simulando 5 tiradas de un dado de 6 caras ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Tirada ${i}: ${rollDice(6)}`);
}

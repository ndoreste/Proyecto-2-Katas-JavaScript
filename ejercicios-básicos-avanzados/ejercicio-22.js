//? EJERCICO 22:

/* Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante. */

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Índice para llevar control de qué fruta usar siguiente
let fruitIndex = 0;

// Usamos un for para recorrer el array de comidas
for (let i = 0; i < foodSchedule.length; i++) {
  // Si la comida no es vegana, la reemplazamos con una fruta
  if (!foodSchedule[i].isVegan) {
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true; // La fruta es vegana
    fruitIndex++; // Pasamos a la siguiente fruta para evitar duplicados
  }
}

console.log(foodSchedule);

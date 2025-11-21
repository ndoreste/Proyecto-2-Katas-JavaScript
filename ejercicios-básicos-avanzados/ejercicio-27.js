//? EJERCICIO 27:

/* Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola. */

const cartoons = [
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

// Variable para guardar el nombre de la serie más antigua
// Utilizo un punto de referencia para comparar
// Asumo que el primer dibujo es el más antiguo

let oldestCartoon = cartoons[0].name;
let oldestYear = cartoons[0].debut;

// Bucle para recorrer el array
for (let i = 1; i < cartoons.length; i++) {
  // Empiezo en 1 porque ya cogí el elemento 0 como referencia inicial.
  if (cartoons[i].debut < oldestYear) {
    // Este año es menor que el que tenemos guardado
    //Si sí es más antiguo: Actualizamos oldestYear con el nuevo año más antiguo
    oldestYear = cartoons[i].debut;
    // Actualizamos oldestCartoon con el nombre correspondiente
    oldestCartoon = cartoons[i].name;
  }
}

console.log(oldestCartoon);

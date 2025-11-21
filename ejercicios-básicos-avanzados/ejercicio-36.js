//? EJERCICIO 36:

/* Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.

Averigua como hallar el año actual en tus cálculos. */

const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

function calculateActorsAges(actors) {
  // Obtener el año actual
  // const currentYear guarda este valor en una constante
  // new Date() crea un objeto Date con la fecha y hora actual
  // .getFullYear() extrae solo el año
  const currentYear = new Date().getFullYear();

  // Mapear el array para crear un nuevo array con nombres y edades
  // map() recorre cada elemento del array original
  // Retorna un nuevo array con los resultados transformados
  return actors.map((actor) => ({
    // actor => es una función flecha que recibe cada actor del array
    // name: actor.name copia el nombre del actor original
    // age: currentYear - actor.born calcula la edad restando el año de nacimiento del año actual
    name: actor.name,
    age: currentYear - actor.born,
  }));
}

const actorsWithAges = calculateActorsAges(actors);
console.log(actorsWithAges);

console.log("\n--- Actores y sus edades ---");
actorsWithAges.forEach((actor) => {
  console.log(`${actor.name}: ${actor.age} años`);
});

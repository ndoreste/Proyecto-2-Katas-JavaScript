//? EJERCICIO 23:

/* Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

Imprime cada array por consola. */

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

// Inicializar los arrays para cada categoría
const peliculasPequenas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

// Bucle para recorrer las películas
for (let i = 0; i < movies.length; i++) {
  //Obtener la película actual
  const movie = movies[i];

  if (movie.durationInMinutes < 100) {
    peliculasPequenas.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    peliculasMedianas.push(movie);
  } else {
    peliculasGrandes.push(movie);
  }
}

// Imprimir cada array por consola
console.log("=== PELÍCULAS PEQUEÑAS ===");
console.log(peliculasPequenas);

console.log("\n=== PELÍCULAS MEDIANAS ===");
console.log(peliculasMedianas);

console.log("\n=== PELÍCULAS GRANDES ===");
console.log(peliculasGrandes);

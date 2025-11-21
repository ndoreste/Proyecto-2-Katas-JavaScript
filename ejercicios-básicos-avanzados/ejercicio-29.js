//? EJERCICIO 29:

/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola. */

const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

// Objeto para almacenar las películas agrupadas por década
const moviesByDecade = {};

// Recorrer todas las películas con un bucle for
for (let i = 0; i < starWarsMovies.length; i++) {
  const movie = starWarsMovies[i];

  // Calcular la década
  const decade = Math.floor(movie.releaseYear / 10) * 10;
  const decadeKey = `${decade}s`;

  // Si la década no existe en el objeto, crear un array vacío
  if (!moviesByDecade[decadeKey]) {
    moviesByDecade[decadeKey] = [];
  }

  // Agregar la película al array correspondiente
  moviesByDecade[decadeKey].push(movie);
}

console.log("Películas de Star Wars agrupadas por década:");
console.log(moviesByDecade);

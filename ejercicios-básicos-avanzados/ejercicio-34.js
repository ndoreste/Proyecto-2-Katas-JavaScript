//? EJERCICIO 34:

/* Escribe una función que calcule el promedio de duración de una lista de películas.

Recibe un array de películas, cada una con su duración en minutos.

La función debe devolver el promedio de duración de todas las películas. */

const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

// Promedio = la suma de todos los valores / número de valores.

function averageMovieDuration(movies) {
  // Verificar si el array está vacío
  if (movies.length === 0) {
    return 0;
  }
  // Calcular la suma total de duraciones
  const totalDuration = movies.reduce((acc, movie) => acc + movie.duration, 0);
  // Calcular y devolver el promedio
  const average = totalDuration / movies.length;
  return Math.round(average * 100) / 100; // Redondear a 2 decimales
}

const average = averageMovieDuration(movies);
console.log(`El promedio de duración es: ${average} minutos`);

// Conversión a horas y minutos para mejor lectura
const hours = Math.floor(average / 60);
const minutes = Math.round(average % 60);
console.log(`Equivale a: ${hours} horas y ${minutes} minutos`);

// Ejemplos con diferentes casos:
console.log("Promedio con todas las películas:", averageMovieDuration(movies));
console.log("Promedio con array vacío:", averageMovieDuration([]));
console.log();

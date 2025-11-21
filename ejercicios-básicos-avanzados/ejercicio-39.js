//? EJERCICIO 39:

/* Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript. */

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Objeto para almacenar el conteo de cada sonido
// Aquí almacenaremos cada sonido como clave y su conteo como valor
//
let soundCount = {};

// Usamos for...of para recorrer cada usuario
// En cada iteración, user es un objeto completo
for (let user of users) {
  console.log(`Revisando sonidos favoritos de ${user.name}:`);

  // Usamos for...in para recorrer las propiedades del objeto favoritesSounds
  // En cada iteración, soundName es una cadena como "waves", "rain", etc.
  for (let soundName in user.favoritesSounds) {
    console.log(`  - ${soundName}`);

    // Si el sonido ya existe en nuestro contador, incrementamos
    if (soundCount[soundName]) {
      soundCount[soundName]++;
    } else {
      // Si es la primera vez que vemos este sonido, lo inicializamos en 1
      soundCount[soundName] = 1;
    }
  }
}

console.log("\n=== RESULTADO FINAL ===");
console.log("Conteo de sonidos favoritos:");
console.log(soundCount);

console.log("\n=== ESTADÍSTICAS ===");
for (let sound in soundCount) {
  console.log(`${sound}: ${soundCount[sound]} usuario(s)`);
}

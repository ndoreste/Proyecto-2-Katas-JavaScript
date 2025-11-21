//? EJERCICIO 38:

/* Dado el siguiente código usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

Es decir, la media de volumen de todos los volumenes juntos. */

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

// Función para calcular la media usando for...of y for...in
function calculateVolumeAverage(users) {
  let totalVolume = 0;
  let soundCount = 0;

  // for...of para iterar sobre el array de usuarios
  for (const user of users) {
    console.log(`Procesando usuario: ${user.name}`);

    // for...in para iterar sobre las propiedades del objeto favoritesSounds
    for (const soundName in user.favoritesSounds) {
      const sound = user.favoritesSounds[soundName];
      console.log(`  - ${soundName}: volumen ${sound.volume}`);

      totalVolume += sound.volume;
      soundCount++;
    }
  }

  const average = totalVolume / soundCount;

  console.log(`\n--- Resultados ---`);
  console.log(`Total de sonidos: ${soundCount}`);
  console.log(`Suma total de volumen: ${totalVolume}`);
  console.log(`Media de volumen: ${average.toFixed(2)}`);

  return average;
}

// Ejecutar el cálculo
const averageVolume = calculateVolumeAverage(users);

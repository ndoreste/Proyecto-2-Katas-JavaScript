//? EJERCICIO 31:
/* 
Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.

Ejemplo de salida:

Kurt Cobain -> The Beatles

Kurt Cobain -> Pixies

Kurt Cobain -> Lead Belly

David Bowie -> Little Richard

David Bowie -> Chuck Berry

David Bowie -> The Velvet Underground */

const artists = [
  { name: "Kurt Cobain", influences: ["The Beatles", "Pixies", "Lead Belly"] },
  {
    name: "David Bowie",
    influences: ["Little Richard", "Chuck Berry", "The Velvet Underground"],
  },
  {
    name: "Eddie Vedder",
    influences: ["The Who", "Neil Young", "Jim Morrison"],
  },
  {
    name: "Freddie Mercury",
    influences: ["Liza Minnelli", "Jimi Hendrix", "Aretha Franklin"],
  },
  {
    name: "John Lennon",
    influences: ["Elvis Presley", "Chuck Berry", "Buddy Holly"],
  },
];

// Bucle externo: recorre cada artista
for (let i = 0; i < artists.length; i++) {
  const artist = artists[i];

  // Bucle interno: recorre las influencias de cada artista
  for (let j = 0; j < artist.influences.length; j++) {
    const influence = artist.influences[j];

    console.log(`${artist.name} -> ${influence}`);
  }
}

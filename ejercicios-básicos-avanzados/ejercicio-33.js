//? EJERCICIO 33:

/* Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado. */

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  // Verificar si el país existe en el objeto
  if (capitals.hasOwnProperty(country)) {
    return capitals[country];
  } else {
    return `Lo siento, no tengo información sobre la capital de "${country}".`;
  }
}

console.log(getCapital("Spain")); // Madrid
console.log(getCapital("France")); // Paris
console.log(getCapital("Brazil")); // Lo siento, no tengo información sobre la capital de "Brazil".
console.log(getCapital("Germany")); // Berlin
console.log(getCapital("Mexico")); // Lo siento, no tengo información sobre la capital de "Mexico".

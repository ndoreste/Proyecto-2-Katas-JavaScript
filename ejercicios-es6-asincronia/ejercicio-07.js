/* 7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
.filter() y usa .reduce() para conseguir la media de sus .score.
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
array .gender. */

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhalla", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

// 1. Filtrar los videojuegos que contengan 'RPG' en su array de géneros
const rpgGames = videogames.filter((game) =>
  game.genders.find((gender) => gender === "RPG")
);

// 2. Calcular la media de los scores usando reduce
const averageScore = rpgGames.reduce((sum, game, index, array) => {
  sum += game.score;
  // Si es el último elemento, dividimos por la cantidad total
  if (index === array.length - 1) {
    return sum / array.length;
  }
  return sum;
}, 0);

console.log("Juegos RPG:", rpgGames);
console.log("Puntuación media:", averageScore);

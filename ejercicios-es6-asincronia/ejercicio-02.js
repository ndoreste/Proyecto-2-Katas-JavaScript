/* 2.1 Dado el siguiente array, crea una copia usando spread operators. */

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log(pointsListCopy);

/* 2.2 Dado el siguiente objeto, crea una copia usando spread operators. */

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };

console.log(toyCopy);

/* 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos. */

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const allPoints = [...pointsList1, ...pointsList2];

console.log(allPoints);

/* 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators. */

const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const completeToy = { ...toy1, ...toyUpdate };

console.log(completeToy);

/* 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos. */

const pointsList3 = [32, 54, 21, 64, 75, 43];

const newPointsList = [...pointsList3.slice(0, 2), ...pointsList3.slice(3)];

console.log(newPointsList);
console.log(pointsList3);

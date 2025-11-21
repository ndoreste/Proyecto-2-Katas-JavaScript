//? EJERCICIO 35:

/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  // Filtrar todos los mutantes que tienen el poder especificado
  const foundMutants = mutants.filter(
    (mutant) => mutant.power.toLowerCase() === power.toLowerCase()
  );

  // Verificar si se encontraron mutantes
  if (foundMutants.length === 0) {
    return `No se encontró ningún mutante con el poder "${power}".`;
  } else if (foundMutants.length === 1) {
    return `Se encontró 1 mutante con el poder "${power}": ${foundMutants[0].name}.`;
  } else {
    const names = foundMutants.map((mutant) => mutant.name).join(", ");
    return `Se encontraron ${foundMutants.length} mutantes con el poder "${power}": ${names}.`;
  }
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "flying"));
console.log(findMutantByPower(mutants, "REGENERATION"));

// Ejemplo con múltiples mutantes (agregando uno más para demostrar):
const mutantsExtended = [
  ...mutants,
  { name: "Deadpool", power: "regeneration" },
];

console.log(findMutantByPower(mutantsExtended, "regeneration"));
// Output: Se encontraron 2 mutantes con el poder "regeneration": Wolverine, Deadpool.

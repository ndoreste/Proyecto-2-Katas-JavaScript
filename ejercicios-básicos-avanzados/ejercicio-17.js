//? EJERCICIO 17:

/* For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

Puedes usar este objeto: */

const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};
// Usando for...in para iterar sobre las propiedades del objeto
for (let propiedad in alien) {
  console.log(
    `La propiedad ${propiedad} tiene como valor: ${alien[propiedad]}`
  );
}

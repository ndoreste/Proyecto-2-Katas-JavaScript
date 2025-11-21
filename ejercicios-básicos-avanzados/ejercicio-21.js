//? EJERCICIO 21:

/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

// Arrays para almacenar los nombres según la edad
let menoresDeEdad = [];
let mayoresDeEdad = [];

// Bucle para recorrer todos los usuarios
for (let i = 0; i < users.length; i++) {
  // Primera condición: menor de edad (menos de 18 años)
  if (users[i].years < 18) {
    menoresDeEdad.push(users[i].name);
  }
  // Segunda condición: mayor de edad (18 años o más)
  else {
    mayoresDeEdad.push(users[i].name);
  }
}

console.log(`Usuariosd menores de edad: ${menoresDeEdad}`);
console.log(`Usuariosd mayores de edad: ${mayoresDeEdad}`);

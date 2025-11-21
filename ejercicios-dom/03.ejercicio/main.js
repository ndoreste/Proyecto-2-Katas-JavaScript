/* Ejercicio 3
Dado el siguiente HTML: */

/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html. */

// 1.1 Crear lista ul > li con países
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ulCountries = document.createElement("ul");
countries.forEach((country) => {
  const li = document.createElement("li");
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// 1.2 Eliminar elemento con clase .fn-remove-me
const elementToRemove = document.querySelector(".fn-remove-me");
if (elementToRemove) {
  elementToRemove.remove();
}

// 1.3 Crear lista ul > li con coches en el div data-function="printHere"
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");
cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
});
printHereDiv.appendChild(ulCars);

// 1.4 Crear divs con h4 e img
const countriesData = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const containerDiv = document.createElement("div");
containerDiv.id = "countries-container";

countriesData.forEach((country) => {
  const div = document.createElement("div");
  div.className = "country-card";

  const h4 = document.createElement("h4");
  h4.textContent = country.title;

  const img = document.createElement("img");
  img.src = country.imgUrl;
  img.alt = country.title;

  div.appendChild(h4);
  div.appendChild(img);
  containerDiv.appendChild(div);
});

document.body.appendChild(containerDiv);

// 1.5 Crear botón que elimine el último elemento
const btnRemoveLast = document.createElement("button");
btnRemoveLast.textContent = "Eliminar último elemento";
btnRemoveLast.addEventListener("click", () => {
  const container = document.getElementById("countries-container");
  const lastCard = container.lastElementChild;
  if (lastCard) {
    lastCard.remove();
  }
});
document.body.appendChild(btnRemoveLast);

// 1.6 Crear botón en cada div para eliminarse a sí mismo
const countryCards = document.querySelectorAll(".country-card");
countryCards.forEach((card) => {
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Eliminar";
  btnRemove.addEventListener("click", () => {
    card.remove();
  });
  card.appendChild(btnRemove);
});

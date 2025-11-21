/* Ejercicio 2
Dato el siguiente HTML: */

/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here */

//2.1
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

//2.2
const nuevoDiv1 = document.createElement("div1");
const nuevoP = document.createElement("p");
nuevoP.textContent = "Este es un párrafo dentro del div";
nuevoDiv1.appendChild(nuevoP);
document.body.appendChild(nuevoDiv1);

//2.3
const nuevoDiv2 = document.createElement("div2");

for (let i = 1; i <= 6; i++) {
  const nuevoP1 = document.createElement("p");
  nuevoP1.textContent = `Párrafo ${i}`;
  nuevoDiv2.appendChild(nuevoP1);
}

document.body.appendChild(nuevoDiv2);

//2.4
const parrafo2 = document.createElement("parrafo2");
parrafo2.textContent = "Soy Dinámico!";
document.body.appendChild(parrafo2);

//2.5
document.querySelector("h2.fn-insert-here").innerText = "Wubba Lubba dub dub";

//2.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const lista = document.createElement("ul");

for (const app of apps) {
  const item = document.createElement("li");
  item.textContent = app;
  lista.appendChild(item);
}

document.body.appendChild(lista);

//2.7
const elementosAEliminar = document.querySelectorAll(".fn-remove-me");

for (const elemento of elementosAEliminar) {
  elemento.remove();
}

//2.8
const elementosInsert = document.querySelectorAll(".fn-insert-here");

for (const elemento of elementosInsert) {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Voy dentro!";
  elemento.appendChild(nuevoParrafo);
}

/* Ejercicio 4
Dado el siguiente HTML: */

/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

// 1.1 - Evento click en el botón
const btnToClick = document.getElementById("btnToClick");
btnToClick.addEventListener("click", (event) => {
  console.log("=== Evento Click ===");
  console.log("Información del evento:", event);
  console.log("Tipo de evento:", event.type);
  console.log("Elemento clickeado:", event.target);
  console.log("Coordenadas X:", event.clientX, "Y:", event.clientY);
});

// 1.2 - Evento focus en el input con clase 'focus'
const focusInput = document.querySelector(".focus");
focusInput.addEventListener("focus", (event) => {
  console.log("=== Evento Focus ===");
  console.log("Valor del input:", event.target.value);
});

// 1.3 - Evento input en el input con clase 'value'
const valueInput = document.querySelector(".value");
valueInput.addEventListener("input", (event) => {
  console.log("=== Evento Input ===");
  console.log("Valor del input:", event.target.value);
});

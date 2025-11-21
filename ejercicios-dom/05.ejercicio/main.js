/* Ejercicio 5
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Obtener el elemento ul
const albumsList = document.getElementById("albumsList");

// Crear elementos li dinámicamente
albums.forEach((album, index) => {
  const li = document.createElement("li");
  li.className = "album-item";

  li.innerHTML = `
        <div class="album-content">
          <span class="album-number">${index + 1}</span>
          <span class="album-title">${album}</span>
          <span class="album-icon">🤘</span>
        </div>
      `;

  albumsList.appendChild(li);
});

// Actualizar contador
document.getElementById("totalCount").textContent = albums.length;

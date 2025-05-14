let personajes = [];

// Cargar el archivo JSON con todos los personajes
fetch("db.json")
  .then(res => res.json())
  .then(data => {
    personajes = data.personajes; // accede a la propiedad "personajes"
  })
  .catch(err => console.error("Error al cargar personajes:", err));

// Función para seleccionar aleatoriamente
function seleccionarAleatorio(idJugador) {
  if (personajes.length === 0) {
    alert("No se han cargado los personajes.");
    return;
  }

  const personaje = personajes[Math.floor(Math.random() * personajes.length)];
  const card = document.getElementById(idJugador);

  // Imagen
  card.querySelector(".jugador-img").src = personaje.imagen;

  // Nombre, universo y descripción
  card.querySelector(".jugador-nombre").textContent = personaje.nombre;
  card.querySelector(".jugador-clave").textContent = personaje.universo;
  card.querySelector(".jugador-descripcion").textContent = personaje.descripcion;

  // Mostrar ataques
  const listaAtaques = card.querySelector(".jugador-ataques");
  listaAtaques.innerHTML = ""; // Limpiar lista previa

  personaje.ataques.forEach(ataque => {
    const li = document.createElement("li");
    li.textContent =` ${ataque.nombre} - Daño: ${ataque.daño}`;
    listaAtaques.appendChild(li);
  });

}

// Botón Volver
document.getElementById("btn-volver").addEventListener("click", () => {
  window.location.href = "modos.html";
});
document.getElementById("btn-luchar").addEventListener("click", () => {
  window.location.href = "arena.html";
});

function selectMode(modo) {
  const universo = localStorage.getItem("universo") || "naruto";
  localStorage.setItem("modo", modo);
  window.location.href = "seleccionar.html";
}

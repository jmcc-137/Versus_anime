function selectMode(modo) {
  localStorage.setItem("modoCombate", modo);

  // Redirige a la página de combate
  window.location.href = "combate.html"; // Ajusta si el nombre del archivo es otro
}


function iniciarModo(modo) {

  let modoNombre = '';
  switch(modo){
    case 1:
      modoNombre = 'PC vs PC'
      break;
    case 2:
       modoNombre = 'P vs PC'
      break;
    case 3:
       modoNombre = 'P vs P'
      break;
    default:
      console.error("Modo invalido", modo)
  }
  localStorage.setItem('modoSeleccionado', modoNombre)
  window.location.href = "combate.html";
  
}

document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta');
  
    tarjetas.forEach(tarjeta => {
      const btnInfo = tarjeta.querySelector('.btn-info');
      const btnVolver = tarjeta.querySelector('.btn-volver');
  
      btnInfo.addEventListener('click', () => {
        tarjeta.classList.add('volteada');
      });
  
      btnVolver.addEventListener('click', () => {
        tarjeta.classList.remove('volteada');
      });
    });
  });





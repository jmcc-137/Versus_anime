class CombateArena extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      const modo = localStorage.getItem('modoCombate');
      if (!modo) {
        this.shadowRoot.innerHTML = `<p>No se seleccionó ningún modo.</p>`;
        return;
      }
  
      const template = `
        <style>
          .arena { text-align: center; padding: 20px; }
          button { margin: 10px; padding: 10px; font-size: 1rem; }
          .life-bars { display: flex; justify-content: space-around; margin-top: 20px; }
        </style>
        <div class="arena">
          <h2>Modo: ${modo}</h2>
          <div class="seleccion">
            <button id="btnP1">Seleccionar Personaje 1</button>
            ${modo !== 'PC vs PC' ? '<button id="btnP2">Seleccionar Personaje 2</button>' : ''}
          </div>
          <button id="btnLuchar" style="display:none">¡Luchar!</button>
          <div id="combate" class="life-bars" style="display:none">
            <life-bar id="barraP1" nombre="Jugador 1"></life-bar>
            <life-bar id="barraP2" nombre="Jugador 2"></life-bar>
          </div>
        </div>
      `;
  
      this.shadowRoot.innerHTML = template;
  
      let personajes = [];
      try {
        personajes = await this.cargarPersonajes();
        console.log('Personajes cargados:', personajes);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
        this.shadowRoot.innerHTML = `<p>Error al cargar personajes.</p>`;
        return;
      }
  
      const btnP1 = this.shadowRoot.getElementById('btnP1');
      const btnP2 = this.shadowRoot.getElementById('btnP2');
      const btnLuchar = this.shadowRoot.getElementById('btnLuchar');
      const combate = this.shadowRoot.getElementById('combate');
  
      let personaje1 = null;
      let personaje2 = null;
  
      btnP1.addEventListener('click', () => {
        personaje1 = this.seleccionarAleatorio(personajes);
        alert(`Personaje 1: ${personaje1.nombre}`);
        console.log("Personaje 1 seleccionado:", personaje1);
        verificarSeleccion();
      });
  
      if (btnP2) {
        btnP2.addEventListener('click', () => {
          personaje2 = this.seleccionarAleatorio(personajes);
          alert(`Personaje 2: ${personaje2.nombre}`);
          console.log("Personaje 2 seleccionado:", personaje2);
          verificarSeleccion();
        });
      } else {
        // PC vs PC → selecciona automáticamente
        personaje1 = this.seleccionarAleatorio(personajes);
        personaje2 = this.seleccionarAleatorio(personajes);
        console.log("Auto-selección PC vs PC:", personaje1, personaje2);
        alert(`PC1: ${personaje1.nombre}\nPC2: ${personaje2.nombre}`);
        btnLuchar.style.display = 'inline-block';
      }
  
      const verificarSeleccion = () => {
        if (personaje1 && personaje2) {
          btnLuchar.style.display = 'inline-block';
        }
      };
  
      btnLuchar.addEventListener('click', () => {
        btnLuchar.style.display = 'none';
        combate.style.display = 'flex';
        this.iniciarCombate(modo, personaje1, personaje2);
      });
    }
  
    async cargarPersonajes() {
      const res = await fetch('http://localhost:3000/personajes');
      if (!res.ok) throw new Error("No se pudo obtener personajes");
      return await res.json();
    }
  
    seleccionarAleatorio(lista) {
      if (!Array.isArray(lista) || lista.length === 0) return null;
      const seleccionado = lista[Math.floor(Math.random() * lista.length)];
      return seleccionado;
    }
  
    iniciarCombate(modo, p1, p2) {
      const barra1 = this.shadowRoot.getElementById('barraP1');
      const barra2 = this.shadowRoot.getElementById('barraP2');
  
      barra1.setAttribute('nombre', p1.nombre);
      barra2.setAttribute('nombre', p2.nombre);
  
      if (modo === 'PC vs PC' || modo === 'P vs PC') {
        this.autoLuchar(barra1, barra2);
      } else if (modo === 'P vs P') {
        alert("Modo P vs P iniciado. Lógica de turnos pendiente.");
      }
    }
  
    autoLuchar(barra1, barra2) {
      const interval = setInterval(() => {
        const daño1 = Math.floor(Math.random() * 15) + 1;
        const daño2 = Math.floor(Math.random() * 15) + 1;
        barra1.restarVida(daño2);
        barra2.restarVida(daño1);
        console.log(`P1 recibe ${daño2}, P2 recibe ${daño1}`);
  
        if (barra1.vida <= 0 || barra2.vida <= 0) {
          clearInterval(interval);
          const ganador = barra1.vida <= 0 ? barra2.getAttribute('nombre') : barra1.getAttribute('nombre');
          alert(`¡Ganador: ${ganador}!`);
        }
      }, 1000);
    }
  }
  
  customElements.define('combate-arena', CombateArena);
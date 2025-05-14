
  let jugador1 =null; 
  let jugador2 = null;
  let turno = 1;
  let personajes = []
  async function seleccionarAleatorio(jugadorId) { 
    try {
      const res = await fetch("http://localhost:3000/personajes");
      personajes = await res.json();
      const Aleatorio = personajes[Math.floor(Math.random() * personajes.length)]
    if(jugadorId === "jugador1"){
      jugador1 = Aleatorio
      document.getElementById("nombre-jugador1").textContent = Aleatorio.nombre
      document.getElementById("nombre-jugador1").src = Aleatorio.imagen;

    } else if (jugadorId === "jugador2"){
      jugador2 = Aleatorio
      document.getElementById("nombre-jugador2").textContent = Aleatorio.nombre
      document.getElementById("nombre-jugador2").src = Aleatorio.imagen;

    }
  } catch (error){
    console.error("Error al seleccionar personaje",error)
  }

  } 

   
  

  function iniciarModo(modo){
    document.getElementById("zona-combate").style.display = "block";
    if( !jugador1 || !jugador2 ){
      Swal.fire("Seleccione ambos personajes antes de iniciar el combate")
      return
    }
    if(modo === 1){
        
        prepararArena()
        combateAleatorio();
    }
    if(modo === 2){
        
        prepararArena()
        combateVsCpu()
    }
    if(modo === 3){
        
        prepararArena()
        combateDosJugadores()
    }
  }


  function prepararArena() {
    // Actualizar nombres
    document.getElementById("nombre-jugador1").textContent = jugador1.nombre;
    document.getElementById("nombre-jugador2").textContent = jugador2.nombre;
  
    // Resetear vida
    document.getElementById("vida-jugador1").setVida(100);
    document.getElementById("vida-jugador2").setVida(100);
  }
  
  // Modo 1: Aleatorio Automático
  function combateAleatorio() {
    const intervalo = setInterval(() => {
      let ataque1 = randomAtaque(jugador1);
      aplicarAtaque("jugador2", ataque1);
      if (vida("jugador2") <= 0) return terminarCombate(jugador1, intervalo);
  
      let ataque2 = randomAtaque(jugador2);
      aplicarAtaque("jugador1", ataque2);
      if (vida("jugador1") <= 0) return terminarCombate(jugador2, intervalo);
    }, 2000);
  }
  
  // Modo 2: Usuario vs CPU
  function combateVsCpu() {
    mostrarBotonesAtaque("jugador1", jugador1.ataques, (indice) => {
      const ataque = jugador1.ataques[indice];
      aplicarAtaque("jugador2", ataque);
      if (vida("jugador2") <= 0) return terminarCombate(jugador1);
  
      setTimeout(() => {
        const ataqueCpu = randomAtaque(jugador2);
        aplicarAtaque("jugador1", ataqueCpu);
        if (vida("jugador1") <= 0) return terminarCombate(jugador2);
      }, 1000);
    });
  }
  
  // Modo 3: 2 jugadores por turnos
  function combateDosJugadores() {
    actualizarTurno();
    mostrarBotonesAtaque("jugador1", jugador1.ataques, manejarAtaqueTurnos);
  }
  
  function manejarAtaqueTurnos(indice) {
    const atacante = turno === 1 ? jugador1 : jugador2;
    const defensorId = turno === 1 ? "jugador2" : "jugador1";
    aplicarAtaque(defensorId, atacante.ataques[indice]);
  
    if (vida(defensorId) <= 0) return terminarCombate(atacante);
  
    turno = turno === 1 ? 2 : 1;
    actualizarTurno();

    const id = turno === 1 ? "jugador1" : "jugador2"
    const pj = turno === 1 ? jugador1:jugador2
    mostrarBotonesAtaque(id, pj.ataques,manejarAtaqueTurnos)
  }
  
  // Helpers
  function mostrarBotonesAtaque(idJugador, ataques, callback) {
    const otroId = idJugador === "jugador1" ? "jugador2" : "jugador1";


    const contenedor = document.getElementById(`ataques-${idJugador}`);
    contenedor.innerHTML = ataques.map((atk, i) => `
      <button onclick="realizarAtaque(${i})">${atk.nombre}</button>
    `).join("");
  
     document.getElementById(`ataques-${otroId}`).innerHTML = "";

     window.realizarAtaque = callback;
  }
  
  function aplicarAtaque(defensorId, ataque) {
    const vidaActual = vida(defensorId);
    document.getElementById(`vida-${defensorId}`).setVida(vidaActual - ataque.daño);
    console.log(`${ataque.nombre} aplicado a ${defensorId}`);
  }
  
  function vida(jugadorId) {
    return document.getElementById(`vida-${jugadorId}`).getVida();
  }
  
  function randomAtaque(personaje) {
    return personaje.ataques[Math.floor(Math.random() * personaje.ataques.length)];
  }
  
  function terminarCombate(ganador, intervalo = null) {
    if (intervalo) clearInterval(intervalo);
    Swal.fire({
      title: `¡${ganador.nombre} gana!`,
      icon: 'success'
    });
    // Deshabilita botones
    document.getElementById("ataques-jugador1").innerHTML = "";
    document.getElementById("ataques-jugador2").innerHTML = "";
  }
  
  function actualizarTurno() {
    const nombre = turno === 1 ? jugador1.nombre : jugador2.nombre;
    document.getElementById("turno-info").textContent = `Turno de: ${nombre}`;
  }
  
  
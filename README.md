# Anime Versus App

Una aplicación web interactiva donde los universos de **Dragon Ball**, **One Piece** y **Naruto Shippuden** se enfrentan en una arena de combate. El usuario podrá explorar personajes de cada universo, ver su información, y enfrentarlos en distintos modos de batalla.

## 🛠 Tecnologías utilizadas

- HTML5
- CSS
- JavaScript
- JSON Server 

---

## 📁 Estructura del Proyecto

```plaintext
/

├── index.html
├── dragonball.html         
├── onepiece.html          
├── naruto.html             
├── arena.html              
├── combate.html    
├── store/
│   ├── img/            
│   ├── video/                              
├── css/
│   └── styles.css          
├── js/
│   ├── main.js             
│   ├── cards.js            
│   ├── arena.js           
├── db.json              


🌐 Páginas y Funcionalidades
1. 🏠 Página de Inicio (index.html)

    Bienvenida y descripción de la app.

    Barra de navegación con enlaces a:

        Home (inicio)

        Dragon Ball

        One Piece

        Naruto Shippuden

        Arena de Combate

2. 📖 Secciones de Personajes

    Cada universo (Dragon Ball, One Piece, Naruto Shippuden) tiene su propia página.

    En cada sección se muestran cartas de personajes obtenidas desde json-server.

    Las cartas tienen efecto de volteo al hacer clic, mostrando:

        Nombre

        Descripción

        Imagen del personaje

3. ⚔️ Arena de Combate (arena.html)

Contará con 3 modos de juego:
3.1. Modo Aleatorio

    La aplicación selecciona 2 personajes al azar y los enfrenta automáticamente.

    El sistema elige ataques aleatorios hasta que uno de los personajes quede sin vida.

3.2. Modo Manual (1 Jugador)

    El usuario escoge su personaje y su oponente.

    El usuario selecciona ataques, mientras el oponente responde con ataques automáticos.

    Se simula un combate por turnos.

3.3. Modo 2 Jugadores

    Cada jugador selecciona un personaje.

    El combate se realiza por turnos, donde cada jugador elige ataques manualmente.

4. 🥊 Combate (combate.html)

    Se mostrará el combate entre los personajes seleccionados.

    Cada uno tendrá:

        Barra de vida dinámica

        Animación o clip del ataque tras cada golpe

    El daño se aplicará dependiendo del ataque.

    Al finalizar el combate:

        Se mostrará una ventana emergente con el resultado del enfrentamiento (ganador y perdedor).

📦 JSON Server

La información de los personajes se guarda en un archivo db.json:

{
    "personajes": [
      {
        "id": 1,
        "nombre": "Goku",
        "universo": "Dragon Ball",
        "descripcion": "El Saiyajin más poderoso...",
        "imagen": "goku.png",
        "ataques": [
            {
            "nombre": "Kamehameha",
            "daño": 25
            },
            {
            "nombre": "Genki Dama",
            "daño": 40
            },
            {
            "nombre": "Golpe Instantáneo",
            "daño": 20
            },
            {
            "nombre": "Kaio-Ken x10",
            "daño": 30
            }
  ]

      }
    ]
    ...
  }


✨ Autores

Proyecto creado por (nombres a colocar) como práctica de desarrollo web con HTML, CSS y JavaScript.

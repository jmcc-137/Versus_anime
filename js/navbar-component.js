class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})

        const currentPath = window.location.pathname;


        this.shadowRoot.innerHTML = `
       <style>
       @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');


        .bangers-regular {
          font-family: "Bangers", system-ui;
          font-weight: 400;
          font-style: normal;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Bangers", system-ui;
        }
       .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #222;
          color: white;
          padding: 10px 20px;
          font-family: sans-serif;
          z-index: 1000;
        }
        @keyframes girar {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        .logo img {
          height: 50px;
          border-radius: 50%;
          animation: girar 3s linear infinite;
          transform-style:preserve-3d;
          backface-visibility:hidden;
        }

        .logo img:hover {
          transform: rotate(360deg);
        }

        .menu {
          display: flex;
          gap: 10px;
        }

        .menu a {
          color: #ccc;
          text-decoration: none;
          font-weight: bold;
          padding: 8px 12px;
          border-radius: 4px;
          transition: background 0.3s;
          cursor: pointer;
        }

        .menu a:hover {
          background: #444;
        }

        .menu a.active {
          background: #00e676;
          color: black;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
          margin:25px;
        }

        .hamburger div {
          width: 30px;
          height: 3px;
          background-color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .menu {
            display: none;
            position: absolute;
            top: 70px;
            right: 20px;
            background: #222;
            flex-direction: column;
            width: 150px;
            border: 1px solid #444;
            padding: 10px;
          }

          .menu.show {
            display: flex;
          }

          .hamburger {
            display: flex;
          }
        }
      </style>

      <div class="navbar">

      <div class="logo">
          <img src="/store/img/Home.jpeg" alt="Logo">
        </div>

        <div class="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div class="menu">
          <a href="/index.html" class="${currentPath.endsWith('index.html') || currentPath === '/' ? 'active' : ''}">Home</a>
          <a href="/dragonball.html" class="${currentPath.includes('dragonball') ? 'active' : ''}">Dragon Ball</a>
          <a href="/naruto.html" class="${currentPath.includes('naruto') ? 'active' : ''}">Naruto</a>
          <a href="/arena.html" class="${currentPath.includes('arena') ? 'active' : ''}">Arena</a>
        </div>
        
      </div>
        `
    }

    connectedCallback() {
      const links = this.shadowRoot.querySelectorAll('.menu a');
      const hamburger = this.shadowRoot.querySelector('.hamburger');
      const menu = this.shadowRoot.querySelector('.menu');
  
      // Navegación con fade
      links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const targetUrl = link.getAttribute('href');
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 500);
        });
      });
  
      // Hamburguesa toggle
      hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
      });
    }
  }
  
  customElements.define('nav-bar', NavBar);
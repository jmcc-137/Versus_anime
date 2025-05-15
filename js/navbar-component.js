class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})

        const currentPath = window.location.pathname;


        this.shadowRoot.innerHTML = `
       <style>
       .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 99%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #222;
          color: white;
          padding: 10px;
          font-family: sans-serif;
          z-index: 100; /* Asegura que esté por encima del contenido */
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

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .logo img {
          height: 50px;
          border-radius: 50%;
        }

        body.fade-out {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
      </style>

      <div class="navbar">

      <div class="logo">
          <img src="/store/img/Home.jpeg" alt="Logo">
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

    connectedCallback(){
      const links = this.shadowRoot.querySelectorAll('.menu a')
      links.forEach(link =>{
        link.addEventListener('click', e =>{
          e.preventDefault();
          const targetUrl=link.getAttribute('href')
          document.body.classList.add('fade-out')

          setTimeout(() =>{
            window.location.href = targetUrl;
          },500);
        })
      })
    }
}
customElements.define('nav-bar', NavBar)
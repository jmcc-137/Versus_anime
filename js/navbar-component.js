class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})

        const currentPath = window.location.pathname;


        this.shadowRoot.innerHTML = `
       <style>
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: #222;
          color: white;
          padding: 20px;
          font-family: sans-serif;
          z-index:10;
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
        }
      </style>

      <div class="navbar">

      <div class="logo">
          <img src="/img/logo.png" alt="Logo">
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
}
customElements.define('nav-bar', NavBar)
class LifeBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});

        const name = this.getAttribute('name') || 'Personaje';
        const value = parseInt(this.getAttribute('value')) || 100;

        this.shadowRoot.innerHTML = `
        <style>
        .container {
          margin: 10px 0;
          font-family: sans-serif;
        }
        .label {
          margin-bottom: 5px;
          font-weight: bold;
        }
        .bar {
          width: 100%;
          height: 20px;
          background: #ddd;
          border-radius: 4px;
          overflow: hidden;
        }
        .fill {
          height: 100%;
          background: linear-gradient(to right, #00e676, #76ff03);
          width: ${value}%;
          transition: width 0.3s ease;
        }
      </style>
      <div class="container">
        <div class="label">${name}: <span class="vida-text">${value}</span>/100</div>
        <div class="bar">
          <div class="fill"></div>
        </div>
      </div>
    `;
        
    }
     setVida(nuevaVida) {
        const fill = this.shadowRoot.querySelector('.fill')
        const text = this.shadowRoot.querySelector('.vida-text')
        const vida = Math.max(0, Math.min(100, nuevaVida));

        fill.style.width = `${vida}%`;
        text.textContent = vida;
     }
     getVida() {
        return parseInt(this.shadowRoot.querySelector('.vida-text').textContent);
     }
}
customElements.define('life-bar',LifeBar)
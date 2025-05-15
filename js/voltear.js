document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const personajes = [
        { nombre: "Son Goku", info: "Es un guerrero saiyajin criado en la Tierra, conocido por su espíritu puro, su amor por la pelea y su deseo constante de superarse. Posee habilidades sobrehumanas, como fuerza extrema, velocidad, y la capacidad de transformarse en poderosos estados como el Super Saiyajin. ", transformaciones: 10 },
        { nombre: "Vegeta", info: "príncipe de la raza saiyajin. Al principio es un enemigo de Goku, pero con el tiempo se convierte en su aliado y rival. Es orgulloso, determinado y extremadamente competitivo, con un fuerte deseo de superar a Goku. Aunque tiene un pasado como villano, evoluciona hacia un héroe dispuesto a proteger a su familia y al universo.", transformaciones: 8 },
        { nombre: "Son Gohan", info: "A diferencia de su padre, no le apasionan las peleas, pero posee un potencial de poder enorme, especialmente cuando protege a sus seres queridos. Es inteligente, amable y equilibrado entre la vida de guerrero y la vida académica. Su transformación más icónica es cuando alcanza el nivel de Super Saiyajin 2 durante la saga de Cell.", transformaciones: 7 },
        { nombre: "Trunks", info: "Existen dos versiones destacadas: Trunks del futuro, un joven serio y valiente que viaja en el tiempo para advertir sobre amenazas, y Trunks niño, más juguetón y travieso, amigo cercano de Goten. Es un guerrero talentoso con gran potencial, capaz de transformarse en Super Saiyajin desde joven. Combina la fuerza saiyajin con la inteligencia de su madre.", transformaciones: 3 },
        { nombre: "Broly", info: "es un guerrero de gran fuerza innata y carácter tranquilo, pero pierde el control cuando se enfurece, desatando un poder abrumador. Criado en un ambiente hostil, tiene una historia trágica marcada por el exilio y el abuso. Su transformación en Super Saiyajin lo convierte en uno de los más fuertes del universo.", transformaciones: 4 },
    ];

    tarjetas.forEach((tarjeta, index) => {
        const button = tarjeta.querySelector('button');
        const imagenOriginal = tarjeta.querySelector('img')?.src; // <-- Guardar src antes

        button.addEventListener('click', () => {
            tarjeta.classList.toggle('volteada');

            if (tarjeta.classList.contains('volteada')) {
                tarjeta.innerHTML = `
                    <div class="tarjeta-posterior">
                        <h3>${personajes[index].nombre}</h3>
                        <p>${personajes[index].info}</p>
                        <p>Transformaciones: ${personajes[index].transformaciones}</p>
                        <button class="volver">Volver</button>
                    </div>
                `;

                tarjeta.querySelector('.volver').addEventListener('click', () => {
                    tarjeta.classList.remove('volteada');

                    tarjeta.innerHTML = `
                        <div class="tarjeta-frontal">
                            <img src="${imagenOriginal}" alt="${personajes[index].nombre}" />
                            <h3>${personajes[index].nombre}</h3>
                            <button>Información</button>
                        </div>
                    `;

                    tarjeta.querySelector('button').addEventListener('click', () => button.click());
                });
            }
        });
    });
});





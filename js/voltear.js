document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const personajes = [
        { nombre: "Son Goku", info: "El Saiyan más poderoso del universo.", transformaciones: 7 },
        { nombre: "Vegeta", info: "Príncipe de los Saiyans y rival de Goku.", transformaciones: 6 },
        { nombre: "Son Gohan", info: "Hijo de Goku, defensor de la Tierra.", transformaciones: 5 },
        { nombre: "Trunks", info: "Hijo de Vegeta y Bulma, viajero del tiempo.", transformaciones: 4 },
        { nombre: "Broly", info: "El legendario Super Saiyan.", transformaciones: 3 },
    ];
    tarjetas.forEach((tarjeta, index) => {
        const button = tarjeta.querySelector('button');
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
                            <img src="${tarjeta.querySelector('img')?.src || ''}" alt="${personajes[index].nombre}" />
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




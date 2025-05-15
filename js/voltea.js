document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const personajes = [
        { nombre: "Naruto", info: "Es un joven ninja enérgico, valiente y perseverante, que sueña con convertirse en Hokage. A pesar de una infancia solitaria marcada por el rechazo, nunca se rinde y siempre protege a sus amigos. Posee el poder del Zorro de Nueve Colas (Kurama) dentro de él y destaca por su fuerte voluntad y capacidad para inspirar a los demás.", transformaciones: 6 },
        { nombre: "Sasuke", info: "es un prodigioso ninja del clan Uchiha, conocido por su habilidad en el combate y su deseo de vengar la muerte de su clan a manos de su hermano, Itachi.", transformaciones: 6 },
        { nombre: "Itachi", info: "es un ninja prodigioso y miembro del clan Uchiha, conocido por su inteligencia y habilidades en el combate.", transformaciones: 3 },
        { nombre: "Kakashi", info: "es un ninja talentoso y líder del Equipo 7 en Naruto, conocido por su inteligencia, habilidades tácticas y su Sharingan (que obtuvo de un amigo caído, Obito Uchiha).", transformaciones: 4 },
        { nombre: "Obito", info: "fue un ninja del clan Uchiha que soñaba con convertirse en Hokage, pero tras una tragedia que lo marcó profundamente, se convirtió en uno de los principales antagonistas de Naruto Shippuden.", transformaciones: 4 },
    ];
    tarjetas.forEach((tarjeta, index) => {
        const button = tarjeta.querySelector('button');
        const imagenOriginal = tarjeta.querySelector('img')?.src;

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

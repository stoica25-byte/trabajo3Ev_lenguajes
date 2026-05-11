// Manipulación del DOM
function Dom_Equipos(listaEquipos) {

    const elementos_equipos = document.getElementById('contenedor-equipos');

    elementos_equipos.textContent = '';

    listaEquipos.forEach(element => {
        const nuevoArticulo = document.createElement('article');
        nuevoArticulo.classList.add('tarjeta-equipo');


        const titulo = document.createElement('h3');
        titulo.textContent = equipo.nombre_equipo;

        const pCiudad = document.createElement('p');
        pCiudad.textContent = 'Ciudad: ' + equipo.ciudad;

        const pEstadio = document.createElement('p');
        pEstadio.textContent = 'Estadio: ' + equipo.estadio;

        const pCapacidad = document.createElement('p');
        pCapacidad.textContent = 'Capacidad: ' + equipo.capacidad + ' espectadores';

        nuevoArticulo.appendChild(titulo);
        nuevoArticulo.appendChild(pCiudad);
        nuevoArticulo.appendChild(pEstadio);
        nuevoArticulo.appendChild(pCapacidad);

        elementos_equipos.appendChild(nuevoArticulo);
    });

}

// js/ui.js

function Dom_Jugadores(listaJugadores) {
    const contenedor = document.getElementById('contenedor-jugadores');
    contenedor.textContent = ''; 

    listaJugadores.forEach(jugador => {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta-jugador');

        const nombre = document.createElement('h4');
        nombre.textContent = jugador.nombre;

        const info = document.createElement('p');
        info.textContent = 'Dorsal: ' + jugador.dorsal + ' | Equipo: ' + jugador.equipo;

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(info);
        contenedor.appendChild(tarjeta);
    });
}




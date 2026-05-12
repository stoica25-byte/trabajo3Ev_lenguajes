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

function Dom_Partidos(listaPartidos){
    const elementos_partidos = document.getElementById('lista-partidos');
    elementos_partidos.textContent = '';

    listaPartidos.forEach(partido =>{
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta-partido');

        const encabezado = document.createElement('h4');
        encabezado.textContent = 'Jornada ' + partido.jornada + ' | Fecha: ' + partido.fecha;

        const marcador = document.createElement('p');
        marcador.textContent = partido.equipo_local + ' ' + partido.goles_local + ' - ' + partido.goles_visitante + ' ' + partido.equipo_visitante;

        tarjeta.appendChild(encabezado);
        tarjeta.appendChild(marcador);

        elementos_partidos.appendChild(tarjeta);
    });
}

function Dom_Estadisticas(listaEstadisticas){
const elementos_estadisticas = document.getElementById('grafica-estadisticas');
elementos_estadisticas.textContent = '';

let maxGoles = 0; 
    listaEstadisticas.forEach(jugador => {
        if(jugador.goles_totales > maxGoles){
            maxGoles= jugador.goles_totales;
        };

    });

    listaEstadisticas.forEach(jugador => {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta-estadistica');

       const infoTexto = document.createElement('p');
        infoTexto.textContent = jugador.jugador + ' (' + jugador.equipo + ') - ' + jugador.goles_totales + ' goles';

        

        const barraEstadisticas = document.createElement('meter');
        barraEstadisticas.min = 0;
        barraEstadisticas.max = maxGoles;
        barraEstadisticas.value = jugador.goles_totales;

        tarjeta.appendChild(infoTexto);
        tarjeta.appendChild(barraEstadisticas);

        elementos_estadisticas.appendChild(tarjeta);

    })

}



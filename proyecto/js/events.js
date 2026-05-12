// js/events.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ESTADO INICIAL (Al abrir la página) ---
    const secciones = document.querySelectorAll('main section');

    // Apagamos todas las secciones
    secciones.forEach(sec => {
        sec.style.display = 'none';
    });

    // Encendemos solo la sección principal (Equipos)
    document.getElementById('seccion-equipos').style.display = 'block';

    // Pintamos los datos de los equipos por defecto
    Dom_Equipos(datosEquipos);


    // GESTIÓN DEL MENÚ LATERAL //
    const botonesMenu = document.querySelectorAll('#navegador-lateral button');
    
    botonesMenu.forEach(boton => {
        boton.addEventListener('click', () => {
            
            // a) Leemos a dónde quiere ir el usuario
            const destino = boton.dataset.target;

            // b) Ocultamos todas las secciones
            secciones.forEach(sec => {
                sec.style.display = 'none';
            });

            // c) Mostramos la sección correcta
            const seccionDestino = document.getElementById(destino);
            seccionDestino.style.display = 'block';

            // d) Pintamos los datos correspondientes según la sección
            if (destino === 'seccion-equipos') {
                Dom_Equipos(datosEquipos);
            }
            else if (destino === 'seccion-jugadores') {
                Dom_Jugadores(datosJugadores);
            }
            else if (destino === 'seccion-partidos') {
                Dom_Partidos(datosPartidos);
            }
            else if (destino === 'seccion-estadisticas') {
                Dom_Estadisticas(datosEstadisticas);
            }
            
        });
    });

    //PANEL DE DETALLES//
    
    const contenedorEquipos = document.getElementById('contenedor-equipos');

    contenedorEquipos.addEventListener('click', (evento) => {
        const tarjetaClicada = evento.target.closest('.tarjeta-equipo');

        if (tarjetaClicada) {
            const nombreDelEquipo = tarjetaClicada.querySelector('h3').textContent;

            // ATENCIÓN AQUÍ: Usamos equipo.equipo en lugar de equipo.nombre_equipo
            const equipoEncontrado = datosAgrupacion.find(equipo => equipo.equipo === nombreDelEquipo);

            if (equipoEncontrado) {
                Dom_Panel_Detalles(equipoEncontrado);
            }
        }
    });

    //FILTRO EQUIPOS //
    const buscador = document.querySelector('#filtro-equipo-nombre');
    buscador.addEventListener('input', (evento) =>{

        const busqueda = evento.target.value.toLowerCase();

        const equipos = datosEquipos.filter(equipo =>{

            const nombre = equipo.nombre_equipo.toLowerCase();
            const ciudad = equipo.ciudad.toLowerCase();

            return nombre.includes(busqueda) || ciudad.includes(busqueda);
        });

        Dom_Equipos(equipos);
    });

});
// Carga de archivos JSON
const datosEquipos = [
    {
        "id_equipo": 1,
        "nombre_equipo": "Real Madrid CF",
        "ciudad": "Madrid",
        "estadio": "Santiago Bernabéu",
        "capacidad": 81044
    },
    {
        "id_equipo": 2,
        "nombre_equipo": "FC Barcelona",
        "ciudad": "Barcelona",
        "estadio": "Estadi Olímpic Lluís Companys",
        "capacidad": 55926
    },
    {
        "id_equipo": 3,
        "nombre_equipo": "Atlético de Madrid",
        "ciudad": "Madrid",
        "estadio": "Cívitas Metropolitano",
        "capacidad": 70460
    },
    {
        "id_equipo": 4,
        "nombre_equipo": "Real Sociedad",
        "ciudad": "San Sebastián",
        "estadio": "Reale Arena",
        "capacidad": 39500
    },
    {
        "id_equipo": 5,
        "nombre_equipo": "Athletic Club",
        "ciudad": "Bilbao",
        "estadio": "San Mamés",
        "capacidad": 53289
    },
    {
        "id_equipo": 6,
        "nombre_equipo": "Girona FC",
        "ciudad": "Girona",
        "estadio": "Montilivi",
        "capacidad": 14624
    },
    {
        "id_equipo": 7,
        "nombre_equipo": "Real Betis",
        "ciudad": "Sevilla",
        "estadio": "Benito Villamarín",
        "capacidad": 60721
    },
    {
        "id_equipo": 8,
        "nombre_equipo": "Sevilla FC",
        "ciudad": "Sevilla",
        "estadio": "Ramón Sánchez-Pizjuán",
        "capacidad": 43883
    },
    {
        "id_equipo": 9,
        "nombre_equipo": "Valencia CF",
        "ciudad": "Valencia",
        "estadio": "Mestalla",
        "capacidad": 49430
    },
    {
        "id_equipo": 10,
        "nombre_equipo": "Villarreal CF",
        "ciudad": "Villarreal",
        "estadio": "Estadio de la Cerámica",
        "capacidad": 23000
    }
]

const datosJugadores = [
    {
        "nombre": "Vinícius Júnior",
        "dorsal": 7,
        "equipo": "Real Madrid CF"
    },
    {
        "nombre": "Lamine Yamal",
        "dorsal": 27,
        "equipo": "FC Barcelona"
    },
    {
        "nombre": "Robert Lewandowski",
        "dorsal": 9,
        "equipo": "FC Barcelona"
    },
    {
        "nombre": "Antoine Griezmann",
        "dorsal": 7,
        "equipo": "Atlético de Madrid"
    },
    {
        "nombre": "Takefusa Kubo",
        "dorsal": 14,
        "equipo": "Real Sociedad"
    },
    {
        "nombre": "Nico Williams",
        "dorsal": 11,
        "equipo": "Athletic Club"
    },
    {
        "nombre": "Artem Dovbyk",
        "dorsal": 9,
        "equipo": "Girona FC"
    },
    {
        "nombre": "Gerard Moreno",
        "dorsal": 7,
        "equipo": "Villarreal CF"
    }
]

const datosPartidos =[

    {
        "jornada": 1,
        "fecha": "2024-02-10",
        "equipo_local": "Real Madrid CF",
        "goles_local": 4,
        "goles_visitante": 0,
        "equipo_visitante": "Girona FC"
    },


    {
        "jornada": 1,
        "fecha": "2024-02-11",
        "equipo_local": "FC Barcelona",
        "goles_local": 1,
        "goles_visitante": 0,
        "equipo_visitante": "Sevilla FC"
    },


    {
        "jornada": 2,
        "fecha": "2024-02-17",
        "equipo_local": "Atlético de Madrid",
        "goles_local": 5,
        "goles_visitante": 0,
        "equipo_visitante": "Villarreal CF"
    },
    
    
    {
        "jornada": 2,
        "fecha": "2024-02-18",
        "equipo_local": "Valencia CF",
        "goles_local": 2,
        "goles_visitante": 2,
        "equipo_visitante": "Real Madrid CF"
    }
    
]

const datosEstadisticas = [
    {
        "jugador": "Jude Bellingham",
        "equipo": "Real Madrid CF",
        "goles_totales": 2
    },
    {
        "jugador": "Vinícius Júnior",
        "equipo": "Real Madrid CF",
        "goles_totales": 1
    },
    {
        "jugador": "Robert Lewandowski",
        "equipo": "FC Barcelona",
        "goles_totales": 1
    },
    {
        "jugador": "Antoine Griezmann",
        "equipo": "Atlético de Madrid",
        "goles_totales": 2
    }
]

const datosAgrupacion = [
    {
        "equipo": "Real Madrid CF",
        "fundacion": 1902,
        "jugadores": [
            {
                "nombre": "Vinícius Júnior",
                "posicion": "Delantero",
                "dorsal": 7
            },
            {
                "nombre": "Jude Bellingham",
                "posicion": "Centrocampista",
                "dorsal": 5
            }
        ]
    },
    {
        "equipo": "FC Barcelona",
        "fundacion": 1899,
        "jugadores": [
            {
                "nombre": "Lamine Yamal",
                "posicion": "Delantero",
                "dorsal": 27
            },
            {
                "nombre": "Robert Lewandowski",
                "posicion": "Delantero",
                "dorsal": 9
            }
        ]
    },
    {
        "equipo": "Atlético de Madrid",
        "fundacion": 1903,
        "jugadores": [
            {
                "nombre": "Antoine Griezmann",
                "posicion": "Delantero",
                "dorsal": 7
            },
            {
                "nombre": "Koke Resurrección",
                "posicion": "Centrocampista",
                "dorsal": 6
            }
        ]
    },
    {
        "equipo": "Real Sociedad",
        "fundacion": 1909,
        "jugadores": [
            {
                "nombre": "Takefusa Kubo",
                "posicion": "Delantero",
                "dorsal": 14
            }
        ]
    },
    {
        "equipo": "Athletic Club",
        "fundacion": 1898,
        "jugadores": [
            {
                "nombre": "Nico Williams",
                "posicion": "Delantero",
                "dorsal": 11
            }
        ]
    },
    {
        "equipo": "Girona FC",
        "fundacion": 1930,
        "jugadores": [
            {
                "nombre": "Artem Dovbyk",
                "posicion": "Delantero",
                "dorsal": 9
            }
        ]
    },
    {
        "equipo": "Real Betis",
        "fundacion": 1907,
        "jugadores": [
            {
                "nombre": "Isco Alarcón",
                "posicion": "Centrocampista",
                "dorsal": 22
            }
        ]
    },
    {
        "equipo": "Sevilla FC",
        "fundacion": 1890,
        "jugadores": [
            {
                "nombre": "Jesús Navas",
                "posicion": "Defensa",
                "dorsal": 16
            }
        ]
    },
    {
        "equipo": "Valencia CF",
        "fundacion": 1919,
        "jugadores": null
    },
    {
        "equipo": "Villarreal CF",
        "fundacion": 1923,
        "jugadores": [
            {
                "nombre": "Gerard Moreno",
                "posicion": "Delantero",
                "dorsal": 7
            }
        ]
    }
]



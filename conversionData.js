// Base de datos de factores de conversión según las tablas adjuntas
const conversionData = {
    angulo_plano: {
        units: {
            "° (Grado)": 1.745e-2,
            "' (Minuto)": 2.909e-4,
            "\" (Segundo)": 4.848e-6,
            "RADIAN": 1,
            "rev (Revolución)": 6.283
        }
    },
    longitud: {
        units: {
            "cm (Centímetro)": 0.01,
            "m (Metro)": 1,
            "km (Kilómetro)": 1000,
            "in (Pulgada)": 0.0254,
            "ft (Pie)": 0.3048,
            "mi (Milla)": 1609,
            "angström": 1e-10,
            "milla náutica": 1852,
            "fermi": 1e-15,
            "año-luz": 9.460e15,
            "parsec": 3.084e16,
            "fathom": 1.8288,
            "radio de Bohr": 5.292e-11,
            "yarda": 0.9144,
            "rod": 5.0292,
            "mil": 2.54e-5,
            "nm (Nanómetro)": 1e-9
        }
    },
    area: {
        units: {
            "m² (Metro cuadrado)": 1,
            "cm²": 1e-4,
            "ft²": 9.290e-2,
            "in²": 6.452e-4,
            "milla cuadrada": 2.5899e6,
            "barnio": 1e-28,
            "acre": 4046.86,
            "hectárea": 10000
        }
    },
    volumen: {
        units: {
            "m³ (Metro cúbico)": 1,
            "cm³": 1e-6,
            "L (Litro)": 0.001,
            "ft³": 2.832e-2,
            "in³": 1.639e-5,
            "galón fluido U.S.": 3.7854e-3,
            "galón imperial británico": 4.5460e-3
        }
    },
    masa: {
        units: {
            "g (Gramo)": 0.001,
            "kg (Kilogramo)": 1,
            "slug": 14.59,
            "u (Unidad de masa atómica)": 1.661e-27,
            "oz (Onza)": 2.835e-2,
            "lb (Libra)": 0.4536,
            "ton (Tonelada corta)": 907.2,
            "tonelada métrica": 1000
        }
    },
    densidad: {
        units: {
            "slug/ft³": 515.4,
            "kg/m³": 1,
            "g/cm³": 1000,
            "lb/ft³": 16.02,
            "lb/in³": 2.768e4
        }
    },
    tiempo: {
        units: {
            "y (Año)": 3.156e7,
            "d (Día)": 8.640e4,
            "h (Hora)": 3600,
            "min (Minuto)": 60,
            "s (Segundo)": 1
        }
    },
    velocidad: {
        units: {
            "ft/s (Pie/s)": 0.3048,
            "km/h": 0.2778,
            "m/s (Metro/segundo)": 1,
            "mi/h (Milla/h)": 0.4470,
            "cm/s": 0.01,
            "nudo": 0.5144,
            "mi/min": 26.8224
        }
    },
    fuerza: {
        units: {
            "dina": 1e-5,
            "NEWTON": 1,
            "lb (Libra fuerza)": 4.448,
            "pdl (Poundal)": 0.1383,
            "gf (Gramo-fuerza)": 9.807e-3,
            "kgf (Kilogramo-fuerza)": 9.807
        }
    },
    energia: {
        units: {
            "Btu": 1055,
            "erg": 1e-7,
            "ft·lb": 1.356,
            "hp·h": 2.685e6,
            "JOULE": 1,
            "cal (Caloría)": 4.186,
            "kW·h": 3.6e6,
            "eV": 1.602e-19,
            "MeV": 1.602e-13,
            "kg (Masa equiv. E=mc²)": 8.987e16,
            "u (Masa equiv. E=mc²)": 1.492e-10
        }
    },
    presion: {
        units: {
            "atm": 1.013e5,
            "dina/cm²": 0.1,
            "in de agua": 249.1,
            "cm Hg": 1333,
            "PASCAL": 1,
            "lb/in² (psi)": 6.895e3,
            "lb/ft²": 47.88,
            "bar": 1e5,
            "milibar": 100,
            "torr (mmHg)": 133.322
        }
    },
    potencia: {
        units: {
            "Btu/h": 0.2930,
            "ft·lb/s": 1.356,
            "hp (Caballo de fuerza)": 745.7,
            "cal/s": 4.186,
            "kW": 1000,
            "WATT": 1
        }
    },
    flujo_magnetico: {
        units: {
            "maxwell": 1e-8,
            "WEBER": 1
        }
    },
    campo_magnetico: {
        units: {
            "gauss": 1e-4,
            "TESLA": 1,
            "milligauss": 1e-7
        }
    }
};
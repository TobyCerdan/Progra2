
var tutores = [
    {
        nombre: "María González",
        programas: ["IB", "IGCSE"],
        materias: ["Mathematics", "Physics", "Chemistry"],
        honorarios: 15500,
        dias: ["lunes", "martes", "miercoles"],
        horario: ["08:00", "18:00"]
    },
    {
        nombre: "Carlos Rodríguez",
        programas: ["IB", "TOFEL"],
        materias: ["English Language", "History", "Theory of Knowledge"],
        honorarios: 12000,
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes"],
        horario: ["08:00", "20:00"]
    },
    {
        nombre: "Sofía López",
        programas: ["IB"],
        materias: ["Mathematics", "Biology", "Environmental Systems and Societies"],
        honorarios: 16500,
        dias: ["jueves", "viernes", "sabado", "domingo"],
        horario: ["10:00", "18:00"]
    },
    {
        nombre: "Lucas Martínez",
        programas: ["IGCSE", "FIRST"],
        materias: ["English Literature", "Chemistry", "Spanish"],
        honorarios: 14000,
        dias: ["miercoles"],
        horario: ["16:00", "21:00"]
    },
    {
        nombre: "Ana Fernández",
        programas: ["TOFEL"],
        materias: ["English as a Second Language"],
        honorarios: 10500,
        dias: ["viernes", "sabado", "domingo"],
        horario: ["12:00", "17:00"]
    },
    {
        nombre: "Diego Ramírez",
        programas: ["IB"],
        materias: ["Physics", "Mathematics", "Economics"],
        honorarios: 18000,
        dias: ["lunes", "viernes"],
        horario: ["14:00", "21:00"]
    },
    {
        nombre: "Valentina Torres",
        programas: ["IB", "IGCSE"],
        materias: ["Biology", "Mathematics", "Chemistry"],
        honorarios: 11000,
        dias: ["sabado", "domingo"],
        horario: ["08:00", "14:00"]
    },
    {
        nombre: "Julián Méndez",
        programas: ["IB"],
        materias: ["Business Management", "Economics", "Global Politics"],
        honorarios: 17000,
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes"],
        horario: ["08:00", "16:00"]
    },
    {
        nombre: "Martina Pérez",
        programas: ["TOFEL", "FIRST"],
        materias: ["English", "Literature", "Writing Skills"],
        honorarios: 13500,
        dias: ["martes", "jueves", "domingo"],
        horario: ["09:00", "17:00"]
    }
];

function findTutors() {

    var day = document.getElementById("day").value;
    var time = document.getElementById("time").value;
    var program = document.getElementById("program").value;
    var subject = document.getElementById("subject").value;


    var disponibles = tutores.filter(function(tutor) {
        var diasDisponibles = tutor.dias.some(function(dia) {
            return dia === day; 
        });

        var horarioDisponible = (time >= tutor.horario[0]) && (time <= tutor.horario[1]);
        var programaDisponible = tutor.programas.some(function(p) {
            return p === program; 
        });
        var materiaDisponible = tutor.materias.some(function(m) {
            return m === subject; 
        });

        return diasDisponibles && horarioDisponible && programaDisponible && materiaDisponible;
    });


    var resultDiv = document.getElementById("result");
    if (disponibles.length > 0) {
        var resultados = "<h3>Tutores Disponibles<h3>";
        disponibles.forEach(function(tutor) {
            resultados += tutor.nombre + " - Honorarios: $" + tutor.honorarios + "/hora";
        });
        resultDiv.innerHTML = resultados;
    } else {
        resultDiv.innerHTML = "<h3>No hay tutores disponibles para el día y hora seleccionados.<h3>";
    }
}

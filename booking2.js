// Array de tutores
// Función para guardar una reserva en el localStorage
function guardarReserva(tutor, programa, materia, dia, hora, horas) {
    // Crear objeto de la reserva
    const reserva = {
        nombre: tutor.nombre,
        programa: programa,
        materia: materia,
        dia: dia,
        hora: hora,
        cantidadHoras: horas
    };

    // Obtener el array de reservas almacenado en el localStorage (o un array vacío si no existe)
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva); // Añadir la nueva reserva
    localStorage.setItem("reservas", JSON.stringify(reservas)); // Guardar el array actualizado en localStorage
}
var tutors = [
    {
        nombre: "Martina Pérez",
        programas: ["TOFEL", "FIRST"],
        materias: ["English", "Literature", "Writing Skills"],
        honorarios: 13500,
        dias: ["martes", "jueves", "domingo"],
        horario: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
    },
    {
        nombre: "Carlos Rodríguez",
        programas: ["IB", "IGCSE"],
        materias: ["Mathematics", "Physics", "Chemistry"],
        honorarios: 15000,
        dias: ["lunes", "miércoles", "viernes"],
        horario: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
    },
    {
        nombre: "Sofía López",
        programas: ["IB"],
        materias: ["Mathematics", "Biology", "Environmental Systems and Societies"],
        honorarios: 16500,
        dias: ["jueves", "viernes", "sabado", "domingo"],
        horario: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
    },
    {
        nombre: "Lucas Martínez",
        programas: ["IGCSE", "FIRST"],
        materias: ["English Literature", "Chemistry", "Spanish"],
        honorarios: 14000,
        dias: ["miercoles"],
        horario: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
    },
    {
        nombre: "Ana Fernández",
        programas: ["TOFEL"],
        materias: ["English as a Second Language"],
        honorarios: 10500,
        dias: ["viernes", "sabado", "domingo"],
        horario: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
    },
    {
        nombre: "Diego Ramírez",
        programas: ["IB"],
        materias: ["Physics", "Mathematics", "Economics"],
        honorarios: 18000,
        dias: ["lunes", "viernes"],
        horario: ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
    },
    {
        nombre: "Valentina Torres",
        programas: ["IB", "IGCSE"],
        materias: ["Biology", "Mathematics", "Chemistry"],
        honorarios: 11000,
        dias: ["sabado", "domingo"],
        horario: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"]
    },
    {
        nombre: "Julián Méndez",
        programas: ["IB"],
        materias: ["Business Management", "Economics", "Global Politics"],
        honorarios: 17000,
        dias: ["lunes", "martes", "miercoles", "jueves", "viernes"],
        horario: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]
    },
    {
        nombre: "Martina Pérez",
        programas: ["TOFEL", "FIRST"],
        materias: ["English", "Literature", "Writing Skills"],
        honorarios: 13500,
        dias: ["martes", "jueves", "domingo"],
        horario: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
    }
];


var selectedTutor = localStorage.getItem("selectedTutor");
var hours = parseInt(localStorage.getItem("hours"));

var tutor = tutors.find(t => t.nombre === selectedTutor);

var daySelect = document.getElementById("daySelect");
tutor.dias.forEach(function(day) {
    var option = document.createElement("option");
    option.value = day;
    option.textContent = day.charAt(0).toUpperCase() + day.slice(1);
    daySelect.appendChild(option);
});

var hourSelect = document.getElementById("hourSelect");
tutor.horario.forEach(function(hour) {
    var option = document.createElement("option");
    option.value = hour;
    option.textContent = hour;
    hourSelect.appendChild(option);
});

var subjectSelect = document.getElementById("subjectSelect");
tutor.materias.forEach(function(subject) {
    var option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
});

var programSelect = document.getElementById("programSelect");
tutor.programas.forEach(function(program) {
    var option = document.createElement("option");
    option.value = program;
    option.textContent = program;
    programSelect.appendChild(option);
});

function calculateSubtotal() {
    var subtotal = hours * tutor.honorarios;
    document.getElementById("subtotalDisplay").textContent = "Subtotal: $" + subtotal;
}

calculateSubtotal();

// Modificar el evento de confirmación de reserva
document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault(); 
    
    // Obtener datos seleccionados por el usuario
    const programaSeleccionado = programSelect.value;
    const materiaSeleccionada = subjectSelect.value;
    const diaSeleccionado = daySelect.value;
    const horaSeleccionada = hourSelect.value;

    // Llamar a la función para guardar la reserva
    guardarReserva(tutor, programaSeleccionado, materiaSeleccionada, diaSeleccionado, horaSeleccionada, hours);

    alert("Reserva confirmada para " + selectedTutor + " por " + hours + " horas.");
    window.location.href = 'index.html';
};


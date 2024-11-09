// Obtener el contenedor principal para mostrar las reservas
const contenedorReservas = document.querySelector(".main-content");

// Obtener las reservas almacenadas en el localStorage
let reservas = JSON.parse(localStorage.getItem("reservas")) || [];



// Generar el HTML para cada reserva y agregarlo al contenedor
reservas.forEach((reserva, index) => {
    // Crear el banner de reserva
    const reservaBanner = document.createElement("div");
    reservaBanner.className = "reserva-banner";
    reservaBanner.innerHTML = `<h3>${reserva.nombre}</h3>`;
    reservaBanner.onclick = () => toggleDetalles(`detalles${index}`);

    // Crear el contenido desplegable
    const reservaDetalles = document.createElement("div");
    reservaDetalles.className = "reserva-detalles";
    reservaDetalles.id = `detalles${index}`;
    reservaDetalles.style.display = "none";
    reservaDetalles.innerHTML = `
        <p><strong>Dia:</strong> ${reserva.dia}</p>
        <p><strong>Hora:</strong> ${reserva.hora}</p>
        <p><strong>Cantidad de horas:</strong> ${reserva.cantidadHoras}hs</p>
        <p><strong>Materia:</strong> ${reserva.programa} - ${reserva.materia}</p>
        <div class="botones">
        <!-- Ejemplo de botón en HTML con un índice dinámico -->
            <button class="boton-modificar" onclick="borrarYRedirigir(${index})">MODIFICAR</button>
            <button class="boton-eliminar" onclick="eliminarReserva(${index})">ELIMINAR</button>
            <button class="boton-realizada" onclick="eliminarReserva(${index})">REALIZADA</button>
        </div>
    `;

    // Añadir el banner y los detalles al contenedor principal
    contenedorReservas.appendChild(reservaBanner);
    contenedorReservas.appendChild(reservaDetalles);
});

// Función para eliminar una reserva
function eliminarReserva(index) {
    reservas.splice(index, 1); // Remover la reserva del array
    localStorage.setItem("reservas", JSON.stringify(reservas)); // Actualizar el localStorage
    location.reload(); // Recargar la página para actualizar la lista de reservas
}

function borrarYRedirigir(index) {
    // Borra la reserva del Local Storage usando el índice proporcionado
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.splice(index, 1); // Elimina la reserva en la posición indicada por 'index'

    // Actualiza el Local Storage con las reservas actualizadas
    localStorage.setItem("reservas", JSON.stringify(reservas));

    // Redirecciona al usuario a booking.html
    window.location.href = "booking.html";
}

// Función para alternar la visibilidad de los detalles
function toggleDetalles(id) {
    const detalles = document.getElementById(id);
    detalles.style.display = detalles.style.display === "none" ? "block" : "none";
}

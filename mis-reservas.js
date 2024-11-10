
const contenedorReservas = document.querySelector(".main-content");


let reservas = JSON.parse(localStorage.getItem("reservas")) || [];



reservas.forEach((reserva, index) => {

    const reservaBanner = document.createElement("div");
    reservaBanner.className = "reserva-banner";
    reservaBanner.innerHTML = `<h3>${reserva.nombre}</h3>`;
    reservaBanner.onclick = () => toggleDetalles(`detalles${index}`);


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
            <button class="boton-modificar" onclick="borrarYRedirigir(${index})">MODIFICAR</button>
            <button class="boton-eliminar" onclick="eliminarReserva(${index})">ELIMINAR</button>
            <button class="boton-realizada" onclick="eliminarReserva(${index})">REALIZADA</button>
        </div>
    `;


    contenedorReservas.appendChild(reservaBanner);
    contenedorReservas.appendChild(reservaDetalles);
});


function eliminarReserva(index) {
    reservas.splice(index, 1); 
    localStorage.setItem("reservas", JSON.stringify(reservas));
    alert("¡Se realizaron los cambios exitosamente!");
    location.reload(); 
}

function borrarYRedirigir(index) {

    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.splice(index, 1);


    localStorage.setItem("reservas", JSON.stringify(reservas));


    window.location.href = "booking.html";
}


function toggleDetalles(id) {
    const detalles = document.getElementById(id);
    detalles.style.display = detalles.style.display === "none" ? "block" : "none";
}


function vaciarCarrito() {
    localStorage.removeItem("carritoReservas"); 
    alert("¡Se realizaron los cambios exitosamente!");      
}

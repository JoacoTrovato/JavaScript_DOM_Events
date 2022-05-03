// querySelector

const heading = document.querySelector(".header__texto h2") // 0 o 1 elementos
//heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
// enlaces[0].textContent = "Nuevo Texto para Enlace";
// enlaces[0].classList.add("nueva-clase");
// enlaces[0].classList.remove("navegacion__enlace");
console.log(enlaces);

// getElementById

const heading2 = document.getElementById("heading");
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

// Agregarlo al documento

const navegacionSuperior = document.querySelector('.header .navegacion');
navegacionSuperior.appendChild(nuevoEnlace);
const navegacionInferior = document.querySelector('.footer .navegacion');
navegacionInferior.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

// console.log(1);

// window.addEventListener("load", function() { // load espera a que el JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3);
// };

// document.addEventListener("DOMContentLoaded", function() { // Sólo espera por el HTML pero no espera por el CSS e imágenes
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function() {
//     console.log("Scrolling...");
// };

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(event) {
//     event.preventDefault();

//     // Validar un formulario

//     console.log("Enviando Formulario");
// });

// Eventos de los inputs y textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

// Seleccionar elementos y asociarles un evento

const nombre = document.querySelector("nombre");
const email = document.querySelector("email");
const mensaje = document.querySelector("mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// El Evento del Submit

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", true);

        // Crear la alerta de enviar correctamente
    } else {
        mostrarAlerta("Mensaje enviado correctamente");
    }
    return; // Corta la ejecución del código
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// Muestra una alerta de que se envió correctamente

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }
    formulario.appendChild(alerta);
    
    // Desaparece notidicación después de cinco segundos

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
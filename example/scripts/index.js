/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");
/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";

const nombre = prompt("Podrias indicarme tu nombre por favor?");

console.log("Tu nombre es:" + nombre);
alert("Bienvenido a mi pagina " + nombre + "!");
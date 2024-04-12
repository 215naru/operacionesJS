const frase = prompt("Ingresa una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad = "La cantidad de caracteres es: "+cantidad;
console.log(mensajeCantidad)
const fraseMinuscula = frase.toLowerCase();
const fraseMayuscula = frase.toUpperCase();
const minMay = "Frase minuscula: " + fraseMinuscula+" "+ "Frase mayuscula: "+fraseMayuscula;
console.log(minMay)
console.log("Hola mundo!");

const animales = ['perro', 'gato']

var divAnimales = document.getElementById("animales")

function mostrarAnimales() {
    for (var i = 0; i < 2; i++) {
        divAnimales.innerHTML += `
    <p>${animales[i]}</p>
    `;
    }
}

window.onload = mostrarAnimales;
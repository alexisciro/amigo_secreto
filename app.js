let listaAmigos = [];
let amigoSorteado = "";

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    limpiarCaja();
}

// Muestra la lista de amigos en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Limpia el campo de texto
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

// Sortea un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento("#resultado", "<li>La lista está vacía. Agrega nombres antes de sortear.</li>");
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    amigoSorteado = listaAmigos[indice];

    asignarTextoElemento(
        "#resultado",
        `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`
    );
}

// Inicializa el estado (como condicionesIniciales en tu otro código)
function condicionesIniciales() {
    asignarTextoElemento("h1", "Amigo Secreto");
    asignarTextoElemento("p", "Agrega los nombres y luego sortea un amigo secreto 🎁");
    listaAmigos = [];
    amigoSorteado = "";
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// Llamamos a la función al cargar la página
condicionesIniciales();



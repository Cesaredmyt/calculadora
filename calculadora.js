function agregarNumero(num) {
    document.getElementById("pantalla").value += num;
}

function agregarOperador(op) {
    let pantalla = document.getElementById("pantalla").value;
    if (pantalla.length > 0 && !isNaN(pantalla[pantalla.length - 1])) {
        document.getElementById("pantalla").value += op;
    }
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    try {
        document.getElementById("pantalla").value = eval(document.getElementById("pantalla").value);
    } catch {
        document.getElementById("pantalla").value = "Error";
    }
}
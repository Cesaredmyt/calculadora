function agregarNumero(num) {
    document.getElementById("pantalla").value += num;
}

function agregarOperador(op) {
    let pantalla = document.getElementById("pantalla").value;
    
    if (pantalla.length > 0 && !isNaN(pantalla[pantalla.length - 1])) {
        document.getElementById("pantalla").value += op;
    }
}

function agregarDecimal() {
    let pantalla = document.getElementById("pantalla").value;
    let partes = pantalla.split(/[\+\-\*\/]/);

    if (!partes[partes.length - 1].includes('.')) {
        document.getElementById("pantalla").value += '.';
    }
}

function limpiar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    try {
        let resultado = eval(document.getElementById("pantalla").value);
        
        // Redondear si es decimal
        document.getElementById("pantalla").value = Number.isInteger(resultado) ? resultado : resultado.toFixed(4);
    } catch {
        document.getElementById("pantalla").value = "Error";
    }
}

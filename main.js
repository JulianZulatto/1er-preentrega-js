


function jugar() {
    let opciones = ['piedra', 'papel', 'tijeras'];
    let eleccionUsuario = prompt('Elige: piedra, papel o tijeras').toLowerCase(); // Convertir a minúsculas

    let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

    if (!opciones.includes(eleccionUsuario)) {
        alert('Por favor, ingresa una opción válida: piedra, papel o tijeras');
        return;
    }

    if (eleccionUsuario === eleccionMaquina) {
        alert('Empate! Ambos eligieron ' + eleccionUsuario);
    } else if ((eleccionUsuario === 'piedra' && eleccionMaquina === 'tijeras') ||
        (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') ||
        (eleccionUsuario === 'tijeras' && eleccionMaquina === 'papel')) {
        alert('¡Ganaste! La máquina eligió ' + eleccionMaquina);
    } else {
        alert('Perdiste. La máquina eligió ' + eleccionMaquina);
    }
}

let continuar = true;

while (continuar) {
    jugar();

    let respuesta = prompt('¿Deseas seguir jugando? (s/n)').toLowerCase();

    if (respuesta !== 's') {
        continuar = false;
    }
}
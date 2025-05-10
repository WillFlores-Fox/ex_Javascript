
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function atualizarDisplay() {
    const formatar = (num) => num.toString().padStart(2, '0');
    document.getElementById("display").innerText =
        `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`;
}

function iniciar() {
    if (intervalo) return;
    intervalo = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
        atualizarDisplay();
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function zerar() {
    pausar();
    segundos = 0;
    minutos = 0;
    horas = 0;
    atualizarDisplay();
}

atualizarDisplay(); // Inicializa com 00:00:00

function converterTemperatura() {
    const valor = parseFloat(document.getElementById("entrada").value);
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.textContent = "Digite um valor válido.";
        resultado.className = "";
        return;
    }

    if (origem === destino) {
        resultado.textContent = "As escalas devem ser diferentes.";
        resultado.className = "";
        return;
    }

    let valorEmCelsius;

    // Primeiro converte o valor para Celsius
    switch (origem) {
        case "celsius":
            valorEmCelsius = valor;
            break;
        case "fahrenheit":
            valorEmCelsius = (valor - 32) * 5 / 9;
            break;
        case "kelvin":
            valorEmCelsius = valor - 273.15;
            break;
    }

    // Depois converte para a escala de destino
    let convertido, simbolo;

    switch (destino) {
        case "celsius":
            convertido = valorEmCelsius;
            simbolo = "°C";
            break;
        case "fahrenheit":
            convertido = (valorEmCelsius * 9 / 5) + 32;
            simbolo = "°F";
            break;
        case "kelvin":
            converted = valorEmCelsius + 273.15;
            simbolo = "K";
            break;
    }

    // Ícone e cor com base na temperatura em Celsius
    let icone = "🌡️";
    let classe = "";

    if (valorEmCelsius < 10) {
        icone = "❄️";
        classe = "resultado-frio";
    } else if (valorEmCelsius <= 25) {
        icone = "🌤️";
        classe = "resultado-morno";
    } else {
        icone = "🔥";
        classe = "resultado-quente";
    }

    resultado.className = classe;
    resultado.textContent = `${icone} Resultado: ${convertido.toFixed(2)} ${simbolo}`;
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.textContent = "Digite um peso e altura válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultado.textContent = `Seu IMC é ${imc.toFixed(1)} (${classificacao})`;
}

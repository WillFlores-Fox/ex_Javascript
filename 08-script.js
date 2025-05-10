function verificarPalindromo() {
    const entrada = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    if (!entrada.trim()) {
        resultado.textContent = "Digite uma palavra ou frase.";
        return;
    }

    // Remove acentos, espaços e pontuação, e transforma em minúsculas
    const textoNormalizado = entrada
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[^a-z0-9]/g, "");      // remove caracteres não alfanuméricos

    const reverso = textoNormalizado.split("").reverse().join("");

    if (textoNormalizado === reverso) {
        resultado.textContent = "✅ É um palíndromo!";
    } else {
        resultado.textContent = "❌ Não é um palíndromo.";
    }
}

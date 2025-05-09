function verificarIdade() {
    const anoNascimento = parseInt(document.getElementById('ano').value);
    const resultado = document.getElementById('resultado');
    const anoAtual = new Date().getFullYear();

    if (isNaN(anoNascimento) || anoNascimento <= 1900 || anoNascimento > anoAtual) {
        resultado.textContent = "Por favor, insira um ano de nascimento válido.";
        return;
    }

    const idade = anoAtual - anoNascimento;
    let classificacao = "";

    if (idade < 18) {
        classificacao = "Menor de idade";
    } else if (idade < 60) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    resultado.textContent = `Você tem ${idade} anos. Classificação: ${classificacao}.`;
}
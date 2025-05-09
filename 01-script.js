function verificarParOuImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    const reproduzido = document.getElementById('reproduzido');

    if (isNaN(numero)) {
      resultado.textContent = "Por favor, digite um número válido.";
      reproduzido.textContent = "";
      return;
    }

    const tipo = numero % 2 === 0 ? "par" : "ímpar";
    reproduzido.textContent = numero;
    resultado.textContent = `O número ${numero} é ${tipo}.`;
  }
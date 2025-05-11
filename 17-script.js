function verificarPrimo() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(numero) || numero < 1) {
      resultado.innerHTML = "Digite um número inteiro positivo.";
      return;
    }
  
    if (numero === 1) {
      resultado.innerHTML = "1 não é primo nem composto.";
      return;
    }
  
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
  
    resultado.innerHTML = ehPrimo
      ? `${numero} é um número primo.`
      : `${numero} não é primo.`;
  }
  
  function contar() {
    const inicio = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
      resultado.textContent = "Preencha todos os campos corretamente (passo deve ser maior que zero).";
      return;
    }

    let contagem = "";
    if (inicio < fim) {
      // Contagem crescente
      for (let i = inicio; i <= fim; i += passo) {
        contagem += `${i} 👉 `;
      }
    } else {
      // Contagem decrescente
      for (let i = inicio; i >= fim; i -= passo) {
        contagem += `${i} 👉 `;
      }
    }

    resultado.textContent = contagem + "FIM";
  }

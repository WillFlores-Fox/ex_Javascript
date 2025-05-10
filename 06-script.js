 function gerarTabuada() {
    const num = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    if (isNaN(num)) {
      resultado.innerHTML = "<p>Digite um número válido.</p>";
      return;
    }

    for (let i = 1; i <= 10; i++) {
      const item = document.createElement('p');
      item.textContent = `${num} × ${i} = ${num * i}`;
      resultado.appendChild(item);
    }
  }


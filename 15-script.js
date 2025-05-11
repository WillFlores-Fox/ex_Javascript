const votos = [0, 0, 0];

function votar(indice) {
  votos[indice]++;
  atualizarResultados();
}

function atualizarResultados() {
  const total = votos.reduce((a, b) => a + b, 0);
  const resultados = document.getElementById("resultados");
  const opcoes = ["opção 1", "opção 2", "opção 3"];

  resultados.innerHTML = "";

  votos.forEach((qtd, i) => {
    const porcentagem = total ? ((qtd / total) * 100).toFixed(1) : 0;
    const item = document.createElement("li");
    item.textContent = `${opcoes[i]}: ${qtd} voto(s) - ${porcentagem}%`;
    resultados.appendChild(item);
  });
}

function limparVotos() {
  for (let i = 0; i < votos.length; i++) {
    votos[i] = 0;
  }
  atualizarResultados();
}

atualizarResultados(); // inicia com tudo zerado

let notas = [];

function adicionarNota() {
  const input = document.getElementById("notaInput");
  const nota = parseFloat(input.value);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Digite uma nota válida entre 0 e 10.");
    return;
  }

  notas.push(nota);
  input.value = "";
  mostrarNotas();
}

function mostrarNotas() {
  document.getElementById("notasLista").innerHTML = 
    "Notas adicionadas: " + notas.join(", ");
}

function calcularMedia() {
  if (notas.length < 3) {
    document.getElementById("resultado").innerHTML = 
      "Adicione pelo menos 3 notas.";
    return;
  }

  const soma = notas.reduce((a, b) => a + b, 0);
  const media = (soma / notas.length).toFixed(2);
  let situacao = "";

  if (media >= 7) {
    situacao = "Aprovado!";
  } else if (media >= 5) {
    situacao = "Recuperação.";
  } else {
    situacao = "Reprovado.";
  }

  document.getElementById("resultado").innerHTML = 
    `📊 Média: <strong>${media}</strong><br>${situacao}`;
}

function limparNotas() {
  notas = [];
  document.getElementById("notasLista").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}

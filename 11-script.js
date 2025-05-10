function simularCaixa() {
    const valorInput = document.getElementById("valor");
    const resultadoDiv = document.getElementById("resultado");

    let valor = parseInt(valorInput.value);
    let totalSaque = valor;

    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.innerHTML = "<p>Digite um valor válido.</p>";
        resultadoDiv.classList.remove("animar");
        return;
    }

    const notas = [100, 50, 20, 10, 5, 2, 1];
    const cores = {
        100: "#4fc3f7",   // azul claro
        50: "#fbc02d",    // amarelo escuro
        20: "#ffeb3b",    // amarelo
        10: "#f48fb1",    // rosa
        5: "#ba68c8",     // roxo
        2: "#1976d2",     // azul escuro
        1: "#9e9e9e"      // cinza
    };

    let resultado = `<p><strong>💰 Saque de R$ ${totalSaque},00</strong></p>`;

    notas.forEach(nota => {
        const qtd = Math.floor(valor / nota);
        if (qtd > 0) {
            resultado += `
          <p>
            <i class="fa-solid fa-money-bill-wave" style="color: ${cores[nota]}; margin-right: 8px;"></i>
            <strong>${qtd}</strong> nota(s) de R$ ${nota},00
          </p>
        `;
            valor %= nota;
        }
    });

    resultadoDiv.innerHTML = resultado;

    // Animação
    resultadoDiv.classList.remove("animar");
    void resultadoDiv.offsetWidth;
    resultadoDiv.classList.add("animar");

    // Limpa o campo
    valorInput.value = "";
}
let total = 0;

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarTotal() {
    document.getElementById('totalCompra').textContent = `Total: ${formatarValor(total)}`;
}

function adicionarProduto() {
    const nome = document.getElementById('nome').value.trim();
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const valor = parseFloat(document.getElementById('valor').value);

    if (!nome || isNaN(quantidade) || isNaN(valor) || quantidade <= 0 || valor < 0) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    function limparLista() {
        const lista = document.getElementById('lista');
        lista.innerHTML = "";
        total = 0;
        atualizarTotal();
    }

    const subtotal = quantidade * valor;
    total += subtotal;

    const li = document.createElement('li');
    li.innerHTML = `${nome} – ${quantidade} × ${formatarValor(valor)} = <strong>${formatarValor(subtotal)}</strong>`;

    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash-can fa-lg"></i>';
    btn.style.marginLeft = '10px';

    btn.onclick = () => {
        total -= subtotal;
        li.remove();
        atualizarTotal();
    };


    li.appendChild(btn);
    document.getElementById('lista').appendChild(li);
    atualizarTotal();

    // Limpar campos
    document.getElementById('nome').value = "";
    document.getElementById('quantidade').value = "";
    document.getElementById('valor').value = "";
    document.getElementById('nome').focus();
}

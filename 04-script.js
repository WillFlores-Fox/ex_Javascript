function calcular() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Preencha os dois números corretamente.";
        return;
    }

    let res = 0;
    switch (operacao) {
        case 'soma':
            res = n1 + n2;
            break;
        case 'subtracao':
            res = n1 - n2;
            break;
        case 'multiplicacao':
            res = n1 * n2;
            break;
        case 'divisao':
            if (n2 === 0) {
                resultado.textContent = "Divisão por zero não é permitida.";
                return;
            }
            res = n1 / n2;
            break;
    }

    resultado.textContent = `Resultado: ${res}`;
}

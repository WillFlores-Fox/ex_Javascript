  function mudarLuz(cor) {
    const cores = ['vermelho', 'amarelo', 'verde'];

    cores.forEach(c => {
      const luz = document.getElementById(c);
      luz.className = 'luz'; // remove todas as classes extras
    });

    document.getElementById(cor).classList.add(`acesa-${cor}`);
  }

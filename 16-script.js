function contarTexto() {
    const texto = document.getElementById("texto").value.trim();
  
    if (texto === "") {
      document.getElementById("resultado").innerHTML = "❌ Digite algo para contar.";
      return;
    }
  
    const palavras = texto.split(/\s+/).filter(p => p !== "");
    const letras = texto.replace(/\s/g, '');
  
    document.getElementById("resultado").innerHTML = `
      Palavras: <strong>${palavras.length}</strong><br>
      Letras: <strong>${letras.length}</strong>
    `;
  }
  
function validarCadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const msg = document.getElementById("mensagem");
  
    if (!nome || !email || !senha) {
      msg.innerHTML = "Preencha todos os campos.";
      msg.style.color = "red";
      return;
    }
  
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      msg.innerHTML = "E-mail inválido.";
      msg.style.color = "orange";
      return;
    }
  
    if (senha.length < 6) {
      msg.innerHTML = "A senha deve ter no mínimo 6 caracteres.";
      msg.style.color = "orange";
      return;
    }
  
    msg.innerHTML = "Cadastro realizado com sucesso!";
    msg.style.color = "green";
  }
  
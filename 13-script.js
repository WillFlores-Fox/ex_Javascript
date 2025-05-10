function generatePassword() {
    const length = document.getElementById("length").value;
    const useUpper = document.getElementById("uppercase").checked;
    const useLower = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;
  
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}<>?/";
  
    let allChars = "";
    if (useUpper) allChars += upper;
    if (useLower) allChars += lower;
    if (useNumbers) allChars += numbers;
    if (useSymbols) allChars += symbols;
  
    if (allChars === "") {
      alert("Selecione pelo menos um tipo de caractere!");
      return;
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      password += randomChar;
    }
  
    document.getElementById("result").value = password;
  }
  
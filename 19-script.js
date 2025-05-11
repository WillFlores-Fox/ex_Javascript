let secretNumber, maxNumber, attemptsLeft, isGameOver = false;

function startGame() {
  const difficulty = document.getElementById("difficulty").value;
  const input = document.getElementById("guess");
  const info = document.getElementById("info");
  const feedback = document.getElementById("feedback");
  const remaining = document.getElementById("remaining");

  feedback.textContent = "";
  remaining.textContent = "";
  input.disabled = false;
  input.value = "";
  isGameOver = false;

  if (difficulty === "easy") {
    maxNumber = 25;
    attemptsLeft = 20;
  } else if (difficulty === "normal") {
    maxNumber = 50;
    attemptsLeft = 20;
  } else {
    maxNumber = 100;
    attemptsLeft = 20;
  }

  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  info.textContent = `Tente adivinhar o número entre 1 e ${maxNumber}!`;
}

function checkGuess() {
  if (isGameOver) return;

  const guess = parseInt(document.getElementById("guess").value);
  const feedback = document.getElementById("feedback");
  const remaining = document.getElementById("remaining");

  if (isNaN(guess) || guess < 1 || guess > maxNumber) {
    feedback.textContent = `Digite um número válido entre 1 e ${maxNumber}.`;
    return;
  }

  if (guess === secretNumber) {
    feedback.textContent = "🎉 Parabéns! Você acertou!";
    isGameOver = true;
    document.getElementById("guess").disabled = true;
  } else if (guess < secretNumber) {
    feedback.textContent = "🔼 Muito baixo! Tente um número maior.";
  } else {
    feedback.textContent = "🔽 Muito alto! Tente um número menor.";
  }

  attemptsLeft--;
  remaining.textContent = `Tentativas restantes: ${attemptsLeft}`;

  if (attemptsLeft <= 0 && guess !== secretNumber) {
    feedback.textContent = `😢 Fim de jogo! O número era ${secretNumber}.`;
    isGameOver = true;
    document.getElementById("guess").disabled = true;
  }
}

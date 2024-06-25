let display = document.getElementById("display-text");

// Função para adicionar caracteres ao visor
function appendCharacter(char) {
  display.textContent += char;
}

// Função para limpar o visor
function clearDisplay() {
  display.textContent = "";
}

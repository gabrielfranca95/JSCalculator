let display = document.getElementById("display-text");

// Função para adicionar caracteres ao visor
function appendCharacter(char) {
  display.textContent += char;
}

// Função para limpar o visor
function clearDisplay() {
  display.textContent = "";
}

function calculateResult() {
  try {
    let expression = display.textContent
      .replace("÷", "/")
      .replace("x", "*")
      .replace(",", ".")
      .replace("mod", "%")
      .replace("√", "Math.sqrt")
      .replace("π", Math.PI);

    if (expression.includes("^2")) {
      expression = expression.replace(/\b(\d+)\^2\b/g, "Math.pow($1, 2)");
    }

    let result = eval(expression);

    display.textContent = result;
  } catch (error) {
    display.textContent = "Erro";
  }
}

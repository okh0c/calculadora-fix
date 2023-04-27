const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operacionInput = document.getElementById("operacion");
const calcularBtn = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

function validarValor(valor) {
  return !isNaN(valor);
}

function operar(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Error: no se puede dividir por cero." : num1 / num2;
    default:
      return "Error: operación no válida.";
  }
}

function mostrarError(mensaje) {
  resultadoDiv.textContent = `Error: ${mensaje}`;
}

function calcular() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operacion = operacionInput.value;

  if (!validarValor(num1) || !validarValor(num2)) {
    mostrarError("Uno o ambos valores ingresados no son números.");
    return;
  }

  const resultado = operar(num1, num2, operacion);

  if (typeof resultado === "number") {
    resultadoDiv.textContent = `El resultado es: ${resultado.toFixed(2)}`;
  } else {
    mostrarError(resultado);
  }
}

calcularBtn.addEventListener("click", calcular);

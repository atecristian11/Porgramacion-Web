// menu
let op = document.getElementById("op");

const operaciones = () => {
  let op = prompt(
    "Bievenido a las operaciones basicas por favor digita el numero correspondiente para la operacion que deseas hacer:\n \n 1. Suma \n 2. Resta \n 3. multiplicacion \n 4. Division \n 5. Salir" 
  );
  console.log(op);

  while (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5") {
    alert("Por favor ingresar una opcion valida de 1 a 5");
    op = prompt(
      "Digita: \n 1. Suma \n 2. Resta \n 3. multiplicacion \n 4. Division \n 5. Salir"
    );
  }

  if (op === "1") {
    let num1 = parseFloat(prompt("Ingrese el numero 1"));
    let num2 = parseFloat(prompt("Ingrese el numero 2"));
    let resultado = 0; // null - undefined - NaN
    resultado = num1 + num2;
    alert("El resultado es: " + resultado);

    final = prompt("Deseas realizar mas operaciones \n(Solo escribir si o no)");
    final1 = final.toLowerCase();
    while (final1 === "si") {
      operaciones();
    }
  }
  if (op === "2") {
    let num1 = parseFloat(prompt("Ingrese el numero 1"));
    let num2 = parseFloat(prompt("Ingrese el numero 2"));
    let resultado = 0; // null - undefined - NaN
    resultado = num1 - num2;
    alert("El resultado es: " + resultado);

    final = prompt("Deseas realizar mas operaciones \n(Solo escribir si o no)");
    final1 = final.toLowerCase();
    while (final1 === "si") {
      operaciones();
    }
  }
  if (op === "3") {
    let num1 = parseFloat(prompt("Ingrese el numero 1"));
    let num2 = parseFloat(prompt("Ingrese el numero 2"));
    let resultado = 0; // null - undefined - NaN
    resultado = num1 * num2;
    alert("El resultado es: " + resultado);

    final = prompt("Deseas realizar mas operaciones \n(Solo escribir si o no)");
    final1 = final.toLowerCase();
    while (final1 === "si") {
      operaciones();
    }
  }
  if (op === "4") {
    let num1 = parseFloat(prompt("Ingrese el numero 1"));
    let num2 = parseFloat(prompt("Ingrese el numero 2"));
    let resultado = 0; // null - undefined - NaN
    resultado = num1 / num2;
    if (num2 === 0) {
      return alert("No es posible dividir por 0");
    } else {
      alert("El resultado es: " + resultado);

      final = prompt(
        "Deseas realizar mas operaciones \n(Solo escribir si o no)"
      );
      final1 = final.toLowerCase();
      while (final1 === "si") {
        operaciones();
      }
    }
  }
  if (op === "5") {
    alert("Gracias por tu participación");
  }
};

// eventos
op.onclick = function () {
  operaciones();
};

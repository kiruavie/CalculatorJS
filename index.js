// variables
var display = document.getElementById("display");
var firstNumber = "";
var operator = "";
var secondNumber = "";

//operators
// Fonction pour ajouter
function add(a, b) {
  return a + b;
}

// Fonction pour soustraire
function subtract(a, b) {
  return a - b;
}

// Fonction pour multiplier
function multiply(a, b) {
  return a * b;
}

// Fonction pour diviser
function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return NaN; // Retourne NaN pour gérer la division par zéro
  }
}

// Tests
console.log("Addition : " + additionner(5, 3)); // Résultat attendu : 8
console.log("Soustraction : " + soustraire(10, 4)); // Résultat attendu : 6
console.log("Multiplication : " + multiplier(7, 2)); // Résultat attendu : 14
console.log("Division : " + diviser(15, 3)); // Résultat attendu : 5
console.log("Division par zéro : " + diviser(10, 0)); // Résultat attendu : "Impossible de diviser par zéro"

//ajouter des chiffres à l'affichage

function appendToDisplay(value) {
  display.value += value;
}

//fonction pour definir l'operateur

function setOperator(op) {
  operator = op;
  firstNumber = display.value;
  display.value = "";
}

//function pour effectuer le calcul

// Fonction pour effectuer le calcul
function calculate() {
  if (operator && firstNumber && display.value) {
    secondNumber = display.value;
    var result = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );

    if (!isNaN(result)) {
      // Afficher le résultat arrondi à 2 décimales
      display.value = parseFloat(result.toFixed(2));

      // Réinitialiser les variables
      firstNumber = result;
      operator = "";
      secondNumber = "";
    } else {
      // Gérer la division par zéro
      display.value = "Erreur: Division par zéro";
      setTimeout(clearDisplay, 2000); // Effacer après 2 secondes
    }
  }
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  display.value = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

// Fonction pour effectuer les opérations mathématiques
function operate(op, a, b) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "error";
  }
}

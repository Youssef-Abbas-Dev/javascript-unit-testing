function calculator(number1, number2, operator) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("Please enter number!");
  }

  if (operator === "+") return number1 + number2;
  if (operator === "-") return number1 - number2;
  if (operator === "*") return number1 * number2;
  if (operator === "/") return number1 / number2;

  return {
    message: "invalid operator!",
    success: false,
  };
}

module.exports = { calculator };

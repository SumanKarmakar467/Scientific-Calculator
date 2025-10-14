const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const themeToggle = document.getElementById("theme-toggle");
let memory = 0;
let ans = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => handleInput(btn.textContent));
});

function handleInput(value) {
  if (value === "=") calculate();
  else if (value === "AC") display.value = "";
  else if (value === "⌫") display.value = display.value.slice(0, -1);
  else if (value === "Ans") display.value += ans;
  else if (value === "M+") memory += parseFloat(display.value) || 0;
  else if (value === "M-") memory -= parseFloat(display.value) || 0;
  else if (value === "MR") display.value += memory;
  else if (value === "π") display.value += Math.PI;
  else if (value === "e") display.value += Math.E;
  else if (value === "√x") display.value = Math.sqrt(display.value);
  else if (value === "x²") display.value = Math.pow(display.value, 2);
  else if (value === "x³") display.value = Math.pow(display.value, 3);
  else if (value === "log") display.value = Math.log10(display.value);
  else if (value === "ln") display.value = Math.log(display.value);
  else if (value === "n!") display.value = factorial(display.value);
  else if (value === "±") display.value = -display.value;
  else display.value += value;
}

function factorial(n) {
  n = Number(n);
  if (n < 0) return "Error";
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function calculate() {
  try {
    ans = eval(
      display.value
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/−/g, "-")
    );
    display.value = ans;
  } catch {
    display.value = "Error";
  }
}

// Keyboard input
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculate();
  else if (e.key === "Backspace") display.value = display.value.slice(0, -1);
  else if (/[\d+\-*/().]/.test(e.key)) display.value += e.key;
});

// Theme toggle
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
